function timeGet() {
  let localTime = new Date().getHours() + ':'
    + new Date().getMinutes() + ':'
    + new Date().getSeconds()
  let timeDoc = document.querySelector('#localtime');

  timeDoc.innerHTML = localTime;

  alarmSet(localTime);
}

function alarmSet(localTime) {
  localTime = localTime.slice(0, 5);
  console.log(`Horário: ${localTime}`);

  button.onclick = function () {
    let alarmTime = document.querySelector('#set-alarm').value;
    console.log(`Horário do alarme: ${alarmTime}`);
  }

  if (localTime == '22:11') {
    console.log('ACORDE!');
  }
}

let button = document.querySelector('#set-button');

setInterval(timeGet, 1000);