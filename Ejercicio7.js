//Cajero automatico
const prompt = require("prompt-sync")();
function retirarDinero(saldo, monto) {
  if(monto <= saldo){
    let nuevoSaldo = saldo - monto;
    return `Retiro exitoso. Nuevo saldo: $${nuevoSaldo}`;
  }else{
    return "Fondos insuficientes.";
  }
}

const saldoUsuario = Number(prompt("Ingrese su saldo actual: "));
const montoRetiro = Number(prompt("Ingrese el monto a retirar: "));

const resultado = retirarDinero(saldoUsuario, montoRetiro);
console.log(resultado);
