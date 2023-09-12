let precio
while (true){
    precio = prompt("Ingrese precio de costo")
    if (!isNaN(precio)) {        
        if (precio > 0) {
            console.log ("OK");
        }else{
            alert("Ingresó un precio incorrecto. Vuelva a intentar")            
            continue;
        }
        break;
    }else{
        alert("Ingresó un precio incorrecto. Vuelva a intentar")
        console.log ("Ingresó un precio incorrecto");
        continue;
    }
}

let porcentajeIva
while(true){
    porcentajeIva = prompt("Ingrese 1 para IVA 21% o 2 para IVA 10,5%");

    if (porcentajeIva === '1'){
        console.log ("Eligió valor 1");
        let valorIva21 = iva21 (precio);
        console.log("El precio del IVA es " + valorIva21);
        iva21();
        break;  
        

    }else if (porcentajeIva === '2'){
        console.log ("Eligió valor 2");
        let valorIva105 = iva105 (precio);
        console.log("El precio del IVA es " + valorIva105);
        iva105();   
        break;
        
    }else{
        alert("Opción no válida. Debe ingresar 1 o 2 para seleccionar el porcentaje de IVA.");
        console.log ("Opción no válida. Debe ingresar 1 o 2 para seleccionar el porcentaje de IVA.");
        
    }
}

function iva21 (precio){
    return (precio * 0.21)
}

function precioConIva21 (precio){
    return (precio  * 1.21)
}

function iva105 (precio){
    return (precio * 0.105)
}

function precioConIva105 (precio){
    return (precio  * 1.105)
}

let ivaIncluido 
if ( porcentajeIva == 1){
    ivaIncluido = precioConIva21(precio)
}else{
    ivaIncluido = precioConIva105(precio)
}

console.log("El precio IVA incluido es " + ivaIncluido);
