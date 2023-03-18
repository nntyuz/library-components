<template>
  <section class="w-container flex a-center j-center column gap-20">
    <header-component />
    <div class="flex a-center j-center wrap w-100 gap-20">
      <icon-card />
    </div>
  </section>
</template>

<script>
import headerComponent from './components/header.vue'
import iconCard from './components/icon-card.vue'
export default {
  components: {
    headerComponent,
    iconCard
  },
  data() {
    return {}
  }
}
</script>
