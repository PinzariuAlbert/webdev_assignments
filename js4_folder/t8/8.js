document.getElementById("start").addEventListener("click", () => calculate());

function calculate(){
    var first = parseInt(document.getElementById("num1").value);
    var second = parseInt(document.getElementById("num2").value);
    var selected = document.getElementById("operation").value;
    switch(selected){
        case "add" : 
            sum(first, second);
            break;
        case "sub" : 
            minus(first, second);
            break;
        case "multi":
            multi(first, second);
            break;
        case "div":
            division(first, second);
            break;
    }
}

function sum(first, second) {
  document.getElementById("result").textContent = first + second;
}
function minus(first, second) {
  document.getElementById("result").textContent = first - second;
}
function multi(first, second) {
  document.getElementById("result").textContent = first * second;
}
function division(first, second) {
  document.getElementById("result").textContent = first / second;
}