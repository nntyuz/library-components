<script setup>
import { computed, defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: String,
    default: null
  },
  placeholder: String,
  options: Array,
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const classes = computed(() => {
  let result = 'select-component flex a-center column'
  if (props.disabled) result += ' disabled'
  if (isOpen.value) result += ' open'
  return result
})
const open = () => {
  if (props.disabled) return
  isOpen.value = !isOpen.value
}
const select = (option) => {
  emit('update:modelValue', option)
  isOpen.value = false
}
</script>

<template>
  <div :class="classes">
    <div class="selected flex a-center j-between gap-8" @click="open">
      {{ modelValue || placeholder }}
      <CoreIcon name="chevron-down" />
    </div>
    <div class="options">
      <div v-for="(option, idx) in options" :key="idx" class="option" @click="select(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>
