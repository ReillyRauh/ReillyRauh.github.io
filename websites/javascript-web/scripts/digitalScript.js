function currentTime() {
    const d = new Date();
    let hour = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let midday = 'PM';

    midday = (hour >= 12) ? 'PM' : 'AM';
    hour = (hour === 0) ? 0 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    minutes = updateTime(minutes);
    seconds = updateTime(seconds);

    document.getElementById('clock').innerText = `${hour}:${minutes}:${seconds} ${midday}`;

    let t = setTimeout(currentTime, 1000);
}

function updateTime(v) {
    if (v < 10) {
        return '0' + v
    } else {
        return v
    }
}

currentTime();