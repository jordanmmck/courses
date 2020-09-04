<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">click</button>
        <hr />
        <div
          style="width:100px; height:100px; background:lightgreen;"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    customOn: {
      bind(el, binding) {
        // el.onclick = () => {
        //   binding.value();
        // };
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn);
      }
    }
  },
  methods: {
    clicked() {
      alert("clicked");
    },
    mouseEnter() {
      console.log("mouse mouse");
    },
    mouseLeave() {
      console.log("mouse leave");
    }
  }
};
</script>

<style>
</style>
