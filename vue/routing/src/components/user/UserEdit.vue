<template>
  <div>
    <h3>Edit User: {{$route.params.id}}</h3>
    <p>Local: {{$route.query.locale}}</p>
    <p>Analytics: {{$route.query.q}}</p>
    <hr />
    <button class="btn btn-primary" @click="confirmed=true">confirm</button>
    <hr />
    <div style="height: 700px; background: pink">content</div>
    <p id="data">extra data</p>
  </div>
</template>

<script >
export default {
  data() {
    return {
      confirmed: false
    };
  },
  // prevents user leaving this page
  beforeRouteLeave(to, from, next) {
    if (this.confirmed) {
      next();
    } else {
      if (confirm("are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>