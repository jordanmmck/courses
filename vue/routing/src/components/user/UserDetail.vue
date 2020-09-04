<template>
  <div>
    <h3>User Details</h3>
    <p>User ID: {{ $route.params.id }}</p>
    <router-link tag="button" :to="link" class="btn btn-primary">Edit</router-link>
  </div>
</template>

<script >
export default {
  data() {
    return {
      link: { name: "userEdit", query: { locale: "en", q: 100 }, hash: "#data" }
    };
  },
  beforeRouteEnter(to, from, next) {
    // if you don't call next the component will not load!
    next();
  }
};
</script>