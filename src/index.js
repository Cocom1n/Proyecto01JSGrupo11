document.getElementById("rangePropina").onchange = function()
{
    let propina = Number(document.getElementById("rangePropina").value);
    document.getElementById("valorPropina").innerHTML = `${propina}%`;
}

document.getElementById("calc").onclick = function()
{
    let numeroA = Number(document.getElementById("costo").value);
    let numeroB = Number(document.getElementById("rangePropina").value);

    let calculo = numeroB/100*numeroA;
    let total = numeroA + calculo;

    console.log("la propina es: "+ calculo); //propina
    console.log("total a pagar: "+ total); //precio total, incluye la propina + costo

    document.getElementById("precioPropina").innerHTML = `La propina es: $ ${calculo}`;
    document.getElementById("precioTotal").innerHTML = `Precio total: $ ${total}`;

}
