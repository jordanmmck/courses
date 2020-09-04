<template>
  <li class="list-group-item" style="cursor:pointer" @click="normalize">
    <p>Server #{{server.id}}</p>
    <p>Status: {{server.status}}</p>
  </li>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: ["server"],
  methods: {
    normalize() {
      eventBus.$emit("normalize", this.server);
    }
  }
};
</script>
