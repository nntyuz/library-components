<template>
  <div :class="classes">
    <textarea
      rows="4"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="input($event)"
      @focus="focus"
      @blur="blur"
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
    focus() {
      this.isFocus = true
    },
    blur() {
      this.isFocus = false
    },
    input(e) {
      this.$emit('update:modelValue', e.target.value)
      e.target.style.height = 'auto'
      e.target.style.height = `${e.target.scrollHeight}px`
    }
  }
}
</script>
