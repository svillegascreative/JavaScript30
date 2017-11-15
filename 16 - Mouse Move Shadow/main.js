const hero = document.querySelector('.hero');
const header = hero.querySelector('h1');

function moveShadow(e) {
  const height = hero.offsetHeight;
  const width = hero.offsetWidth;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;
}

hero.addEventListener('mousemove', moveShadow);
