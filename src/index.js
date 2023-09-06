let numeroA;
let numeroB
let total;

document.getElementById("calc").onclick = function(){
    numeroA = Number(document.getElementById("costo").value);
    numeroB = Number(document.getElementById("propina").value);
    total = numeroA+((numeroA * numeroB)/100);
    document.getElementById("precio").innerHTML = `Precio: ${numeroA}`
    document.getElementById("total").innerHTML = `Precio total: ${total}`
}