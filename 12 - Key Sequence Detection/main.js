const pressed = [];

function compareToSecret(e) {
  pressed.push(e.key);
  console.log(pressed);
}

window.addEventListener('keypress', compareToSecret);
