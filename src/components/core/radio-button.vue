<template>
  <label :class="classes">
    <input
      type="radio"
      :value="modelValue"
      :checked="isChecked"
      :disabled="disabled"
      @change="$emit('update:modelValue', val)"
    />
    <div class="button" />
    {{ val }}
  </label>
</template>

<script>
export default {
  name: 'vRadio',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    val: {
      type: [String, Number],
      default: ''
    },
    disabled: Boolean
  },
  emits: ['update:modelValue'],
  computed: {
    classes() {
      const { disabled } = this
      let result = 'radio-button-component c-pointer flex a-center gap-8'
      if (disabled) result += ' disabled'
      return result
    },
    isChecked() {
      if (typeof this.modelValue === 'string') {
        return String(this.val) === String(this.modelValue)
      } else {
        return Number(this.val) === Number(this.modelValue)
      }
    }
  }
}
</script>
