<template>
  <div :class="classes" @click="click">
    <slot />
    <div class="track flex w-100 a-center shrink-0">
      <div class="circle" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'vSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  emits: ['update:modelValue', 'change'],
  computed: {
    classes() {
      const { disabled, modelValue } = this
      let result = 'switch-component flex a-center j-center gap-20'
      if (disabled) result += ' disabled'
      if (modelValue === true) result += ' active'
      return result
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      const newVal = !this.modelValue
      this.$emit('update:modelValue', newVal)
      this.$emit('change', newVal)
    }
  }
}
</script>
