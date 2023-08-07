<template>
  <section class="card">
    <h2>Multi-Input:</h2>
    <vMultiInput v-model="value" type="text" placeholder="Enter something" />
    <div>P.S Введите что-нибудь и нажмите кнопку Enter</div>
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
