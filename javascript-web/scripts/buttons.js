const button = document.getElementById('button');
const moveAround = document.getElementsByClassName('move-around');

button.onclick = function() {
    if (button.className === 'move-around') {
        button.classList = '';
    } else {

        if (button.className === 'NaN') {
            button.className -= 'NaN'
        } else 
        button.className += 'move-around';
    }
};