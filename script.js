function updateTimer() {
  const timerElement = document.getElementById("timer");
  if (!timerElement) return; // prevent error if element not found

  const now = new Date();
  const dateTimeString = now.toLocaleString();
  timerElement.textContent = dateTimeString;
}

window.onload = function () {
  updateTimer();                  // show immediately
  setInterval(updateTimer, 1000); // update every second
};

