<template>
  <div :class="classes">
    <vIcon v-if="icon" :name="icon" />
    <input
      :type="computedType"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="isFocus = false"
      @focus="isFocus = true"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
    <vIcon
      v-if="type === 'password'"
      :name="isPasswordShow ? 'eye' : 'eye-off'"
      class="c-pointer"
      @click="isPasswordShow = !isPasswordShow"
    />
    <vIcon v-if="error || success" :name="error ? 'error' : 'success'" />
    <vIcon v-if="clear" class="c-pointer" name="clear" @click="removeValue" />
  </div>
</template>

<script>
export default {
  name: 'vInput',
  props: {
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
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      isFocus: false,
      isPasswordShow: false
    }
  },
  computed: {
    classes() {
      const { type, icon, iconPosition, disabled, error, success, clear, isFocus } = this
      let result = 'input-component flex a-center j-between'
      if (icon) result += ` icon-position-${iconPosition} gap-8`
      if (disabled) result += ' disabled'
      if (error) result += ' error gap-8'
      if (success) result += ' success gap-8'
      if (clear || type === 'password') result += ' gap-8'
      if (isFocus) result += ' focus'
      return result
    },
    computedType() {
      if (this.type === 'password') return this.isPasswordShow ? 'text' : 'password'
      return this.type
    }
  },
  methods: {
    removeValue() {
      this.$emit('update:modelValue', '')
    }
  }
}
</script>
