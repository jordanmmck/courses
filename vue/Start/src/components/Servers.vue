<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="server in servers" v-bind:key="server.id" :server="server"></app-server>
    </ul>
  </div>
</template>

<script>
import Server from "./Server.vue";

export default {
  data() {
    return {
      servers: [
        {
          id: 1,
          status: "ok"
        },
        {
          id: 2,
          status: "critical"
        },
        {
          id: 3,
          status: "unknown"
        },
        {
          id: 4,
          status: "normal"
        }
      ]
    };
  },
  components: {
    "app-server": Server
  },
  normalize(id) {
    eventBus.normalize(id);
  },
  created() {
    eventBus.$on("normalize", id => {
      this.servers[id - 1].status = "OK";
    });
  }
};
</script>