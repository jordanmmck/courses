<template>
  <div>
    <p>server: {{status}}</p>
    <hr />
    <button @click="changeStatus">change</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "critical"
    };
  },
  methods: {
    changeStatus() {
      this.status = "ok";
    }
  }
};
</script>

<style lang="scss"></style>
