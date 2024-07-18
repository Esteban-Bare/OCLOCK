let timer;
let timeLeft = 0;
let running = false;

function updateTimeDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("timerDisplay").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startStopTimer() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      timeLeft--;
      updateTimeDisplay();
      if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up!");
        running = false;
        document.getElementById("startStop").innerText = "Start";
      }
    }, 1000); // 1 second interval
    document.getElementById("startStop").innerText = "Stop";
  } else {
    clearInterval(timer);
    running = false;
    document.getElementById("startStop").innerText = "Start";
  }
}

function increaseTime() {
  timeLeft += 60; // Increase time by 1 minute (60 seconds)
  updateTimeDisplay();
}

function decreaseTime() {
  if (timeLeft >= 60) { // Ensure time doesn't become negative
    timeLeft -= 60; // Decrease time by 1 minute (60 seconds)
    updateTimeDisplay();
  }
}

document.getElementById("startStop").addEventListener("click", startStopTimer);
document.getElementById("increaseTime").addEventListener("click", increaseTime);
document.getElementById("decreaseTime").addEventListener("click", decreaseTime);

// Listen for input change
document.getElementById("timeInput").addEventListener("input", function() {
  timeLeft = parseInt(this.value) * 60; // Convert input minutes to seconds
  updateTimeDisplay();
});

updateTimeDisplay(); // Update initial time display
