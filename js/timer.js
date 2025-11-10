const timerDays = document.querySelector('.timer__days');
const timerHours = document.querySelector('.timer__hours');
const timerMinutes = document.querySelector('.timer__minutes');
const timerSeconds = document.querySelector('.timer__seconds');

let interval;

const numWord = (value, words) => {
  value = Math.abs(value) % 100;

  const lastNum = value % 10;
  if (value > 10 && value < 20) {
    return words[2];
  }
  if (lastNum > 1 && lastNum < 5) {
    return words[1];
  }
  if (lastNum === 1) {
    return words[0];
  }
  return words[2];
};

const updateTimer = () => {
  const date = new Date();
  const dateDeadline = new Date('11 november 2025').getTime();
  const timeRemaining = (dateDeadline - date) / 1000;

  const days = Math.floor(timeRemaining / 60 / 60 / 24);
  const hours = Math.floor((timeRemaining / 60 / 60) % 24);
  const minutes = Math.floor((timeRemaining / 60) % 60);
  const seconds = Math.floor(timeRemaining % 60);

  const formattedDays = days < 10 ? '0' + days : days;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  timerDays.textContent = formattedDays;
  timerHours.textContent = formattedHours;
  timerMinutes.textContent = formattedMinutes;
  timerSeconds.textContent = formattedSeconds;

  timerDays.nextElementSibling.textContent = numWord(days, [
    'День',
    'Дня',
    'Дней',
  ]);
  timerHours.nextElementSibling.textContent = numWord(hours, [
    'Час',
    'Часа',
    'Часов',
  ]);
  timerMinutes.nextElementSibling.textContent = numWord(minutes, [
    'Минута',
    'Минуты',
    'Минут',
  ]);
  timerSeconds.nextElementSibling.textContent = numWord(seconds, [
    'Секунда',
    'Секунды',
    'Секунд',
  ]);

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerDays.textContent = '00';
    timerDays.style.color = 'red';
    timerHours.textContent = '00';
    timerHours.style.color = 'red';
    timerMinutes.textContent = '00';
    timerMinutes.style.color = 'red';
    timerSeconds.textContent = '00';
    timerSeconds.style.color = 'red';
  }
};

updateTimer();
interval = setInterval(updateTimer, 500);
