//Cambio moneda
const prompt = require("prompt-sync")();
function convertirMoneda(monto, monedaDestino) {
  const tasaUSD = 0.00026; // 1 COP = 0.00026 USD (aprox)
  const tasaEUR = 0.00024; // 1 COP = 0.00024 EUR (aprox)
  if(monedaDestino === "USD"){
    return monto * tasaUSD;
  }else if(monedaDestino === "EUR"){
    return monto * tasaEUR;
  }else{
    return null;
  }
}

const montoCOP = Number(prompt("Ingrese el monto en pesos (COP), sin puntos ni comas: "));
const moneda = prompt("¿A qué moneda desea convertir? (USD o EUR): ").toUpperCase();
const resultado = convertirMoneda(montoCOP, moneda);

if(resultado !== null){
  console.log(`${montoCOP} COP equivalen a ${resultado.toFixed(2)} ${moneda}`);
}else{
  console.log("Moneda no válida. Solo se admite USD o EUR.");
}
