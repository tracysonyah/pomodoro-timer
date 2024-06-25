const pomodoroBtn = document.getElementById("pomodoro");
const shortBreak = document.getElementById("short-break");
const longBreak = document.getElementById("long-break");
const timer = document.querySelector(".timer p");
const startTimer = document.getElementById("start");
const pauseTimer = document.getElementById("pause");
const restartTimer = document.getElementById("restart");

let initialTime;
let timeLeft;
let interval;


pomodoroBtn.addEventListener("click", () => {
    timer.innerText = "25:00";
    timeLeft = 25 * 60;
    initialTime = timeLeft;
    console.log("grace!");
})

longBreak.addEventListener("click", () => {
    timer.innerText = "15:00";
    timeLeft = 15 * 60;
    initialTime = timeLeft
    console.log(timeLeft);
});

shortBreak.addEventListener("click", () => {
    timer.innerText = "5:00";
    timeLeft = 5 * 60;
    initialTime = timeLeft;
    console.log(timeLeft);
});

restartTimer.addEventListener("click", () => {
    clearInterval(interval);
    timeLeft = initialTime;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    console.log("yes!");
})

startTimer.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startCount, 1000);
});

function startCount() {
    if(timeLeft > 0) {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    else {
        console.log("no!");
        clearInterval(interval);
    }
}

pauseTimer.addEventListener("click", () => {
    clearInterval(interval);
})

