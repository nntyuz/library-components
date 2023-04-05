<template>
  <section class="card">
    <h2>Buttons:</h2>
    <div class="flex a-start j-center wrap gap-20 w-100">
      <div class="flex j-center a-center column gap-20">
        <h3>Types:</h3>
        <vButton type="main" size="large">Main Button</vButton>
        <vButton type="secondary" size="large">Secondary Button</vButton>
        <vButton type="text" size="large">Text Button</vButton>
        <vButton type="outline" size="large">Outline Button</vButton>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Sizes:</h3>
        <vButton type="main" size="large">Large Button</vButton>
        <vButton type="secondary" size="medium">Medium Button</vButton>
        <vButton type="main" size="small">Small Button</vButton>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Icons:</h3>
        <vButton type="main" size="large" icon="chevronDown" />
        <vButton type="secondary" size="large" icon="chevronDown">Right Icon Button</vButton>
        <vButton type="main" size="large" icon="chevronDown" icon-position="left"
          >Left Icon Button</vButton
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
