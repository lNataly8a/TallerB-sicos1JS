//Validar Contraseña
const prompt = require("prompt-sync")();
nombre = prompt("Ingrese su nombre: ");
contrasena = prompt("Ingrese su contraseña: ");
function validarContraseña(contrasena){
    caracteres = contrasena.length >= 8;
    numeros = /\d/.test(contrasena);
    mayusculas = /[A-Z]/.test(contrasena); 
    if(caracteres){
        if(numeros){
            if(mayusculas){
        return true;
      }
    }
  }
     return false;
}
console.log(validarContraseña(contrasena));