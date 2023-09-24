<template>
  <div class="home-wrap">
    <div class="page-head flex items-start justify-between">
      <div class="left">
        <h3 class="text-2xl font-medium">Invoice</h3>
        <p>There are 5 total invoices</p>
      </div>
      <div class="right flex items-center">
        <div class="filter flex items-center mr-3">
          <p class="mr-3">Filter by:</p>
          <DropdownSelect :list-item="filterList" v-model="filterValue"/>
        </div>
        <BaseButton
            :icon-name="'add'"
            :button-fill="'outline'"
            :button-theme="'base'"
        >Create Invoice</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseButton from "@/components/buttons/base-button/BaseButton.vue";
import DropdownSelect from "@/components/forms/dropdwon-select/DropdownSelect.vue";
import {ref} from "vue";

const filterValue = ref('')
const filterList = ref([
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

</script>

<style src="./Home.scss" scoped lang="scss"></style>