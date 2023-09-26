<template>
  <div class="invoice-table">
    <div class="row-item flex items-center bg-white rounded mb-2 p-0" v-for="(row, index) in data">
      <div class="col-item p-3 w-full" v-for="(col, index) in row">
        <p>{{ col }}</p>
      </div>
      <div class="col-item p-3 w-16">
        <RouterLink :to="{name:''}">
          <span class="material-symbols-outlined">chevron_right</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  data: {
    type: Array
  }
})
</script>