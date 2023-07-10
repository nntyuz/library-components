<script setup>
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue', 'change'])

const classes = computed(() => {
  let result = 'switch-component flex a-center j-center gap-20'
  if (props.disabled) result += ' disabled'
  if (props.modelValue === true) result += ' active'
  return result
})
const click = () => {
  if (props.disabled) return
  const newVal = !props.modelValue
  emit('update:modelValue', newVal)
  emit('change', newVal)
}
</script>

<template>
  <div :class="classes" @click="click">
    <slot />
    <div class="track flex w-100 a-center shrink-0">
      <div class="circle" />
    </div>
  </div>
</template>
