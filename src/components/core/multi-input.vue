<template>
  <div :class="classes">
    <div class="element-container flex a-center wrap gap-8">
      <div v-for="(item, idx) in items" :key="idx" class="element flex a-center j-center gap-8">
        {{ item }}
        <vIcon name="clear" @click="removeItem(idx)" />
      </div>
    </div>
    <input
      :type="type"
      :value="modelValue"
      :required="required"
      :placeholder="placeholder"
      :disabled="disabled"
      @keydown.enter="addElement"
      @blur="isFocus = false"
      @focus="isFocus = true"
      @input="$emit('update:modelValue', $event.target.value)"
      @change="$emit('change', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'vMultiInput',
  props: {
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
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      items: [],
      isFocus: false
    }
  },
  computed: {
    classes() {
      const { disabled, isFocus } = this
      let result = 'multi-input-component flex a-center wrap gap-8'
      if (disabled) result += ' disabled'
      if (isFocus) result += ' focus'
      return result
    }
  },
  methods: {
    addElement() {
      if (this.modelValue !== '') this.items.push(this.modelValue)
      this.$emit('update:modelValue', '')
    },
    removeItem(idx) {
      this.items = this.items.filter((a, index) => index !== idx)
    }
  }
}
</script>
