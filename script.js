const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const timer = document.querySelector(".timer p");
const startTimer = document.getElementById("start");
const pauseTimer = document.getElementById("pause");
const restartTimer = document.getElementById("restart");


let timeLeft;
let interval;

longBreak.addEventListener("click", () => {
    console.log("yes!");
    timer.innerText = "15:00";
    timeLeft = 15 * 60;
    console.log(timeLeft);
});

shortBreak.addEventListener("click", () => {
    timer.innerText = "5:00";
    timeLeft = 5 * 60;
    console.log(timeLeft);
});

// restartTimer.addEventListener("click", () => {

// })

startTimer.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startCount, 1000);
});

function startCount() {
    if(timeLeft > 0) {
        const minutes = Math.floor(timeLeft / 60);
        console.log(minutes);
        const seconds = timeLeft % 60;
        console.log(seconds);
        timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        timeLeft--;
    }
    else {
        console.log("no!");
        clearInterval(interval);
    }
}

