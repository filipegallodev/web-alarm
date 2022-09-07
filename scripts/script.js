function getTime() {
  let localTime = new Date().getHours() + ':'
    + new Date().getMinutes() + ':'
    + new Date().getSeconds();
  setTime(localTime);
}

function setTime(localTime) {
  document.querySelector('#localtime')
    .innerHTML = localTime;
}

function setAlarm() {
  let alarmTime = document.querySelector('#set-alarm').value;
  console.log(`Horário: ${alarmTime}`);
}

let button = document.querySelector('#set-button');

button.onclick = setAlarm;

setInterval(getTime, 1000);