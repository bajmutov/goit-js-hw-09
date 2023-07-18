const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bgc = document.body;
let timerId = null;

startBtn.addEventListener('click', onChangeBgkClick);
stopBtn.addEventListener('click', onStopChangeBgk);

function onChangeBgkClick() {
  timerId = setInterval(() => {
    let color = getRandomHexColor();
    bgc.style.backgroundColor = color;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function onStopChangeBgk() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
