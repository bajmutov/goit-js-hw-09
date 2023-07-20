import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  intervalId: null,
  isActiveStart: false,

  onClose(selectedDates) {
    console.dir(selectedDates[0]);
    const startTime = Date.now();
    if (selectedDates[0] < startTime) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
      return;
    }
    startBtn.disabled = false;

    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;
      if (this.isActiveStart) {
        return;
      }
      this.isActiveStart = true;
      this.intervalId = setInterval(() => {
        const currentTime = Date.now();
        const deltaTime = selectedDates[0] - currentTime;

        if (deltaTime < 0) {
          Notify.info('Its finish. Restart page');
          clearInterval(this.intervalId);
          this.isActiveStart = false;
          return;
        }

        const timer = convertMs(deltaTime);
        console.log(timer);
        updateTimerface(timer);
      }, 1000);
    });
  },
};

flatpickr('#datetime-picker', options);

function updateTimerface({ days, hours, minutes, seconds }) {
  daysField.textContent = addLeadingZero(`${days}`);
  hoursField.textContent = addLeadingZero(`${hours}`);
  minutesField.textContent = addLeadingZero(`${minutes}`);
  secondsField.textContent = addLeadingZero(`${seconds}`);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
