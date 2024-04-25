<script setup>
import headerCont from './components/headerCont.vue'
import footerCont from './components/footerCont.vue'
</script>

<template>
  <div>
    <headerCont />
    <RouterView v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
    <footerCont />
  </div>

</template>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

</style>
