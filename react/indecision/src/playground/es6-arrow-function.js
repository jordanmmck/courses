function square0(x) {
  return x * x;
}
const square1 = function(x) {
  return x * x;
};
const square2 = x => {
  return x * x;
};
const square3 = x => x * x;

console.info(square0(44));
console.info(square1(44));
console.info(square2(44));
