<script setup>
import { computed, defineProps, defineEmits, ref } from 'vue'
const props = defineProps({
  type: {
    type: [String, Number],
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  placeholder: String,
  required: Boolean,
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue', 'change'])

const isFocus = ref(false)
const items = ref([])
const classes = computed(() => {
  let result = 'multi-input-component flex a-center wrap gap-8'
  if (props.disabled) result += ' disabled'
  if (isFocus.value) result += ' focus'
  return result
})
const add = () => {
  if (props.modelValue !== '') items.value.push(props.modelValue)
  emit('update:modelValue', '')
}
const remove = (idx) => {
  items.value = items.value.filter((a, index) => index !== idx)
}
</script>

<template>
  <div :class="classes">
    <div class="element-container flex a-center wrap gap-8">
      <div v-for="(item, idx) in items" :key="idx" class="element flex a-center j-center gap-8">
        {{ item }}
        <CoreIcon name="clear" @click="remove(idx)" />
      </div>
    </div>
    <input
      :type="type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @keydown.enter="add"
      @blur="isFocus = false"
      @focus="isFocus = true"
      @input="emit('update:modelValue', $event.target.value)"
      @change="emit('change', $event.target.value)"
    />
  </div>
</template>
