let topping = prompt("Que topping queres");

let precio = 0.00;
var helado = 1.90;
var precioFinal = 0.00;

if (topping == "oreo") {
    precio = 1;    
} else if(topping == "kitkat"){
    precio = 1.5;
} else if(topping == "brownie"){
    precio = 0.75;
} else if(topping == "lacasitos"){
    precio = 0.95;
} else{
    console.log("no tenemos ese topping");
    precio = 0
}

precioFinal = helado + precio

console.log("el helado cuesta " + precioFinal + " en pesos.");