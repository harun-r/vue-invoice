<template>
  <div class="home-wrap">
    <div class="page-head flex items-start justify-between">
      <div class="left">
        <h3 class="text-2xl font-medium">Invoice</h3>
        <p class="text-base text-gray-500">There are 5 total invoices</p>
      </div>
      <div class="right flex items-center">
        <div class="flex items-center mr-3">
          <p class="mr-3">Filter by:</p>
          <DropdownSelect :list-item="filterList" v-model="filterValue"/>
        </div>
        <BaseButton
            :icon-name="'add'"
            :button-fill="'flat'"
            :button-theme="'primary'"
            :button-radius="'pill'"
        >Create Invoice
        </BaseButton>
      </div>
    </div>
    <div class="table-wrap mt-8">
      <invoice-table
          :data="data"
      />
    </div>
  </div>
  <invoice-modal :modal-title="'New Invoice'"/>
</template>

<script setup>
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import DropdownSelect from "@/components/forms/dropdwon-select/DropdownSelect.vue";
import {ref} from "vue";
import InvoiceTable from "@/components/invoice-table/InvoiceTable.vue";
import InvoiceModal from "@/components/invoice-modal/InvoiceModal.vue";

const filterValue = ref('')
const filterList = ref([
  {
    key: 0,
    value: 'select'
  },
  {
    key: 1,
    value: '1'
  },
  {
    key: 2,
    value: '2'
  },
  {
    key: 3,
    value: '3'
  },
  {
    key: 4,
    value: '4'
  },
]);
const data = ref([
  {id: '#DFD343', data: 'due sun 21, 2023', name: 'John', amount: 30, status: 'pending' },
  {id: '#DFD343', data: 'due sun 21, 2023', name: 'John', amount: 30, status: 'pending' },
  {id: '#DFD343', data: 'due sun 21, 2023', name: 'John', amount: 30, status: 'pending' },
  {id: '#DFD343', data: 'due sun 21, 2023', name: 'John', amount: 30, status: 'pending' },
  {id: '#DFD343', data: 'due sun 21, 2023', name: 'John', amount: 30, status: 'pending' },
])
</script>

<style src="./Home.scss" scoped lang="scss"></style>