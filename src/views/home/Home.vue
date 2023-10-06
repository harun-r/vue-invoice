<template>
  <div class="home-wrap max-w-screen-xl m-auto">
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
            @action="openModal"
        >Create Invoice
        </BaseButton>
      </div>
    </div>
    <div class="table-wrap mt-8">
      <invoice-table
          :data="dataInvoice"
      />
    </div>
  </div>
  <transition name="modal">
    <invoice-modal
        v-if="showModal"
        @close-modal="closeModal"
        :modal-title="'New Invoice'"/>
  </transition>
</template>

<script setup>
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import DropdownSelect from "@/components/forms/dropdwon-select/DropdownSelect.vue";
import {computed, onMounted, onUpdated, ref} from "vue";
import InvoiceTable from "@/components/invoice-table/InvoiceTable.vue";
import InvoiceModal from "@/components/invoice-modal/InvoiceModal.vue";
import db from "@/firebase/firbaseInt";
import {getDocs, collection, query} from "firebase/firestore";
import store from "@/store";

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

// Invoice Modal
const showModal = ref(false);
const openModal = () => {
  showModal.value = !showModal.value
}
const closeModal = () => {
  showModal.value = false
}

// Data Loaded
onMounted(() => {
    getInvoiceData()
})
const dataInvoice = computed(()=> store.state.invoiceData)
const getInvoiceData = async () =>{
  await store.dispatch('GET_INVOICE')
}
</script>

<style src="./Home.scss" scoped lang="scss"></style>