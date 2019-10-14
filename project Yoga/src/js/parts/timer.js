function timer(idTimer, endtime, secondsClass, minutesClass, hoursClass, daysClass) {
    let timer = document.getElementById(idTimer),
        seconds = timer.querySelector(secondsClass),
        minutes = timer.querySelector(minutesClass),
        hours = timer.querySelector(hoursClass),
        days = timer.querySelector(daysClass),
        timeInterval = setInterval(updateClock, 1000);

    if (endtime <= 0) { clearInterval(timeInterval); }

    function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor( (t / (1000 * 60) % 60) ),
        hours = Math.floor( (t / (1000 * 60 * 60) % 24 ) ),
        days = Math.floor(t / (1000 * 60 * 60 * 24) );

        return {
            total : t,
            seconds,
            minutes,
            hours,
            days
        };
    }

    function updateClock() {
        let upTime = getTimeRemaining(endtime);
        seconds.textContent = (upTime.seconds < 10) ? '0' + upTime.seconds : upTime.seconds;
        minutes.textContent = (upTime.minutes < 10) ? '0' + upTime.minutes : upTime.minutes;
        hours.textContent = (upTime.hours < 10) ? '0' + upTime.hours : upTime.hours;
        days.textContent = (upTime.days < 10) ? '0' + upTime.days : upTime.days;

        if (upTime.total <= 0) {
            clearInterval(timeInterval);
            seconds.textContent = '00';
            minutes.textContent = '00';
            hours.textContent = '00';
            days.textContent = '00';
        }
    }
}

module.exports = timer;