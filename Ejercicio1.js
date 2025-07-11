//Calcular propinas
const prompt = require("prompt-sync")();
function propinas(total, porcentaje){
    propina = total * (porcentaje/100);
    totalPropina = total + propina;
    return totalPropina;
}

let entradaTotal = parseInt(prompt("Ingrese el total: "));
let entradaPorcentaje = parseInt(prompt("Ingrese el porcentaje de la propina: "));

totalPagar = propinas(entradaTotal, entradaPorcentaje);
console.log("El total a pagar es de:", totalPagar);