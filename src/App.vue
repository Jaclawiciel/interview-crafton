<template>
  <AppLayout>
    <router-view name="default" v-slot="{ Component, route }">
      <transition :name="route.meta.transition" mode="out-in" :key="route.path">
        <Suspense>
          <template #default>
            <component :is="Component" :key="route.path"/>
          </template>
          <template #fallback>
            <main-loader/>
          </template>
        </Suspense>
      </transition>
    </router-view>
  </AppLayout>
</template>

<script>
import {onMounted} from "@vue/runtime-core";
import MainLoader from "@/components/loaders/MainLoader";
import AppLayout from "@/layouts/AppLayout";

export default {
  name: 'App',
  components: {AppLayout, MainLoader},
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
