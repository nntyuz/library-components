<script setup>
import { ref } from 'vue'
const value = ref(false)
</script>

<template>
  <section class="card">
    <h2>Switch:</h2>
    <CoreSwitch v-model="value">Title</CoreSwitch>
  </section>
</template>
