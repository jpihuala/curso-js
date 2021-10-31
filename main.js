let ingresarNombre = prompt("Ingrese su nombre, por favor.")
// let combo = prompt("Hola," + ingresarNombre +"." + "\nQue combo de shampoo solido quiere: \n -Alfa \n -Beta \n -Gamma \n -Delta");

// let precio = 0;
// var envio = 400;
// var precioFinal = 0;



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



function entregarPedido(mensaje, precio, envio){
    alert(`${mensaje}, el costo es $${precio}.-
    Incluye $${envio} de envio.`)
}

const multiplicar = (a, b, c) => {
    return (a * b) + c;
}

function armadoPedido(comb, cant){
    let mensaje = " ";
    let precio = 0;
    let envio = 400;

    switch (comb) {
        case 1:
            mensaje = "Tu combo Alfa, se esta preparando "
            precio = 1450
            precio = multiplicar (precio, cant, envio);
            break;
        case 2:
            mensaje = "Tu combo Beta, se esta preparando"
            precio = 1250
            precio = multiplicar (precio, cant, envio);
            break;
        case 3:
            mensaje = "Tu combo Gamma, se esta preparando"
            precio = 1550
            precio = multiplicar (precio, cant, envio);
            break;
        case 4:
            mensaje = "Tu combo Delta, se esta preparando"
            precio = 1900
            precio = multiplicar (precio, cant, envio);
            break;
                        
        default:
            mensaje = `Lo sentimos, no tenemos ese combo.`;
            break;
        }
        entregarPedido(mensaje, precio, envio)
        
}

const pedidoChaupoo = () => {
    const combo = Number(prompt(`Hola, realiza tu pedido.
    Que desea llevar?
    
    1- Combo Alfa
    2- Combo Beta
    3- Combo Gamma
    4- Combo Delta`));
    const cantidad = Number(prompt(`Ingrese la cantidad de combos`))
    
    armadoPedido(combo, cantidad);
}
pedidoChaupoo();


let iteracion = "si";
let ingreseHorario;
let mañana;
let tarde;

while (iteracion == "si"){
ingreseHorario = prompt("Ingrese horario que desea recibir el envio: \n -mañana  \n -tarde");
mañana = ["Lunes"];
tarde = ["Jueves"];
    
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
    iteracion = prompt("Desea realizar otra operacion? (si/no)");
}