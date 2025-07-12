//Red social
const prompt = require("prompt-sync")();
function filtrarUsuarios(usuarios, edadMinima) {
  return usuarios.filter(usuario => usuario.edad >= edadMinima);
}

const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Nataly", edad: 13 },
  { nombre: "Javier", edad: 42 },
  { nombre: "Jhon", edad: 34 },
  { nombre: "Carlos", edad: 12 }
];

const edadMinima = parseInt(prompt("Ingrese la edad mínima: "));
const resultado = filtrarUsuarios(usuarios, edadMinima);

if (resultado.length > 0) {
  console.log(`Usuarios con ${edadMinima} años o más:`);
  resultado.forEach(usuario => {
    console.log(`- ${usuario.nombre}, ${usuario.edad} años`);
  });
} else {
  console.log("Ningún usuario cumple con la edad mínima.");
}