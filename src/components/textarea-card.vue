<template>
  <section class="card flex a-center j-center column gap-20 w-100">
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
