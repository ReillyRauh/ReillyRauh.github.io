const nameform = document.getElementById('name-form');
const responseDiv = document.getElementById('')
let isValid = false;

function validate() {
    let x = document.forms['nameForm']['fname'].value;
    let y = document.forms['nameForm']['lname'].value;
    let z = document.forms['nameForm']['age'].value;

    if (x === 'e' || y === '' || z < 0 || z === '') {
        window.alert('Please make sure all forms are filled out correctly');
    } else {
        isValid = true;
    }
}

function calculateAge() {
    let z = document.forms['nameForm']['age'].value;
    let x = document.forms['nameForm']['fname'].value;
    let y = document.forms['nameForm']['lname'].value;
    const funkyMonkey = documnet.getElementById('response')

    if (isValid === false) {
        var fname = document.createElement("h3")
        var lname = document.createElement("h3")
        var age = document.createElement("h3")

        var tag1 = fname.appendChild('zezee');
        var tag2 = lname.appendChild(y);
        var tag3 = age.appendChild(z);

        funkyMonkey.appendChild(tag1);
        funkyMonkey.appendChild(tag2);
        funkyMonkey.appendChild(tag3);
    } else {
        return
    }
}

nameform.onsubmit = validate;
nameform.onsubmit = calculateAge;