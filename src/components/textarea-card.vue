<template>
  <section class="card">
    <h2>Textarea:</h2>
    <vTextarea v-model="value" placeholder="Enter something" />
    <div class="">P.S Компонент подстраивается под высоту текста, введите что-нибудь длинное</div>
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
