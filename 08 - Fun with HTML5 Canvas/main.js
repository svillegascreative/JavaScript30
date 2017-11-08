const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'papayawhip';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
