<script setup>
import { computed, defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: Number,
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue'])

const classes = computed(() => {
  let result = 'slider-component w-100 flex a-center'
  if (props.disabled) result += ' disabled'
  return result
})
</script>

<template>
  <div :class="classes">
    <input
      :value="modelValue"
      type="range"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="slider w-100"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>
