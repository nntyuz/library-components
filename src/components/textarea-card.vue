<template>
  <section class="card">
    <h2>Textarea:</h2>
    <vTextarea v-model="value" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
