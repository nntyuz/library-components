<template>
  <section class="card flex a-center j-center column gap-20 w-100">
    <h2>Select:</h2>
    <vSelect :options="options" placeholder="Choose Type" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: ['Type 1', 'Type 2', 'Type 3', 'Type 4']
    }
  }
}
</script>
