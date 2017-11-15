const hero = document.querySelector('.hero');
const header = hero.querySelector('h1');
const limit = 100;

function moveShadow(e) {
  const height = hero.offsetHeight;
  const width = hero.offsetWidth;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (this !== e.target) {
    mouseX += e.target.offsetLeft;
    mouseY += e.target.offsetTop;
  }

  const xLimit = Math.round((mouseX / width * limit) - (limit / 2));
  const yLimit = Math.round((mouseY / height * limit) - (limit / 2));

  header.style.textShadow = `
    ${xLimit}px ${yLimit}px 0 grey,
    -${xLimit}px ${yLimit}px 0 darkgrey,
    ${yLimit}px -${xLimit}px 0 lightgrey,
    -${yLimit}px -${xLimit}px 0 slategrey
  `;
}

hero.addEventListener('mousemove', moveShadow);
