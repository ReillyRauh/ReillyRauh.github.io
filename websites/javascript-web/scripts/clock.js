function currentTime() {
    const date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let midday = 'PM';

    midday = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour === 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
    hour = updateHour(hour);
    minutes = updateTime(minutes);
    document.getElementById('clock').innerText = `The time is currently ${hour}:${minutes} ${midday}.`

    let t = setTimeout(currentTime, 10000);
}

function updateHour(v) {
    return v
}

function updateTime(v) {
    if (v < 10) {
        return "0" + v
    } else {
        return v
    }
}

currentTime();