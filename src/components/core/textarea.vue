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

<script>
export default {
  name: 'vTextarea',
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: String,
    disabled: Boolean
  },
  emits: ['update:modelValue'],
  data() {
    return {
      isFocus: false
    }
  },
  computed: {
    classes() {
      const { disabled, isFocus } = this
      let result = 'textarea-component flex a-center j-center'
      if (disabled) result += ' disabled'
      if (isFocus) result += ' focus'
      return result
    }
  },
  methods: {
    input(e) {
      this.$emit('update:modelValue', e.target.value)
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scrollHeight}px`
    }
  }
}
</script>
