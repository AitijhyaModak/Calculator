let number1 = "";
let number2 = "";
let operator = "";
let operator_pressed = false;


//handling number click

let number_buttons = document.querySelectorAll(".number");
for (let number_button of number_buttons)
    number_button.addEventListener("click",onNumberClick);

function onNumberClick(event)
{
    if (operator_pressed === false)
        number1 = number1 + event.srcElement.innerText;
    else 
        number2 = number2 + event.srcElement.innerText;

    showSubtext();
}








//showing sub text
function showSubtext()
{
    let subtext = number1 + operator + number2;
    document.querySelector("#subtext").innerText = subtext;
}