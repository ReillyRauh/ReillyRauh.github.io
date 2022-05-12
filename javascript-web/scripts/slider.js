const output = document.getElementById('box');
const slider = document.getElementById('range');

slider.oninput = function() {
    const convert = slider.value / 100;

    output.style.opacity = convert;
    document.getElementById('val').innerHTML = convert;
}