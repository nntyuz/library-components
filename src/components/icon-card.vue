<template>
  <section class="card flex a-center j-center column gap-20 w-100">
    <h2>Icons:</h2>
    <div class="flex a-center">
      <vIcon v-for="icon in icons" :key="icon" :name="icon" class="icon" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      icons: ['arrowLeft', 'arrowRight', 'chevronDown', 'chevronUp']
    }
  }
}
</script>
