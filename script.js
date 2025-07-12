function updateTimer() {
  const timerElement = document.getElementById("timer");
  const now = new Date();

  // Format the date and time string
  const dateTimeString = now.toLocaleString(); // includes both date and time

  // Update the content of the timer element
  timerElement.textContent = dateTimeString;
}

// Update timer every second
setInterval(updateTimer, 1000);

// Initial call to display immediately on page load
window.onload = updateTimer;
