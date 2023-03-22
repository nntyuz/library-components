<template>
  <div @click="$emit('click')">
    <component :is="name" class="icon-component"></component>
  </div>
</template>

<script>
import arrowLeft from '../icons/arrow-left.vue'
import arrowRight from '../icons/arrow-right.vue'
import chevronDown from '../icons/chevron-down.vue'
import chevronUp from '../icons/chevron-up.vue'
import clear from '../icons/clear.vue'
import cross from '../icons/cross.vue'
import error from '../icons/error.vue'
import eyeOff from '../icons/eye-off.vue'
import eye from '../icons/eye.vue'
import plus from '../icons/plus.vue'
import search from '../icons/search.vue'

export default {
  name: 'vIcon',
  components: {
    arrowLeft,
    arrowRight,
    chevronDown,
    chevronUp,
    clear,
    cross,
    error,
    eyeOff,
    eye,
    plus,
    search
  },
  props: {
    name: String
  },
  emits: ['click']
}
</script>

<style>
.icon-component {
  display: block;
}
</style>
