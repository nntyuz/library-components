<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'main'
  },
  icon: String,
  iconPosition: {
    type: String,
    default: 'right'
  },
  size: {
    type: String,
    default: 'large'
  },
  disabled: Boolean
})
defineEmits(['click'])
const classes = computed(() => {
  let result = `button-component flex a-center j-center type-${props.type} size-${props.size}`
  if (props.disabled) result += ' disabled'
  if (props.icon) result += ` icon-position-${props.iconPosition} gap-8`
  return result
})
</script>

<template>
  <button :class="classes" @click="$emit('click')">
    <CoreIcon v-if="icon" :name="icon" />
    <slot />
  </button>
</template>
