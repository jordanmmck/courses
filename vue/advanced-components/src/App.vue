<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <hr />
        <button @click="selected='appQuote'">Quote</button>
        <button @click="selected='appAuthor'">Author</button>
        <button @click="selected='appNew'">New</button>
        <hr />
        <p>{{selected}}</p>
        <keep-alive>
          <component :is="selected">
            <h2 slot="title">{{quoteTitle}}</h2>
            <p>The Last Man...</p>
          </component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import Author from "./components/Author.vue";
import New from "./components/New.vue";

export default {
  data() {
    return {
      quoteTitle: "NIETZSCHE",
      selected: "appQuote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style scoped>
</style>
