function timeGet() {
  let localTimeHours = new Date().getHours();
  let localTimeMinutes = minutesGet();
  let localTimeSeconds = secondsGet();

  let localTime = localTimeHours + ':'
    + localTimeMinutes + ':'
    + localTimeSeconds;

  htmlSetTime(localTimeHours, localTimeMinutes, localTimeSeconds);

  alarmSet(localTime);
}

function htmlSetTime(hours, minutes, seconds) {
  let timeHours = document.querySelector('#hours');
  let localMinutes = document.querySelector('#minutes');
  let timeSeconds = document.querySelector('#seconds');

  timeHours.innerHTML = hours;
  localMinutes.innerHTML = minutes;
  timeSeconds.innerHTML = seconds;
}

function minutesGet() {
  let localTimeMinutes = new Date().getMinutes();
  if (localTimeMinutes < 10) {
    localTimeMinutes = "0" + localTimeMinutes;
  }
  return localTimeMinutes;
}

function secondsGet() {
  let localTimeSeconds = new Date().getSeconds();
  if (localTimeSeconds < 10) {
    localTimeSeconds = "0" + localTimeSeconds;
  }
  return localTimeSeconds;
}

function alarmSet(localTime) {
  localTime = localTime.slice(0, 5);
  console.log(`Horário: ${localTime}`);

  button.onclick = function () {
    let alarmTime = document.querySelector('#alarm-choice').value;
    document.querySelector('#alarm-time').innerHTML = alarmTime;
    console.log(`Horário do alarme: ${alarmTime}`);
  }

  let alarmTime = document.querySelector('#alarm-time');
  let pararAlarme = document.querySelector('#parar-alarme');

  alarmTime = alarmTime.textContent.trim();

  if (localTime == alarmTime) {
    sound.play();
    pararAlarme.innerHTML = 'PARAR';
    pararAlarme.style.display = "block";
  }
  else {
    pararAlarme.style.display = 'none';
  }
}

let button = document.querySelector('#alarm-button-save');

const sound = new Audio("src/audio/alarm.wav");

setInterval(timeGet, 1000);