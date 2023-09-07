document.getElementById("calc").onclick = function()
{
    let costo = Number(document.getElementById("costo").value);
    let propinaPorcentaje = Number(document.getElementById("propina").value);

    let propina = propinaPorcentaje/100*costo;
    let total = costo + propina;

    console.log("la propina es: "+ calculo); //propina
    console.log("total a pagar: "+ total); //precio total, incluye la propina + costo

    document.getElementById("precioPropina").innerHTML = propina;
    document.getElementById("precioTotal").innerHTML = total;

}

