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
  },
  buttonRadius: {
    type: String,
    default: 'small'
  },
  buttonSize: {
    type: String,
    default: 'medium'
  }
});

const emit = defineEmits(['action'])

const clickHandler = () =>{
  emit('action')
}
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
  if (theme === 'danger') {
    return 'button-danger'
  }
}

// Button Round
const buttonRadius = computed(() => {
  return checkButtonRadius(props.buttonRadius)
})
const checkButtonRadius = (round) => {
  if (round === 'small') {
    return 'rounded'
  }
  if (round === 'pill') {
    return 'rounded-full'
  }
}

// Button Size
const buttonSize = computed(() => {
  return checkButtonSize(props.buttonSize)
})
const checkButtonSize = (size) => {
  if (size === 'small') {
    return 'button-small'
  }
  if (size === 'medium') {
    return 'button-medium'
  }
  if (size === 'large') {
    return 'button-large'
  }
}

</script>

<template>
  <button ref="button"
          @click="clickHandler"
          :class="`base-default ${buttonFillMode} ${buttonTheme} ${buttonRadius} ${buttonSize}`">
    <span class="material-symbols-outlined mr-1" v-if="iconName">{{ iconName }}</span>
    <slot>button</slot>
  </button>
</template>

<style scoped lang="scss">

</style>