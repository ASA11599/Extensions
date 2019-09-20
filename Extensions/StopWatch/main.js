const clockElem = document.getElementById("clock");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const clock = {
    hours: 0,
    minutes: 0,
    seconds: 0
};

function formatNumForClock(n) {
    return (n >= 10) ? (n.toString()) : ("0" + n.toString());
}

clock.reset = function() {
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
}

clock.toString = function() {
    return formatNumForClock(this.hours)
            + ":"
            + formatNumForClock(this.minutes)
            + ":"
            + formatNumForClock(this.seconds)
}

clock.update = function() {
    this.seconds++;
    if (this.seconds == 60) {
        this.seconds = 0;
        this.minutes++;
    }
    if (this.minutes == 60) {
        this.minutes = 0;
        this.hours++;
    }
    if (this.hours == 24) {
        this.hours = 0;
    }
}

clock.start = function() {
    return setInterval(() => {
        this.update();
        render();
    }, 1000);
}

function render() {
    clockElem.innerText = clock.toString();
}

function setup() {
    render();
    let intervalID;
    let started = false;
    startBtn.onclick = () => {
        if (!started) {
            intervalID = clock.start();
            started = true;
        }
    };
    stopBtn.onclick = () => {
        if (intervalID != undefined) {
            clearInterval(intervalID);
        }
        started = false;
        render();
    };
    resetBtn.onclick = () => {
        if (intervalID != undefined) {
            clearInterval(intervalID);
        }
        started = false;
        clock.reset();
        render();
    };
}

setup();