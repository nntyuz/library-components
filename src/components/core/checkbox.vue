<template>
  <div :class="classes" @click="click">
    <div class="box flex a-center j-center">
      <vIcon name="check" />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'vCheckbox',
  props: {
    modelValue: Boolean,
    disabled: Boolean
  },
  emits: ['update:modelValue', 'click', 'change'],
  computed: {
    classes() {
      const { modelValue, disabled } = this
      let result = 'checkbox-component c-pointer flex a-center gap-8'
      if (modelValue) result += ' active'
      if (disabled) result += ' disabled'
      return result
    }
  },
  methods: {
    click() {
      if (this.disabled) return
      const newVal = !this.modelValue
      this.$emit('update:modelValue', newVal)
      this.$emit('click', newVal)
      this.$emit('change', newVal)
    }
  }
}
</script>
