<template>
  <section class="w-container flex a-center j-center column gap-20">
    <header-component />
    <div class="flex a-center j-center wrap w-100 gap-20">
      <icon-card />
      <button-card />
      <input-card />
      <radio-button-card />
      <checkbox-card />
      <textarea-card />
      <multi-input-card />
      <select-card />
      <slider-card />
      <switch-card />
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
import textareaCard from './components/textarea-card.vue'
import multiInputCard from './components/multi-input-card.vue'
import selectCard from './components/select-card.vue'
import sliderCard from './components/slider-card.vue'
import switchCard from './components/switch-card.vue'

export default {
  components: {
    headerComponent,
    iconCard,
    buttonCard,
    inputCard,
    radioButtonCard,
    checkboxCard,
    textareaCard,
    multiInputCard,
    selectCard,
    sliderCard,
    switchCard
  },
  data() {
    return {}
  }
}
</script>
