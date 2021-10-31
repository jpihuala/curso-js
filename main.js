// let ingresarNombre = prompt("Ingrese su nombre, por favor.")
// let combo = prompt("Hola," + ingresarNombre +"." + "\nQue combo de shampoo solido quiere: \n -Alfa \n -Beta \n -Gamma \n -Delta");

// let precio = 0;
// var envio = 400;
// var precioFinal = 0;
// let iteracion = "si";
// let ingreseHorario;
// let mañana;
// let tarde;

// if (combo == "alfa" || combo == "Alfa") {
//     precio = 1450;
// } else if(combo == "beta" || combo == "Beta"){
//     precio = 1450;
// } else if(combo == "gamma" || combo == "Gamma"){
//     precio = 1450;
// } else if(combo == "delta" || combo == "Delta"){
//     precio = 1450;
// } else{
//     console.log("no tenemos ese combo");
//     precio = 0
// }

// precioFinal = envio + precio

// alert("El combo cuesta " + precioFinal + " en pesos." + "\n Incluye " + envio + " de envio." );



// while (iteracion == "si"){
// ingreseHorario = prompt("Ingrese horario que desea recibir el envio: \n -mañana  \n -tarde");
// mañana = ["Lunes"];
// tarde = ["Jueves"];

// switch (ingreseHorario) {
//     case "mañana":
//         alert(ingresarNombre + " su pedido estara llegando el " + mañana);
//         break;
//     case "tarde":
//         alert(ingresarNombre + " su pedido estara llegando el " + tarde);
//         break;
//     default:
//         alert(ingresarNombre + ", por favor indique un horario");
//     }
//     iteracion = prompt("Desea realizar otra operacion? (si/no)");
// }


const pedidoChaupoo = () => {
    const combo = Number(prompt(`Hola, realiza tu pedido.
    Que desae llevar?

    1- Combo Alfa
    2- Combo Beta
    3- Combo Gamma
    4- Combo Delta`));

    armadoPedido(combo);
}

function armadoPedido(comb){
    let mensaje = " ";
    let precio = 0;

    switch (comb) {
        case 1:
            mensaje = "Tu combo Alfa, se esta preparando "
            precio = 1450
            break;
        case 2:
            mensaje = "Tu combo Beta, se esta preparando"
            precio = 1450
            break;
        case 3:
            mensaje = "Tu combo Gamma, se esta preparando"
            precio = 1450
            break;
        case 4:
            mensaje = "Tu combo Delta, se esta preparando"
            precio = 1450
            break;
            
        default:
            break;
    }
    alert(mensaje)




}