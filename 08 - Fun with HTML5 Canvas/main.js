const canvas = document.querySelector('#draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'papayawhip';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousedown', () => isDrawing = false);
