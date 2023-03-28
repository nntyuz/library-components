<template>
  <section class="card flex a-center j-center column gap-20 w-100">
    <h2>Switch:</h2>
    <vSwitch v-model="value">Title</vSwitch>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: false
    }
  }
}
</script>
