let ingresarNombre = prompt("Ingrese su nombre, por favor.")
let combo = prompt("Hola," + ingresarNombre +"." + "\nQue combo de shampoo solido quiere: \n -alfa \n -beta \n -gamma \n -delta");

let precio = 0;
var envio = 400;
var precioFinal = 0;

if (combo == "alfa") {
    precio = 1450;
} else if(combo == "beta" || combo == "Beta"){
    precio = 1450;
} else if(combo == "gamma" || combo == "Gamma"){
    precio = 1450;
} else if(combo == "delta" || combo == "Delta"){
    precio = 1450;
} else{
    console.log("no tenemos ese combo");
    precio = 0
}

precioFinal = envio + precio

alert("El combo cuesta " + precioFinal + " en pesos." + "\n Incluye " + envio + " de envio." );


let ingreseHorario = prompt("Ingrese horario que desea recibir el envio: \n -mañana  \n -tarde");
var mañana = ["Lunes"];
var tarde = ["Jueves"];
while (ingreseHorario != "ESC") {
    switch (ingreseHorario) {
    case "mañana":
        alert(ingresarNombre + " su pedido estara llegando el " + mañana);
        break;
    case "tarde":
        alert(ingresarNombre + " su pedido estara llegando el " + tarde);
        break;
    default:
        alert(ingresarNombre + ", por favor indique un horario");
    }
    ingreseHorario = prompt("Consulte otro horario: " + horarioMañana + horarioTarde);
}