let costo;
let propina;
let calculo;
let total;

document.getElementById("calc").onclick = function(){
    costo = Number(document.getElementById("costo").value);
    propina = document.getElementById("propina").value;
    calculo = costo/100 * propina;
    total = calculo+costo;

    console.log("la propina es: "+ calculo); //propina
    console.log("total a pagar: "+ total); //precio total, incluye la propina + costo

    document.getElementById("precioPropina").innerHTML = calculo;
    document.getElementById("precioTotal").innerHTML = total;
}

