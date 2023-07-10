<template>
  <section class="card">
    <h2>Checkboxes:</h2>
    <div class="flex j-center a-center gap-20">
      <CoreCheckbox v-model="value1">Type 1</CoreCheckbox>
      <CoreCheckbox v-model="value2">Type 2</CoreCheckbox>
      <CoreCheckbox v-model="value3">Type 3</CoreCheckbox>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
</script>
