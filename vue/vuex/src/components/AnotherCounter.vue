<template>
  <div>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 50, duration: 10 })"
    >
      Async Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 25, duration: 50 })"
    >
      Async Decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"]),
  },
};
</script>
