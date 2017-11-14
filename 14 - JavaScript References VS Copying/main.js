// start with strings, numbers and booleans
let age = 100;
let age2 = 100
console.log(age, age2);
age = 200;
console.log(age, age2);

let name = 'Rabbit';
let name2 = name;
console.log(name, name2);
name = 'Peter';
console.log(name, name2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(team);
console.log(players);

// You might think we can just do something like this:
team[3] = 'Lux';

// however what happens when we update that array?
console.log(team);
//  ['Wes', 'Sarah', 'Ryan', 'Lux']

// now here is the problem!
console.log(players);
// oh no - we have edited the original array too!
//  ['Wes', 'Sarah', 'Ryan', 'Lux']
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players.slice();
console.log(team2);

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log(team3);
// or use the new ES6 Spread
const team4 = [...players];
console.log(team4);

const team5 = Array.from(players);
console.log(team5);
// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object
const person = {
  name: "Bart",
  age: 10
}

// and think we make a copy:
const captain = person;
captain.number = 99;

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99});

// We will hopefully soon see the object ...spread
// const cap3 = {...person}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
  name: 'Wes',
  age: 100,
  social: {
    twitter: '@wesbos',
    facebook: `wesbos.developer`
  }
}
console.log(wes);
const dev = Object.assign({}, wes);

// "poor man's deep clone"
const dev2 = JSON.parse(JSON.stringify(wes));
