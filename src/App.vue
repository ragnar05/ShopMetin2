<template>
  <div id="app" class="donmodule">
    <navigationRouter />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import navigationRouter from "./router/navigationRouter.vue"; // Asegúrate de ajustar la ruta según tu estructura de carpetas
</script>

<style lang="scss">
@import "./tailwind.css";
</style>
