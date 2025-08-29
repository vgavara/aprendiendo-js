const precioBase = 10;

let edad = 20;
let esEstudiante = true;

let precio;

if (edad < 12) {
  precio = precioBase - 4;
} else if (edad >= 65) {
  precio = precioBase - 3;
} else if (esEstudiante) {
  precio = precioBase - 2;
} else {
  precio = precioBase;
}

console.log("Edad:", edad);
console.log("¿Estudiante?", esEstudiante);
console.log("Precio final:", precio);

switch (true) {
  case edad < 12:
    console.log("Grupo: Niño");
    break;
  case edad >= 65:
    console.log("Grupo: Adulto mayor");
    break;
  case esEstudiante:
    console.log("Grupo: Estudiante");
    break;
  default:
    console.log("Grupo: Adulto");
}
