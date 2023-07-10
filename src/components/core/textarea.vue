<script setup>
import { computed, defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: String,
  disabled: Boolean
})
const emit = defineEmits(['udpate:modelValue'])
const isFocus = ref(false)
const classes = computed(() => {
  let result = 'textarea-component flex a-center j-center'
  if (props.disabled) result += ' disabled'
  if (isFocus.value) result += ' focus'
  return result
})
const input = (e) => {
  emit('udpate:modelValue', e.target.value)
  e.target.style.height = `${e.target.scrollHeight}px`
}
</script>

<template>
  <div :class="classes">
    <textarea
      rows="4"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="input($event)"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
  </div>
</template>
