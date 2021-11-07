class Producto {
    constructor(nombre, categoria, stock, cantidadComprada){
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = cantidadComprada;
    }

    controlStock(){
        if(this.cantidad > this.stock){
            alert(`No tenemos suficiente stock de este producto.`);
        }
        else if(this.cantidad < this.stock && this.cantidad > 0){
            alert(`La cantidad ingresada es ${this.cantidad} el stock actualizad es de: ${this.stock}.`);
        }
        else{
            alert(`Usted ingreso una cantidad negativa, eso es incorrecto.`)
        }
    }
}

let compraUsuario = Number(prompt(`Ingrese la cantidad a comprar`));
const objeto1 = new Producto ("fideos", "pasta", 50, compraUsuario);
objeto1.controlStock()