// Write an evaluate() function (do not use the eval() function)

// Write a function(s) for what should happen when you click on any digit

// Write a function(s) for what should happen when you click on any operator

//button buttons
var buttons = document.querySelectorAll('.btn');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', checkInner);
}

function checkInner() {
    var input = this.innerText;
    return input;
}

//readout display

var display = document.querySelector('#readout');






add(num1, num2) {
    return num1 + num2;
}