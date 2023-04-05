<template>
  <section class="card">
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
