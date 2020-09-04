<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>name: {{reverseName()}}</p>
    <p>age: {{userAge}}</p>
    <button @click="resetName">reset</button>
    <button @click="resetFn()">reset</button>
    <p>name: {{name}}</p>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  props: {
    name: {
      type: String,
      default: "jordan"
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    reverseName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "jordan";
      this.$emit("nameWasReset", this.name);
    }
  },
  created() {
    eventBus.$on("ageEdited", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
