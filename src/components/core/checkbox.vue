<script setup>
import { computed, defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue', 'click', 'change'])

const classes = computed(() => {
  let result = 'checkbox-component c-pointer flex a-center gap-8'
  if (props.modelValue) result += ' active'
  if (props.disabled) result += ' disabled'
  return result
})
const click = () => {
  if (props.disabled) return
  const newVal = !props.modelValue
  emit('update:modelValue', newVal)
  emit('click', newVal)
  emit('change', newVal)
}
</script>

<template>
  <div :class="classes" @click="click">
    <div class="box flex a-center j-center">
      <CoreIcon name="check" />
    </div>
    <slot />
  </div>
</template>
