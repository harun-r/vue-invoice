<script setup>
const props = defineProps({
  listItem: {
    type: Array,
    required: true
  },
  modelValue: String,
});
defineEmits(['update:modelValue'])

</script>

<template>
  <select ref="dropdown-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option :selected="item.key === 0" v-for="item in listItem" :key="item.key" :value="item.key">{{ item.value }}</option>
  </select>
</template>

<style scoped lang="scss">

</style>