const p = document.querySelector('p');
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const cats = document.querySelector('.cats');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello, world');

// Interpolated
console.log('hello, I am a %s log', 'JS');

// Styled
console.log('%c This text is large and blue', 'font-size: 40px; color: blue');

// warning!
console.warn('This is going to hurt');

// Error :|
console.error('You can\'t say that on television!');

// Info <-- not in Chrome?
console.info('Fun fact: barnacles have the longest penis relative to body size.');

// Testing
console.assert( 'header' == '.header', 'Interview fail!');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach( dog => {
  // console.group(`${dog.name}`);
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log('Please pet ${dog.name}');
  console.groupEnd(`${dog.name}`)
});

// counting
console.count('Kona');
console.count('Liberty');
console.count('Kona');
console.count('Liberty');
console.count('Kona');
console.count('Liberty');
console.count('Liberty');
console.count('Kona');
console.count('Liberty');
console.count('Liberty');
console.count('Kona');
console.count('Kona');
console.count('Liberty');
console.count('Kona');

// timing
console.time('fetching cat');
fetch('http://random.cat/meow')
  .then( data => data.json())
  .then( data => {
    const img = document.createElement('img');
    img.setAttribute('src', `${data.file}`);
    cats.append(img);
  });
console.timeEnd('fetching cat');

// table
console.table(dogs);
