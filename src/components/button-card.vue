<template>
  <section class="card">
    <h2>Buttons:</h2>
    <div class="flex a-start j-center wrap gap-20 w-100">
      <div class="flex j-center a-center column gap-20">
        <h3>Types:</h3>
        <CoreButton type="main" size="large">Main Button</CoreButton>
        <CoreButton type="secondary" size="large">Secondary Button</CoreButton>
        <CoreButton type="text" size="large">Text Button</CoreButton>
        <CoreButton type="outline" size="large">Outline Button</CoreButton>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Sizes:</h3>
        <CoreButton type="main" size="large">Large Button</CoreButton>
        <CoreButton type="secondary" size="medium">Medium Button</CoreButton>
        <CoreButton type="main" size="small">Small Button</CoreButton>
      </div>
      <div class="flex j-center a-center column gap-20">
        <h3>Icons:</h3>
        <CoreButton type="main" size="large" icon="chevron-down" />
        <CoreButton type="secondary" size="large" icon="chevron-down">Right Icon Button</CoreButton>
        <CoreButton type="main" size="large" icon="chevron-down" icon-position="left"
          >Left Icon Button</CoreButton
        >
      </div>
    </div>
  </section>
</template>
