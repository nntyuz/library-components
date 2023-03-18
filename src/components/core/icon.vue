<template>
  <div>
    <component :is="name" class="icon-component"></component>
  </div>
</template>

<script>
import arrowLeft from '../icons/arrow-left.vue'
import arrowRight from '../icons/arrow-right.vue'
import chevronDown from '../icons/chevron-down.vue'
import chevronUp from '../icons/chevron-up.vue'
import cross from '../icons/cross.vue'
import plus from '../icons/plus.vue'
import search from '../icons/search.vue'

export default {
  name: 'vIcon',
  components: {
    arrowLeft,
    arrowRight,
    chevronDown,
    chevronUp,
    cross,
    plus,
    search
  },
  props: {
    name: String
  }
}
</script>

<style>
.icon-component {
  display: block;
}
</style>
