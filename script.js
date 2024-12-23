let totalSeconds



function updateCountdown() {
    // MM/DD/YYYY
    totalSeconds = Math.floor((new Date('01/01/2025') - new Date()) / 1000);
    if (totalSeconds <= 0) {
        document.getElementById("countdown").innerHTML = "<h2>Time's up!</h2>";
        clearInterval(intervalId);
        return;
    }
    setTimeLeft()

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}
function setTimeLeft() {
    days = Math.floor(totalSeconds / (60 * 60 * 24));
    hours = Math.floor(totalSeconds / (60 * 60) % 24);
    minutes = Math.floor(totalSeconds / (60) % 60);
    seconds = Math.floor(totalSeconds % 60);
}

const intervalId = setInterval(updateCountdown, 1000);
updateCountdown();