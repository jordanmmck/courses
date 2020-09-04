export const fruitMixin = {
  data() {
    return {
      fruits: ["grape", "pineapple", "apple", "pear"],
      filterText: "",
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      });
    },
  },
};
