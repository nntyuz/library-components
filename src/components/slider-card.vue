<template>
  <section class="card">
    <h2>Slider:</h2>
    <div>{{ number }}</div>
    <vSlider v-model="number" :min="0" :max="100" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      number: 0
    }
  }
}
</script>
