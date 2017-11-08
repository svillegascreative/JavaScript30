const p = document.querySelector('p');
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

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

// counting

// timing
