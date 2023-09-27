<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import FormInput from "@/components/forms/form-input/FormInput.vue";

const route = useRoute()

const routerId = computed(() => {
  return route.params.id
})
</script>

<template>
  <div class="max-w-screen-md m-auto">
    <div class="back">
      <base-button :icon-name="'chevron_left'">Back</base-button>
    </div>
    <div class="detail-wrap bg-white p-5 rounded mt-3">
      <div class="detail-header flex item-center justify-between">
        <div class="flex items-center">
          <p class="text-base">Status</p>
          <div class="status bg-gray-300 rounded p-1 px-2 text-xs font-medium ml-2">
            Pending
          </div>
        </div>
        <div class="flex items-center gap-3">
          <base-button :button-theme="'dark'" :button-size="'small'" :button-radius="'pill'">Edit</base-button>
          <base-button :button-theme="'danger'" :button-size="'small'" :button-radius="'pill'">Delete</base-button>
          <base-button :button-theme="'primary'" :button-size="'small'" :button-radius="'pill'">Mark as Paid</base-button>
        </div>
      </div>
      <div class="invoice-box mt-8">
        <div class="flex justify-between items-start border-t pt-4 border-gray-100">
          <div>
            <h3 class="text-2xl font-medium">#DFLKDF</h3>
            <p class="text-base">UI / UX</p>
          </div>
          <div class="text-right text-gray-400">
            <p class="text-base">123 testing vite</p>
            <p class="text-base">Gaibandha</p>
            <p class="text-base">34343</p>
            <p class="text-base">Bangladesh</p>
          </div>
        </div>

        <div class="flex columns-3 gap-3 mt-8">
          <div class="w-[30%]">
            <div class="mb-4">
              <p class="text-xs mb-2">Invoice date</p>
              <h3 class="text-base">Jun 2, 2023</h3>
            </div>
            <div class="mb-4">
              <p class="text-xs mb-2">Payment date</p>
              <h3 class="text-base">Jun 2, 2023</h3>
            </div>
          </div>
          <div class="w-[30%]">
            <div class="mb-4">
              <p class="text-xs mb-2">Bill to</p>
              <h3 class="text-base">Harun Rashid</h3>
            </div>
            <div class="mb-4">
              <p class="text-base">123 testing vite</p>
              <p class="text-base">Gaibandha</p>
              <p class="text-base">34343</p>
              <p class="text-base">Bangladesh</p>
            </div>
          </div>
          <div class="w-[40%]">
            <div class="mb-4">
              <p class="text-xs mb-2">Sent to</p>
              <h3 class="text-base">mdharunbd88@gmail.com</h3>
            </div>
          </div>
        </div>

        <div class="mt-5">
          <div class="item-table bg-gray-300 p-3 rounded">
            <div class="item-table-head flex items-center mb-3 gap-3">
              <div class="table-item w-[40%]"><p class="text-xs font-medium text-gray-800">Item Name</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">QTY</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">Price</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">Total</p></div>
            </div>
            <div class="item-table-head flex items-center mb-3 gap-3">
              <div class="table-item w-[40%]"><p class="text-xs font-medium text-gray-800">Design</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">5</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">$56565</p></div>
              <div class="table-item w-[20%]"><p class="text-xs text-right font-medium text-gray-800">$45454</p></div>
            </div>
            <div class="item-table-head flex items-center justify-between border-t border-gray-600 gap-3">
              <div class="table-item py-3"><p class="text-base font-medium text-gray-800">Amount due</p></div>
              <div class="table-item py-3"><p class="text-base text-right font-bold text-gray-800">1245</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>