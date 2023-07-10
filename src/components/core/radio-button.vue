<script setup>
import { computed, defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  val: {
    type: [String, Number],
    default: ''
  },
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  let result = 'radio-button-component c-pointer flex a-center gap-8'
  if (props.disabled) result += ' disabled'
  return result
})

const isChecked = computed(() => {
  if (typeof props.modelValue === 'string') return String(props.val) === String(props.modelValue)
  else return Number(props.val) === Number(props.modelValue)
})
</script>

<template>
  <label :class="classes">
    <input
      type="radio"
      :value="modelValue"
      :checked="isChecked"
      :disabled="disabled"
      @change="emit('update:modelValue', val)"
    />
    <div class="button" />
    {{ val }}
  </label>
</template>
