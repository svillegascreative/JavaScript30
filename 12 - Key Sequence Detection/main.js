const secretCode = 'liberty';
const pressed = [];

function compareToSecret(e) {
  pressed.push(e.key);
  pressed.splice(-secretCode - 1, pressed.length - secretCode.length);
  if (pressed.join("") == secretCode) {
    console.log('you did it!');
    cornify_add();
  }
}

window.addEventListener('keypress', compareToSecret);
