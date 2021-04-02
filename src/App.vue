<template>
  <AppLayout>
    <router-view name="default" v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in" :duration="300" :key="route.path">
<!--        <Suspense>-->
<!--          <template #default>-->
            <component :is="Component" :key="route.path"/>
<!--          </template>-->
<!--          <template #fallback>-->
<!--            <div>-->
<!--              Loading...-->
<!--            </div>-->
<!--          </template>-->
<!--        </Suspense>-->
      </transition>
    </router-view>
  </AppLayout>
</template>

<script>
import {onMounted} from "@vue/runtime-core";

export default {
  name: 'App',
  components: {},
  setup() {
    onMounted(async () => {
    })

    return {}
  }

}
</script>

<style lang="scss">
@import "assets/styles/main.scss";
</style>
