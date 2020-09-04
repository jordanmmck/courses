<template>
  <div class="container">
    <div class="title">
      <slot name="title" />
      <span style="color: #ccc">
        <slot name="subtitle">Subtitle</slot>
      </span>
    </div>
    <hr />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: blue;
}
.title {
  font-style: italic;
}
</style>