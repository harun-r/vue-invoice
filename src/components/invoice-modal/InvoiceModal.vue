<script setup>
import FormInput from "@/components/forms/form-input/FormInput.vue";
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import DropdownSelect from "@/components/forms/dropdwon-select/DropdownSelect.vue";
import {ref} from "vue";

defineProps({
  modalTitle: {
    type: String,
  }
})
const filterValue = ref('')
const filterList = ref([
  {
    key: 1,
    value: '30 days'
  },
  {
    key: 2,
    value: '60 days'
  },
]);
</script>

<template>
  <div class="invoice-modal absolute top-0 left-0 w-full max-w-lg shadow-lg p-6 bg-gray-200 h-full">
    <div class="head">
      <h3 class="text-2xl font-medium ">{{ modalTitle }}</h3>
    </div>
    <div class="form mt-8 pr-3 pl-1 max-h-[calc(100vh-145px)] overflow-y-auto">
      <form>
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Bill From</h3>
          <div class="form-row">
            <form-input :label="'Address'"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'City'"/>
            <form-input :label="'Zip Code'"/>
            <form-input :label="'Country'"/>
          </div>
        </div>
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Bill To</h3>
          <div class="form-row">
            <form-input :label="'Client name'"/>
          </div>
          <div class="form-row">
            <form-input :label="'Client email'"/>
          </div>
          <div class="form-row">
            <form-input :label="'Street Address'"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'City'"/>
            <form-input :label="'Zip Code'"/>
            <form-input :label="'Country'"/>
          </div>
        </div>
        <div class="bill-form mb-6">
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'Invoice Date'"/>
            <form-input :label="'Payment Due'"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <dropdown-select
                :label="'Payment Terms'"
                :custom-style="true" :list-item="filterList" v-model="filterValue"/>
          </div>
          <div class="form-row flex columns-3 gap-3">
            <form-input :label="'Product Description'"/>
          </div>

        </div>
        <div class="bill-form mb-6">
          <h3 class="text-cyan-600 font-medium text-base mb-4">Item List</h3>
          <div class="item-table">
            <div class="item-table-head flex items-center mb-3 gap-3">
              <div class="table-item w-[40%]"><p class="text-xs font-medium text-gray-800">Item Name</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-center font-medium text-gray-800">QTY</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-center font-medium text-gray-800">Price</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-center font-medium text-gray-800">Total</p></div>
            </div>
            <div class="item-table-row flex items-center gap-3 mb-3">
              <div class="table-item w-[40%]">
                <form-input/>
              </div>
              <div class="table-item w-[20%]">
                <form-input/>
              </div>
              <div class="table-item w-[20%]">
                <form-input/>
              </div>
              <div class="table-item w-[20%]">
                <form-input/>
              </div>
            </div>
            <div class="item-table-action">
              <base-button :class="'w-full justify-center'" :button-theme="'primary'" :button-radius="'pill'" :button-size="'small'">Add New Item
              </base-button>
            </div>
          </div>

        </div>
      </form>
    </div>
    <div class="modal-footer flex items-center py-3 border-t border-gray-300">
      <base-button :button-size="'small'" :button-theme="'danger'" :button-radius="'pill'">Cancel</base-button>
      <base-button :class="'ms-auto me-3'" :button-theme="'solid'" :button-radius="'pill'" :button-size="'small'">Save
        Draft
      </base-button>
      <base-button :button-theme="'primary'" :button-radius="'pill'" :button-size="'small'">Create Invoice</base-button>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>