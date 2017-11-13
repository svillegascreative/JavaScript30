const secretCode = 'liberty';
const pressed = [];

function compareToSecret(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode - 1, pressed.length - secretCode.length);
}

window.addEventListener('keypress', compareToSecret);
