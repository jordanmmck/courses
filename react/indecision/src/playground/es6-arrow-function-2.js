// const add = function(a, b) {
//   return a + b;
// };

const add = (a, b) => {
  return a + b;
};

console.info(add(1, 2));

const user = {
  name: 'jordan',
  cities: ['kam', 'vic'],
  printPlaces() {
    const cityMsgs = this.cities.map(city => {
      return city + '!';
    });

    return cityMsgs;
  },
};

console.info(user.printPlaces());

const nums = [2, 3, 5, 7];
const squares = nums.map(num => num * num);
console.info(squares);
