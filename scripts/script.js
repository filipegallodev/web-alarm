function timeGet() {
  let localTimeHours = new Date().getHours();
  let localTimeMinutes = minutesGet();
  let localTimeSeconds = secondsGet();

  let localTime = localTimeHours + ':'
    + localTimeMinutes + ':'
    + localTimeSeconds;

  let timeDoc = document.querySelector('#localtime');

  timeDoc.innerHTML = localTime;

  alarmSet(localTime);
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
    document.querySelector('#alarmtime').innerHTML = alarmTime;
    console.log(`Horário do alarme: ${alarmTime}`);
  }

  let alarmTime = document.querySelector('#alarmtime');

  alarmTime = alarmTime.textContent.trim();

  if (localTime == alarmTime) {
    alert('ACORDE!');
  }
}

let button = document.querySelector('#alarm-button-save');

setInterval(timeGet, 1000);