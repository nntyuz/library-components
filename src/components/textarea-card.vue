<script setup>
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <section class="card">
    <h2>Textarea:</h2>
    <CoreTextarea v-model="value" placeholder="Text here..." />
  </section>
</template>
