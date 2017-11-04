const panels = document.querySelectorAll('.panel');

function viewPanel() {
  this.classList.add('open', 'open-active');
}

panels.forEach( panel =>
  panel.addEventListener('click', viewPanel)
);
