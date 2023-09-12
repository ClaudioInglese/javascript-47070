let precio
while (true){
    precio = prompt("Ingrese precio de costo")
    if (!isNaN(precio)) {        
        if (precio > 0) {
            console.log ("OK");
        }else{
            alert("Ingresó un precio incorrecto. Vuelva a intentar")
            console.log ("Ingresa un numero mayor a 0");
            continue;
        }
        break;
    }else{
        alert("Ingresó un precio incorrecto. Vuelva a intentar")
        console.log ("Ingresó un precio incorrecto");
        continue;
    }
}


function iva (precio){
    return (precio * 0.21)
}

let valorIva = iva (precio)
console.log("El precio del IVA es " + valorIva)


function precioConIva (precio){
    return (precio  * 1.21)
}

let ivaIncluido = precioConIva(precio)

console.log("El precio IVA incluido es " + ivaIncluido)
