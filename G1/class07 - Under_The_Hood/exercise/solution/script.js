let display = document.getElementById("display")
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")

let seconds = 0;
let minutes = 0;
let hours = 0;


function startTimer() {

    let start = setInterval(() => {
        seconds++

        if (seconds === 60) {
            seconds = 0
            minutes++
        }

        if (minutes === 60) {
            minutes = 0
            hours++
        }

        displayTimer(seconds, minutes, hours)

        stop.addEventListener("click", () => {
            clearInterval(start)  
        })

    }, 1000)

}

function displayTimer(sec, min, hr) {
    display.innerHTML = `${hr} : ${min} : ${sec}`;
} 

function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
}

start.addEventListener("click", startTimer)
reset.addEventListener("click", resetTimer)