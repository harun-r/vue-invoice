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
  <select class="he-16 bg-transparent border border-gray-400 rounded text-base text-gray-400 w-[200px]" ref="dropdown-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option :selected="index === 0" v-for="(item, index) in listItem" :key="item.key" :value="item.key">{{ item.value }}</option>
  </select>
</template>

<style scoped lang="scss">

</style>