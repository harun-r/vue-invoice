<script setup>
import {computed} from "vue";

const props = defineProps({
  iconName: String,
  buttonFill: {
    type: String,
    default: 'solid'
  },
  buttonTheme: {
    type: String,
    default: 'base'
  }
});

// Button Fill Mode
const buttonFillMode = computed(() => {
  return checkButtonFill(props.buttonFill)
})
const checkButtonFill = (fill) => {
  if (fill === 'solid') {
    return 'button-solid'
  }
  if (fill === 'outline') {
    return 'button-outline'
  }
  if (fill === 'flat') {
    return 'button-flat'
  }
}

// Button Theme Color
const buttonTheme = computed(() => {
  return checkButtonTheme(props.buttonTheme)
})
const checkButtonTheme = (theme) => {
  if (theme === 'base') {
    return 'button-base'
  }
  if (theme === 'primary') {
    return 'button-primary'
  }
  if (theme === 'dark') {
    return 'button-dark'
  }
  if (theme === 'light') {
    return 'button-light'
  }
}
</script>

<template>
  <button ref="button" :class="`base-default ${buttonFillMode}`">
    <span class="material-symbols-outlined" v-if="iconName">{{ iconName }}</span>
    <slot>button</slot>
  </button>
</template>

<style scoped lang="scss">

</style>