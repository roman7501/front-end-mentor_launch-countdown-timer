const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const scheduledDate = "24 Jan 2021";

// Init
timer();
setInterval(timer, 1000);

function timer() {
  const date = new Date();
  const remaining = new Date(scheduledDate) - date;

  const secondsLeft = Math.floor(remaining / 1000);

  const days = Math.floor(secondsLeft / 3600 / 24);
  const hours = Math.floor(secondsLeft / 3600) % 24;
  const minutes = Math.floor(secondsLeft / 60) % 60;
  const seconds = Math.floor(secondsLeft % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);

  console.log(secondsLeft, days, hours, minutes, seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
