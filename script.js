let openBox = document.getElementById('open-box');
let box = document.getElementById('options')

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

openBox.addEventListener('click', revealOptions);