<template>
  <section class="card flex a-center j-center column gap-20 w-100">
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
