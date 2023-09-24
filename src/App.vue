<template>
  <MainLayout>
    <RouterView/>
  </MainLayout>
</template>

<style lang="scss">
@import "./assets/scss/app";
</style>

<script setup>
import { RouterView} from 'vue-router'
import MainLayout from "@/components/layouts/MainLayout.vue";
</script>

