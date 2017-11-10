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

function togglePlayButton() {
  video.paused ? toggle.innerHTML = '&#9654;' : toggle.innerHTML = '&#9208;';
}



toggle.addEventListener('click', togglePlay);
window.addEventListener('keydown', function(e) {
  if (e.keyCode === 32) {
    togglePlay();
  }
});
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
