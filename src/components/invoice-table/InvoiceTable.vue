<template>
  <div class="invoice-table">
    <div class="row-item flex items-center bg-white rounded mb-2 p-0" v-for="(row, index) in data">
      <div class="col-item p-3 w-full">
        <p>{{ row.invoiceId }}</p>
      </div>
      <div class="col-item p-3 w-full">
        <p>{{ row.date }}</p>
      </div>
      <div class="col-item p-3 w-full">
        <p>{{ row.name }}</p>
      </div>
      <div class="col-item p-3 w-full">
        <p>{{ row.amount }}</p>
      </div>
      <div class="col-item p-3 w-[200px] flex items-center justify-center">
        <p class="p-2 rounded bg-gray-300 text-xs capitalize">{{row.status}}</p>
      </div>
      <div class="col-item p-3 w-[100px]">
        <RouterLink :to="{name:'Detail', params:{id: row.id}}">
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