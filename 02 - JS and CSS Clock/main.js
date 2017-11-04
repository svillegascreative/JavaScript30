const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setTime() {
  const now = new Date();
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds()
  };
}

function displayTime() {
  const currentTime = setTime();
  displayHours(currentTime.hours);
  displayMinutes(currentTime.minutes);
  displaySeconds(currentTime.seconds);
}

function displayHours(h) {
  const hoursDegrees = ((h / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function displayMinutes(m) {
  const minutesDegrees = ((m / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function displaySeconds(s) {
  const secondsDegrees = ((s / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  if (secondsDegrees == 90) {
    secondHand.style.transition = 'none';
  } else {
    secondHand.style.transition = '';
  }
}

setInterval(displayTime, 1000);

displayTime();
