import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    checkTime(selectedDates);
  },
};

const checkTime = array => {
  let date = array[0];
  if (date.getTime() < actuallTime) {
    Notiflix.Notify.failure('Please choose a date in the future');
    return;
  }
  btn.removeAttribute('disabled');
  newTime = date.getTime();
};

const showTime = () => {
    timerId = setInterval(() => {
      let time = convertMs(newTime - actuallTime);
      days.textContent = time.days;
      hours.textContent = time.hours;
      minutes.textContent = time.minutes;
      seconds.textContent = time.seconds;
      newTime -= 1000;
    }, 1000);
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

const data = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');
const actuallTime = options.defaultDate.getTime();
let newTime = 0;
let timerId = null;

let cos = flatpickr(data, options);
btn.setAttribute('disabled', true);
btn.addEventListener('click', showTime);
