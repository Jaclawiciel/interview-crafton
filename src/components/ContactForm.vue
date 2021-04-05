<template>
  <div class="form">
    <div v-if="sendingForm" class="sending-form">
      <img src="../assets/img/logo.png" alt="Logo">
    </div>
    <div class="form-wrapper">
      <transition name="fade" mode="out-in">
        <div v-if="formSent" class="form-sent">
          <h4>Formularz wysłany poprawnie! 👌</h4>
        </div>

        <form v-else class="contact-form">

          <div class="title-section">
            <h3 class="form-title">Nie znalazłeś odpowiedniego kontaktu?</h3>
            <h4 class="form-subtitle">Skorzystaj z formularza.</h4>
          </div>


          <div class="name-row">
            <div class="input-group" :class="{'field-error': !isFieldValid('firstName')}">
              <input type="text" required v-model="firstName" @input="clearFieldError('firstName')">
              <label>Imię</label>
            </div>

            <div class="input-group" :class="{'field-error': !isFieldValid('lastName')}">
              <input type="text" required v-model="lastName"
                     @input="clearFieldError('lastName')">
              <label>Nazwisko</label>
            </div>
          </div>

          <div class="input-group" :class="{'field-error': !isFieldValid('email')}">
            <input type="email" required v-model="email"
                   @input="clearFieldError('email')">
            <label>Adres e-mail</label>
          </div>

          <div class="input-group" :class="{'field-error': !isFieldValid('message')}">
      <textarea name="message"
                id="message"
                cols="30"
                rows="10"
                required
                v-model="message"
                :class="{'field-error': !isFieldValid('message')}"
                @input="clearFieldError('message')"
      ></textarea>
            <label>Treść wiadomości</label>
          </div>

          <div class="rodo">
            <div>
              <input v-model="rodoChecked"
                     type="checkbox" id="rodo-checkbox" class="rodo-checkbox"
                     :class="{'field-error': !isFieldValid('rodoChecked')}"
                     @input="clearFieldError('rodoChecked')">
            </div>
            <label class="label-checkbox" for="rodo-checkbox" name="rodo-checkbox-label">Wyrażam zgodę na przetwarzanie
              moich
              danych osobowych w rozumieniu ustawy z dnia 29 sierpnia 1997 roku o ochronie danych osobowych oraz ustawy z
              dnia
              16 lipca 2004 roku Prawo telekomunikacyjne w celach marketingowych przez Collegium Da Vinci i oświadczam, iż
              podanie przeze mnie danych osobowych jest dobrowolne oraz iż zostałem poinformowany o prawie żądania dostępu
              do
              moich danych osobowych, ich zmiany oraz usunięcia. </label>
          </div>

          <c-button class="send-form-button" @click="sendForm" style-type="fill" :disabled="sendingForm">Wyślij</c-button>

          <div v-if="formError && !sendingForm" class="form-error">
            <p class="error">Coś poszło nie tak! <br/>{{ formError }}</p>
          </div>
        </form>

      </transition>
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {reactive, toRefs} from 'vue';
import {computed, ref} from "@vue/reactivity";
import CButton from "@/components/c-button";

export default {
  name: "ContactForm",
  components: {CButton},
  setup() {
    const store = useStore()
    const fieldsError = ref({})

    const data = reactive({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      rodoChecked: false
    })

    let formSent = ref(false)
    let formError = ref(false)

    const sendingForm = computed(() => store.state['loaders']['contactForm'].isLoading)

    function isFieldValid(field) {
      return fieldsError.value[field] === undefined || fieldsError.value[field] === false
    }

    function clearFieldError(field) {
      fieldsError.value[field] = false
    }

    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    function isFormValid() {
      fieldsError.value = {}
      for (const [field, value] of Object.entries(data)) {
        if (value === "" || value === false) {
          fieldsError.value[field] = true;
        }

        if (field === 'email') {
          fieldsError.value[field] = !validateEmail(value);
        }
      }

      return Object.keys(fieldsError.value).length === 0 || Object.values(fieldsError.value).every(value => value === false);
    }

    async function sendForm() {
      if (!isFormValid()) {
        console.warn("Fields validation error", fieldsError.value)
        return
      }

      try {
        formError.value = false;
        await store.dispatch('main/sendContactForm', data)
        formSent.value = true;
      } catch (e) {
        formError.value = e;
      }
    }

    return {
      ...toRefs(data),
      sendingForm,
      formSent,
      formError,
      fieldsError,

      // methods
      sendForm,
      isFieldValid,
      clearFieldError
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  background: $form-background;

  .form-wrapper {
    padding: 50px 20px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: $form-text;

    .title-section {
      margin-bottom: 40px;

      .form-title {
        font-size: 1.125rem;
        text-align: center;
        font-weight: 500;
        margin: 0 0 10px;
      }

      .form-subtitle {
        display: block;
        text-align: center;
        font-size: .9375rem;
        font-weight: 500;
        color: $blue-grey;
        margin: 0;
      }
    }

    .name-row {
      display: flex;
      justify-content: space-between;

      .input-group {
        width: 48%;

        input {
          width: 100%;
        }
      }
    }

    .rodo {
      display: flex;

      .rodo-checkbox {
        margin-right: 10px;
      }

      label {
        font-size: .625rem;
        line-height: 1.3;
      }
    }

    .send-form-button {
      background: $light-blue;
      color: #FFF;
      margin-top: 30px;
    }
  }
}

.field-error {
  border: 1px solid $error-color;

  input, textarea {
    color: $error-color;
  }
}

.form {
  position: relative;
}

.sending-form {
  position: absolute;
  width: 100%;
  height: 100%;
  background: $black-overlay;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  img {
    width: 60px;
    height: 60px;
    animation: pulse-grow 1s infinite;
  }
}


.form-sent {
  margin: 40px 0;

  h4 {
    display: block;
    text-align: center;
    font-size: .9375rem;
    font-weight: 500;
    color: $success-color;
    margin: 0;
  }
}

@include media(">=tablet") {
  .form {
    .contact-form {
      width: 80%;
      margin: 0 auto;

      .send-form-button {
        width: 200px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@include media(">=desktop") {
  .form {
    .contact-form {
      width: 60%;
      margin: 0 auto;
      max-width: 800px;
    }
  }
}
</style>
