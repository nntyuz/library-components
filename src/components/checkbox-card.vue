<template>
  <section class="card">
    <h2>Checkboxes:</h2>
    <div class="flex j-center a-center gap-20">
      <vCheckbox v-model="value1">Type 1</vCheckbox>
      <vCheckbox v-model="value2">Type 2</vCheckbox>
      <vCheckbox v-model="value3">Type 3</vCheckbox>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
    }
  }
}
</script>
