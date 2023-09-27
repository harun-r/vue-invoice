<script setup>
defineProps({
  label: {
    type: String
  }
})
</script>

<template>
  <div class="form-item w-full mb-3">
    <label v-if="label" class="text-xs font-medium mb-2 uppercase block">{{ label }}</label>
    <input ref="form-input" class="border-0 shadow bg-white rounded h-10 p-3 text-xs text-gray-800 w-full">
  </div>
</template>

<style scoped lang="scss">

</style>