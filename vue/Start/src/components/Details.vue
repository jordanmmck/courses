<template>
  <div class="col-xs-12 col-sm-6">
    <p v-if="!server">Please select a server</p>
    <p v-else>Server #{{server.id}} selected, Status: {{server.status}}</p>
    <hr />
    <button @click="resetStatus">Normalize</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data() {
    return {
      server: null
    };
  },
  methods: {
    resetStatus() {
      this.server.status = "OK";
    }
  },
  created() {
    eventBus.$on("normalize", server => {
      this.server = server;
    });
  }
};
</script>