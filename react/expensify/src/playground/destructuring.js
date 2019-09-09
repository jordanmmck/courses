// const person = {
//   name: 'jordan',
//   age: 31,
//   location: {
//     city: 'Victoria',
//     temp: 22,
//   },
// };

// const { name: firstName = 'anon', age = 0, location } = person;
// const { city, temp: temperature } = location;

// console.info(age, firstName);
// console.info(city, temperature);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'self' } = book.publisher;

// console.info(publisherName);

const address = ['2528 thompson drive', 'kamloops', 'bc'];

const [addr = 'none', city, prov] = address;

console.info(`you are in ${addr}, ${city}, ${prov}`);
