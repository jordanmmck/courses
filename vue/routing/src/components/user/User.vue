<template>
  <div>
    <h1>User Page</h1>
    <hr />
    <button class="btn btn-primary" @click="navigateToHome">Go Home</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script >
export default {
  props: {
    id: {
      type: String,
      default: "0"
    }
  },
  methods: {
    navigateToHome() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>