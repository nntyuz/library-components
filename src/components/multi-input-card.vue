<template>
  <section class="card">
    <h2>Multi-Input:</h2>
    <vMultiInput v-model="value" type="text" placeholder="Placeholder" />
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
