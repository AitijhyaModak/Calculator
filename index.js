let number1 = "";
let number2 = "";
let operator = "";

//handling number button clicks
let numbers = document.querySelectorAll(".number");
for (let number of numbers)
    number.addEventListener("click", onNumberClick);


function onNumberClick(event) 
{
    let number_clicked = event.srcElement.innerText;
    if (number1 == 0)
        number1 = number_clicked;
    else number2 = number_clicked;
    showSubtext();
}

//handling symbol clicks
let symbols = document.querySelectorAll(".symbol");
for (let symbol of symbols)
    symbol.addEventListener("click",onSymbolClick);

function onSymbolClick(event)
{
    let operator_clicked = event.srcElement.innerText;
    operator = operator_clicked;
    console.log(operator);
    showSubtext();
}


//showing subtext at calculator
let subtext = "";
function showSubtext()
{   
    subtext = number1 + operator + number2;
    document.querySelector("#subtext").innerText = subtext;
}

