window.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");

  function updateTimer() {
    const now = new Date();
    const dateTimeString = now.toLocaleString(); // e.g., 12/07/2025, 10:45:12 AM
    timerElement.textContent = dateTimeString;
  }

  updateTimer(); // initial call
  setInterval(updateTimer, 1000); // update every second
});
