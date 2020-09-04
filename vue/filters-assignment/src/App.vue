<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{firstText|reverse}}</p>
        <p>{{secondText|getLen}}</p>
        <hr />
        <p>{{reversed}}</p>
        <p>{{lengthAware}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { lengthAwareMixin } from "./lengthAwareMixin";
import { reverseMixin } from "./reverseMixin";

export default {
  mixins: [lengthAwareMixin, reverseMixin],
  data() {
    return {
      firstText: "python3",
      secondText: "python4"
    };
  },
  filters: {
    reverse(s) {
      return s
        .split("")
        .reverse()
        .join("");
    },
    getLen(s) {
      return `${s} (${s.length})`;
    }
  }
};
</script>

<style></style>
