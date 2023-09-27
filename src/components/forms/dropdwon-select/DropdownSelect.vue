<script setup>
import {computed} from "vue";

const props = defineProps({
  listItem: {
    type: Array,
    required: true
  },
  label: {
    type: String
  },
  modelValue: String,
  customStyle: false
});

defineEmits(['update:modelValue']);

const isCustomStyle = computed(() => {
  return props.customStyle ? 'border-0 shadow bg-white rounded h-10 p-3 text-xs text-gray-800 w-full' : 'bg-transparent border border-gray-400 rounded text-base text-gray-400 w-[200px]'
})

</script>

<template>
  <div :class="{'mb-3 w-full': customStyle}">
    <label v-if="customStyle && label" class="text-xs font-medium mb-2 uppercase block">{{ label }}</label>
    <select :class="`${isCustomStyle}`"
            ref="dropdown-select"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)">
      <option
          :selected="index === 0"
          v-for="(item, index) in listItem"
          :key="item.key"
          :value="item.key">{{ item.value }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">

</style>