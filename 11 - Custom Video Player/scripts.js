const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const slider = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('button[data-skip]');

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

toggle.addEventListener('click', togglePlay);
