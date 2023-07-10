<script setup>
const icons = ['arrow-left', 'eye-off', 'arrow-right']
</script>

<template>
  <section class="card">
    <h2>Icons:</h2>
    <div class="flex a-center">
      <CoreIcon v-for="icon in icons" :key="icon" :name="icon" class="icon" />
    </div>
  </section>
</template>
