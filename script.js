const openBox = document.getElementById('open-box');
const box = document.getElementById('options')
const dateHolder = document.getElementById('date');
const d = new Date()
const y = d.getFullYear();
var t = d.getDay() + 1;
var m = d.getMonth() + 1;

function revealOptions() {
    openBox.innerHTML = "Close Options..."
    box.style.display = 'block';
    openBox.removeEventListener('click', revealOptions);
    openBox.addEventListener('click', closeOptions);
}

function closeOptions() {
    openBox.innerHTML = 'See Options...';
    box.style.display = 'none';
    openBox.removeEventListener('click', closeOptions);
    openBox.addEventListener('click', revealOptions);
}

function getTime() {
    t = updateTime(t);
    m = updateTime(m);

    dateHolder.innerHTML = `Owned and Created by Reilly Rauh, Updated as of ${m}/${t}/${y}`;
};

function updateTime(y) {
    if (y < 10) {
        return '0' + y;
    } else {
        return y;
    }
}

openBox.addEventListener('click', revealOptions);
getTime();