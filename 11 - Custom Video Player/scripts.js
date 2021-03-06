const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const sliders = document.querySelectorAll('.player__slider');
const skipButtons = document.querySelectorAll('button[data-skip]');

let isDragging = false;

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

function updateProgress() {
  const percentElapsed = video.currentTime / video.duration * 100;
  progressFilled.style.flexBasis = `${percentElapsed}%`;
}

function changeProgress(e) {
  const newFraction = e.offsetX / progress.clientWidth;
  const newTime = video.duration * newFraction;
  video.currentTime = newTime;
}

function skipPlay() {
  const skipTime = this.dataset.skip;
  video.currentTime += parseFloat(skipTime);
}

function handleSlider() {
  if (this.name == 'volume') {
    video.volume = this.value;
  }
  if (this.name == 'playbackRate') {
    video.playbackRate = this.value;
  }
}

toggle.addEventListener('click', togglePlay);
window.addEventListener('keypress', function(e) {
  if (e.keyCode === 32) {
    togglePlay();
  }
});

video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);
video.addEventListener('timeupdate', updateProgress);

progress.addEventListener('mousedown', (e) => {
  isDragging = true;
  changeProgress(e);
});
progress.addEventListener('mouseup', () => isDragging = false);
progress.addEventListener('mouseout', () => isDragging = false);
progress.addEventListener('mousemove', (e) => isDragging && changeProgress(e));


skipButtons.forEach( button => button.addEventListener('click', skipPlay) );

sliders.forEach( slider => slider.addEventListener('change', handleSlider) );
