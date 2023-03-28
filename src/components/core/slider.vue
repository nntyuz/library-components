<template>
  <div :class="classes">
    <input
      :value="modelValue"
      type="range"
      :min="min"
      :max="max"
      :disabled="disabled"
      class="slider"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'vSlider',
  props: {
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
  },
  emits: ['update:modelValue'],
  data() {
    return {
      currentValue: this.modelValue
    }
  },
  computed: {
    classes() {
      const { disabled } = this
      let result = 'slider-component flex a-center'
      if (disabled) result += ' disabled'
      return result
    }
  }
}
</script>
