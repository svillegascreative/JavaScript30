const hero = document.querySelector('.hero');
const header = hero.querySelector('h1');

function moveShadow(e) {
  const height = hero.offsetHeight;
  const width = hero.offsetWidth;
  let mouseX = e.offsetX;
  let mouseY = e.offsetY;

  if (this !== e.target) {
    mouseX += e.target.offsetLeft;
    mouseY += e.target.offsetTop;
  }
  console.log(mouseX, mouseY);
}

hero.addEventListener('mousemove', moveShadow);
