const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticles(name) {
  return name.replace(/^(a |the |an )/i, '');
}

const sortedBands = bands.sort( (a, b) => {
  return removeArticles(a) > removeArticles(b) ? 1 : -1;
});
