<script setup>
import { onMounted, ref } from 'vue'

const delay = ref(15)
const revisedMousePosX = ref(0)
const revisedMousePosY = ref(0)
const mousePosX = ref(0)
const mousePosY = ref(0)

onMounted(() => {
  if (window.innerWidth >= 960) {
    document.onmousemove = (e) => {
      mousePosX.value = e.pageX
      mousePosY.value = e.pageY
    }
    const delayMouseFollow = () => {
      requestAnimationFrame(delayMouseFollow)

      revisedMousePosX.value += (mousePosX.value - revisedMousePosX.value) / delay.value
      revisedMousePosY.value += (mousePosY.value - revisedMousePosY.value) / delay.value
      document.querySelector('#custom-cursor').style.top = revisedMousePosY.value + 'px'
      document.querySelector('#custom-cursor').style.left = revisedMousePosX.value + 'px'
    }

    delayMouseFollow()
  }
})
</script>

<template>
  <div id="custom-cursor" />
</template>
