<script setup>
defineProps({
  modalTitle:{
    type: String,
  }
})
</script>

<template>
  <div class="invoice-modal absolute top-0 left-0 w-full max-w-lg shadow-lg p-6 bg-gray-200 h-full">
    <div class="head">
      <h3 class="text-2xl font-medium ">{{ modalTitle }}</h3>
    </div>
    <div class="form">
      <form>

      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>