<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
  current: Number,
  max: Number
})
const percent = computed(() => {
  const PERCENT_FOR_CIRCLE = 3.6
  return Math.floor(100 * ((props.current / props.max) * PERCENT_FOR_CIRCLE))
})
const degForCircle = computed(() => {
  return `background: conic-gradient(var(--color-main) ${percent.value}deg, var(--color-white) 0deg);`
})
</script>

<template>
  <div class="progress-circle-component flex a-center j-center" :style="degForCircle">
    <div class="percent">{{ Math.floor(100 * (props.current / props.max)) }}</div>
  </div>
</template>
