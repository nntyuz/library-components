<template>
  <section class="card">
    <h2>Radio-Buttons:</h2>
    <div class="flex j-center a-center gap-20">
      <vRadio v-model="type" val="Type 1" />
      <vRadio v-model="type" val="Type 2" />
      <vRadio v-model="type" val="Type 3" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      type: 'Type 1'
    }
  }
}
</script>
