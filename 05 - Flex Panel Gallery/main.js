const panels = document.querySelectorAll('.panel');

function viewPanel() {
  this.classList.add('open');
}

function animateText() {
  this.classList.toggle('open-active');
}

panels.forEach( panel => {
  panel.addEventListener('click', viewPanel)
});

panels.forEach( panel => {
  panel.addEventListener('transitionend', animateText)
});
