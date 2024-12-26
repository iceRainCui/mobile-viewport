<script setup lang="ts">
import { onBeforeMount } from 'vue';
onBeforeMount(async () => {
  // Do something before the component is mounted
});
</script>

<template>
  <router-view />
</template>

<style scoped>
#app {
  width: 100vw;
  margin: 0 auto;
}
</style>
