<script setup>
import { computed, ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  type: String,
  modelValue: {
    type: [String, Number],
    default: ''
  },
  required: Boolean,
  placeholder: String,
  disabled: Boolean,
  error: Boolean,
  success: Boolean,
  clear: Boolean,
  icon: String,
  iconPosition: {
    type: String,
    default: 'right'
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const isFocus = ref(false)
const isPasswordShow = ref(false)
const classes = computed(() => {
  let result = 'input-component flex a-center j-between'
  if (props.icon) result += `icon-position-${props.iconPosition} gap-8`
  if (props.error) result += ' error gap-8'
  if (props.disabled) result += ' disabled'
  if (props.success) result += ' success gap-8'
  if (props.clear || props.type === 'password') result += ' gap-8'
  if (isFocus.value) result += ' focus'
  return result
})
const computedType = computed(() => {
  if (props.type === 'password') return isPasswordShow.value ? 'text' : 'password'
  return props.type
})
const removeValue = () => {
  emit('update:modelValue', '')
}
</script>

<template>
  <div :class="classes">
    <CoreIcon v-if="icon" :name="icon" />
    <input
      :type="computedType"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="isFocus = false"
      @focus="isFocus = true"
      @input="emit('update:modelValue', $event.target.value)"
      @change="emit('change', $event.target.value)"
    />
    <CoreIcon
      v-if="type === 'password'"
      :name="isPasswordShow ? 'eye' : 'eye-off'"
      class="c-pointer"
      @click="isPasswordShow = !isPasswordShow"
    />
    <CoreIcon v-if="error || success" :name="error ? 'error' : 'success'" />
    <CoreIcon v-if="clear" class="c-pointer" name="clear" @click="removeValue" />
  </div>
</template>
