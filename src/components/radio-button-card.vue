<script setup>
import { ref } from 'vue'
const type = ref('Type 2')
</script>

<template>
  <section class="card">
    <h2>Radio-Buttons:</h2>
    <div class="flex j-center a-center gap-20">
      <CoreRadio v-model="type" val="Type 1" />
      <CoreRadio v-model="type" val="Type 2" />
      <CoreRadio v-model="type" val="Type 3" />
    </div>
  </section>
</template>
