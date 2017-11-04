const panels = document.querySelectorAll('.panel');

function viewPanel(e) {

}

panels.forEach( panel =>
  panel.addEventListener('click', viewPanel)
);
