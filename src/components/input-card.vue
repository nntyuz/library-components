<template>
  <section class="card">
    <h2>Inputs:</h2>
    <div class="flex a-start j-center wrap gap-20 w-100">
      <div class="flex j-center a-center column gap-20">
        <h3>Password:</h3>
        <vInput v-model="password" type="password" placeholder="Enter password" />
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Email:</h3>
        <div class="flex a-center center gap-20">
          <vInput
            v-model="email"
            type="email"
            placeholder="Enter e-mail"
            :error="isEmailInDataBase === false"
            :success="isEmailInDataBase"
            @keydown.enter="validateEmail"
          />
          <vButton type="main" size="medium" @click="validateEmail">Submit</vButton>
        </div>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Clear Value:</h3>
        <vInput v-model="clearValue" type="text" placeholder="Clear value" clear />
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Icons:</h3>
        <vInput v-model="iconValue" type="text" placeholder="Placeholder" icon="plus" />
        <vInput
          v-model="iconValue"
          type="text"
          placeholder="Placeholder"
          icon="search"
          icon-position="left"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      iconValue: '',
      clearValue: '',
      password: '',
      email: '',
      isEmailInDataBase: null
    }
  },
  methods: {
    validateEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.isEmailInDataBase = re.test(this.email)
    }
  }
}
</script>
