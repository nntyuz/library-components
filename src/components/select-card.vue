<script setup>
import { ref } from 'vue'
const value = ref('Choose Type')
const options = ref(['Type 1', 'Type 2', 'Type 3', 'Type 4'])
</script>

<template>
  <section class="card">
    <h2>Select:</h2>
    <CoreSelect v-model="value" :options="options" />
  </section>
</template>
