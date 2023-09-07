document.getElementById("calc").onclick = function()
{
    let costo = Number(document.getElementById("costo").value);
    let propinaPorcentaje = Number(document.getElementById("propina").value);

    let propina = propinaPorcentaje/100*costo;
    let total = costo + propina;

    console.log("Propina: "+ propina);
    console.log("Total: "+ total);
}