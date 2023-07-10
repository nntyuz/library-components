<script setup>
import { computed, defineEmits, defineProps } from 'vue'

import arrowLeft from '../icons/arrow-left.vue'
import arrowRight from '../icons/arrow-right.vue'
import check from '../icons/check.vue'
import chevronDown from '../icons/chevron-down.vue'
import chevronUp from '../icons/chevron-up.vue'
import clear from '../icons/clear.vue'
import cross from '../icons/cross.vue'
import error from '../icons/error.vue'
import eyeOff from '../icons/eye-off.vue'
import eye from '../icons/eye.vue'
import plus from '../icons/plus.vue'
import search from '../icons/search.vue'
import success from '../icons/success.vue'

const props = defineProps({ name: String })
defineEmits(['click'])

const icons = {
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  'chevron-down': chevronDown,
  'chevron-up': chevronUp,
  'eye-off': eyeOff,
  check: check,
  clear: clear,
  cross: cross,
  error: error,
  eye: eye,
  plus: plus,
  search: search,
  success: success
}
const icon = computed(() => icons[props.name])
</script>

<template>
  <div @click="$emit('click')">
    <component :is="icon" class="d-block"></component>
  </div>
</template>
