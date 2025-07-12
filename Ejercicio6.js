//Contador de palabras
function contarPalabras(texto) {
  const palabra = texto.trim().split(/\s+/);
  return palabra.length;
}
const texto = "Ejemplo de texto";
const cantidad = contarPalabras(texto);
console.log(`El texto tiene ${cantidad} palabras.`);