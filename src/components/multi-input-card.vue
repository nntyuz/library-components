<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <section class="card">
    <h2>Multi-Input:</h2>
    <CoreMultiInput v-model="value" type="text" placeholder="Placeholder" />
  </section>
</template>
