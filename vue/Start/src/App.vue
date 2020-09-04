<template>
  <div class="container">
    <div class="row">
      <app-header></app-header>
    </div>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-details></app-details>
    </div>
    <hr />
    <div class="row">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Details from "./components/Details.vue";
import Servers from "./components/Servers.vue";
export default {
  components: {
    "app-header": Header,
    "app-details": Details,
    "app-servers": Servers,
    "app-footer": Footer
  }
};
</script>
