<template>
  <div class="main-layout">
    <Sidebar/>
    <div class="main-container">
      <slot />
    </div>
  </div>
</template>
<script setup>
import Sidebar from "@/components/sidebar/sidebar.vue";
</script>