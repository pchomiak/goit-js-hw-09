const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
stopBtn.setAttribute('disabled', true);
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const disableButton = button => {
  button.setAttribute('disabled', true);
};

const enableButton = button => {
  button.removeAttribute('disabled');
};

const switchColors = time => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, time);
};

startBtn.addEventListener('click', () => {
  disableButton(startBtn);
  enableButton(stopBtn);
  switchColors(1000);
});

stopBtn.addEventListener('click', () => {
  disableButton(stopBtn);
  enableButton(startBtn);
  clearInterval(timerId);
});
