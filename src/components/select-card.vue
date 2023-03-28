<template>
  <section class="card flex a-center j-center column gap-20 w-100">
    <h2>Select:</h2>
    <vSelect v-model="value" :options="options" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 'Choose Type',
      options: ['Type 1', 'Type 2', 'Type 3', 'Type 4']
    }
  }
}
</script>
