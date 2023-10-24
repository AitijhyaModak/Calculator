let bigtext = "";
let smalltext = '';
let number1 = '';
let number2 = '';
let operator = '';
let operator_pressed = false;


let number_buttons = document.querySelectorAll(".number");
for (let number_button of number_buttons)
    number_button.addEventListener("click", onNumberPressed);

function onNumberPressed(event) {
    let numberpressed = event.srcElement.innerText;
    bigtext = bigtext + numberpressed;
    showbigtext();
}

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", onEqualClick)
function onEqualClick() {
    if (number2 == '' && operator == '') {
        smalltext = bigtext + "=";
        showsmalltext();
        showbigtext();
    }
    else {
        number2 = bigtext;
        bigtext = calculate();
        if (number1 == '' && number2 == '') return;
        smalltext = number1 + operator + number2 + "=";
        showsmalltext();
        showbigtext();
    }
}



let operator_buttons = document.querySelectorAll(".symbol");
for (let operator_button of operator_buttons)
    operator_button.addEventListener("click", onOperatorClick);

function onOperatorClick(event) {
    if (operator_pressed == false) {
        operator = event.srcElement.innerText;
        number1 = bigtext;
        smalltext = number1 + operator;
        bigtext = "";
        showbigtext();
        showsmalltext();
        operator_pressed = true;
    }
    else {
        number2 = bigtext;
        smalltext = calculate();
        if (number1 == '' && number2 == '') return;

        number1 = smalltext;
        number2 = "";
        operator_pressed = true;
        operator = event.srcElement.innerText;
        smalltext = smalltext + operator;
        showsmalltext();
        bigtext = '';
        showbigtext();
    }
}




let ac_button = document.querySelector("#AC");
ac_button.addEventListener("click",clear);




function clear() {
    bigtext = "";
    smalltext = '';
    number1 = '';
    number2 = '';
    operator = '';
    operator_pressed = false;
    document.querySelector("#maintext").innerText = "0";
    showsmalltext();
}





function calculate() {
    let num1 = Number(number1);
    let num2 = Number(number2);

    num1 = Math.round(num1 * 100) / 100;
    num2 = Math.round(num2 * 100) / 100;
    if (operator == '÷' && num2 == 0) {
        alert("You cannot divide by 0 !!");
        clear();
        return '';
    }

    if (operator == '+') return Math.round((num1 + num2)*100) / 100;
    else if (operator == '-') return  Math.round((num1 - num2)*100) / 100;
    else if (operator == 'x') return  Math.round((num1 * num2)*100) / 100;
    else return  Math.round((num1 / num2)*100) / 100;
}


let del_button = document.querySelector("#DEL");
del_button.addEventListener("click",del)
function del()
{
    if (bigtext != '') bigtext = bigtext.slice(0,bigtext.length - 1);
    showbigtext();
}



function showbigtext() {
    document.querySelector("#maintext").innerText = bigtext;
}
function showsmalltext() {
    document.querySelector("#subtext").innerText = smalltext;
}
