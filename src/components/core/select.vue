<template>
  <div :class="classes">
    <div class="selected flex a-center j-between gap-8" @click="open">
      {{ value }}
      <vIcon name="chevronDown" />
    </div>
    <div class="options">
      <div v-for="(option, idx) in options" :key="idx" class="option" @click="select(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vSelect',
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: String,
    options: Array,
    disabled: Boolean
  },
  emits: ['input'],
  data() {
    return {
      isOpen: false,
      value: this.modelValue || this.placeholder
    }
  },
  computed: {
    classes() {
      const { disabled, isOpen } = this
      let result = 'select-component flex a-center column'
      if (disabled) result += ' disabled'
      if (isOpen) result += ' open'
      return result
    }
  },
  methods: {
    open() {
      if (this.disabled) return
      this.isOpen = !this.isOpen
    },
    select(option) {
      this.$emit('input', option)
      this.value = option
      this.isOpen = false
    }
  }
}
</script>
