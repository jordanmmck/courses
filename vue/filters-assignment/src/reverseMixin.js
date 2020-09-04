export const reverseMixin = {
  computed: {
    reversed() {
      return this.firstText.split("").reverse().join("");
    },
  },
};
