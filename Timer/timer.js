// Variables for buttons

const startStopBtn = document.querySelector('#start-stop-btn');
const resetBtn = document.querySelector('#reset-btn');

// Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for set interval and timer status

let timerInterval = null;
let timerStatus = 'stopped';

// Stop Watch Functions

function stopWatch() {
    seconds++

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    }

    let displayTimer = document.getElementById('timer').innerText = 
    leadingHours + ':' + leadingMinutes + ':' + leadingSeconds;
}

// window.setInterval(stopWatch, 1000);

startStopBtn.addEventListener('click', function() {

    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('start-stop-btn').innerHTML = `<p id="stop">Stop</p>`;
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('start-stop-btn').innerHTML = `<p id="start">Start</p>`;
        timerStatus = 'stopped';
    }
});

resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById('timer').innerHTML = '00:00:00';
});