document.getElementById("start").addEventListener("click", () => Calculate());

function Calculate(){
    var input = document.getElementById("calculation").value;
    let textSplit = [];
    let firstHalf = 0;
    let secondHalf = 1;
    switch(true){
        case input.includes("+"):
             textSplit = input.split("+");
             firstHalf = textSplit[0];
             secondHalf = textSplit[1];
            document.getElementById("result").textContent= `${parseInt(firstHalf) + parseInt(secondHalf)}`;
            break;
        case input.includes("-"):
             textSplit = input.split("-");
             firstHalf = textSplit[0];
             secondHalf = textSplit[1];
            document.getElementById("result").textContent= `${parseInt(firstHalf) - parseInt(secondHalf)}`;
            break;
        case input.includes("/"):
             textSplit = input.split("/");
             firstHalf = textSplit[0];
             secondHalf = textSplit[1];
            document.getElementById("result").textContent= `${parseInt(firstHalf) / parseInt(secondHalf)}`;
            break;
        case input.includes("*"):
             textSplit = input.split("*");
             firstHalf = textSplit[0];
             secondHalf = textSplit[1];
            document.getElementById("result").textContent= `${parseInt(firstHalf) * parseInt(secondHalf)}`;
            break;
        case false: 
            console.log("Opperation not supported")
            break;
    }
    
}