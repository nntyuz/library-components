<template>
  <button :class="classes" @click="$emit('click')">
    <vIcon v-if="icon" :name="icon" />
    <slot />
  </button>
</template>

<script>
export default {
  name: 'vButton',
  props: {
    type: {
      type: String,
      default: 'main'
    },
    icon: String,
    iconPosition: {
      type: String,
      default: 'left'
    },
    size: {
      type: String,
      default: 'large'
    },
    disabled: Boolean
  },
  emits: ['click'],
  computed: {
    classes() {
      const { type, icon, iconPosition, size, disabled } = this
      let result = `button-component type-${type} size-${size} icon-position-${iconPosition}`
      if (disabled) result += ' disabled'
      if (icon) result += ' gap-20'
      return result
    }
  }
}
</script>
