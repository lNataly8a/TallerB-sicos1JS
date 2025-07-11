//Inventario
const prompt = require("prompt-sync")();
function buscarProducto(nombre, inventario){
  for (let i = 0; i < inventario.length; i++){
    if (inventario[i].nombre === nombre){
      return inventario[i]; // Producto encontrado
      }
  }
  return null; // Si no se encuentra
}
const inventario = [
 {nombre: "Camisa", stock: true, precio: 20, id: 1},
 {nombre: "Zapatos", stock: true, precio: 50, id: 2 },
 {nombre: "Medias", stock: false, precio: 10, id: 3},
 {nombre: "Chaqueta", stock: true, precio: 60, id: 4},
 {nombre: "Pantalon", stock: false, precio: 40, id: 5},
 {nombre: "Bufanda", stock: true, precio: 15, id: 6}
]

const nombreProducto = prompt("Ingrese el nombre del producto que desea buscar: ");

const producto = buscarProducto(nombreProducto, inventario);

if (producto) {
  console.log("Producto encontrado:");
  console.log(`Nombre: ${producto.nombre}`);
  console.log(`Precio: $${producto.precio}`);
  console.log(`Disponible: ${producto.stock ? "Sí" : "No"}`);
} else {
  console.log("Producto no encontrado.");
}