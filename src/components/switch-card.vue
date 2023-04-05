<template>
  <section class="card">
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
