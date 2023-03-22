<template>
  <section class="w-container flex a-center j-center column gap-20">
    <header-component />
    <div class="flex a-center j-center wrap w-100 gap-20">
      <icon-card />
      <button-card />
      <input-card />
      <radio-button-card />
      <checkbox-card />
    </div>
  </section>
</template>

<script>
import headerComponent from './components/header.vue'
import iconCard from './components/icon-card.vue'
import buttonCard from './components/button-card.vue'
import inputCard from './components/input-card.vue'
import radioButtonCard from './components/radio-button-card.vue'
import checkboxCard from './components/checkbox-card.vue'

export default {
  components: {
    headerComponent,
    iconCard,
    buttonCard,
    inputCard,
    radioButtonCard,
    checkboxCard
  },
  data() {
    return {}
  }
}
</script>
