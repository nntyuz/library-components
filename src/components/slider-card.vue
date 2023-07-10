<script setup>
import { ref } from 'vue'
const number = ref(10)
</script>

<template>
  <section class="card">
    <h2>Slider:</h2>
    <div>{{ number }}</div>
    <CoreSlider v-model="number" :min="0" :max="100" />
  </section>
</template>
