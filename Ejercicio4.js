//Promedio notas
const prompt = require("prompt-sync")();
function calcularPromedio(notas) {
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }

  let promedio = suma / notas.length;
  return promedio.toFixed(2);
}

const input = prompt("Por favor ingresa las notas separadas por comas: ");
const notasTexto = input.split(",");
const notas = notasTexto.map(Number);

const promedio = calcularPromedio(notas);

console.log(`El promedio de sus notas es: ${promedio}`);
