<template>
  <div>
    <h3>new quote</h3>
    <button @click="counter++"></button>
    <div>{{counter}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {},
  deactivated() {
    console.log("deact");
  },
  activated() {
    console.log("act");
  }
};
</script>

<style scoped>
</style>