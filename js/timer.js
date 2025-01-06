const timerItems = document.querySelectorAll('.timer__item .h2');

function timeLeft(NYTimestamp) {
    let fullTime = NYTimestamp - Date.now();
    let seconds = Math.floor((fullTime / 1000) % 60);
    let minutes = Math.floor((fullTime / 1000 / 60) % 60);
    let hours = Math.floor((fullTime / (1000 * 60 * 60)) % 24);
    let days = Math.floor(fullTime / (1000 * 60 * 60 * 24));
    return {
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
};


const now = new Date();
const year = now.getUTCFullYear();

const newYears = Date.parse('January 1 ' + (year + 1) + " 00:00:00 GMT+00:00");
const timeTillNY = timeLeft(newYears);

timerItems[0].innerText = timeTillNY.days;
timerItems[1].innerText = timeTillNY.hours;
timerItems[2].innerText = timeTillNY.minutes;
timerItems[3].innerText = timeTillNY.seconds;

let timeinterval = setInterval(function () {
    const timeTillNY = timeLeft(newYears);
    timerItems[0].innerText = timeTillNY.days;
    timerItems[1].innerText = timeTillNY.hours;
    timerItems[2].innerText = timeTillNY.minutes;
    timerItems[3].innerText = timeTillNY.seconds;
}, 1000);
