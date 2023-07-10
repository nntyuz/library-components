<script setup>
import { ref } from 'vue'

const iconValue = ref('')
const clearValue = ref('')
const password = ref('')
const email = ref('')
const isEmailInDataBase = ref(null)

const validateEmail = () => {
  const regx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  isEmailInDataBase.value = regx.test(email.value)
}
</script>

<template>
  <section class="card">
    <h2>Inputs:</h2>
    <div class="flex a-start j-center wrap gap-20 w-100">
      <div class="flex j-center a-center column gap-20">
        <h3>Password:</h3>
        <CoreInput v-model="password" type="password" placeholder="Enter password" />
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Email:</h3>
        <div class="flex a-center center gap-20">
          <CoreInput
            v-model="email"
            type="email"
            placeholder="Enter e-mail"
            :error="isEmailInDataBase === false"
            :success="isEmailInDataBase"
            @keydown.enter="validateEmail"
          />
          <CoreButton type="main" size="medium" @click="validateEmail">Submit</CoreButton>
        </div>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Clear Value:</h3>
        <CoreInput v-model="clearValue" type="text" placeholder="Right Icon Input" clear />
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Icons:</h3>
        <CoreInput v-model="iconValue" type="text" placeholder="Placeholder" icon="plus" />
        <CoreInput
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
