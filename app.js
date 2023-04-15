alert(
  "Hola, gracias por comprar una vez mas en nuestro local. A continuacion le pedimos que ingrese nombre del producto y precio. Si paga en efectivo tiene un descuento del 15% de lo contrario un recargo del 5%."
);

let entradaProducto = prompt(
  "Ingrese nombre del producto. Escriba 'salir' para finalizar"
);
let entradaPrecio;
let producto = "";
let precio = 0;

while (entradaProducto != "SALIR" && entradaProducto != "salir") {
  entradaPrecio = prompt("Ingrese precio del producto (sin el signo $)");

  while (isNaN(entradaPrecio)) {
    entradaPrecio = prompt(
      "Ingrese precio válido del producto (sin el signo $)"
    );
  }

  producto += entradaProducto + " ";
  precio += Number(entradaPrecio);
  entradaProducto = prompt(
    "Ingrese nombre del producto. Escriba 'salir' para finalizar"
  );
}

let total = precio;
const formaPago = prompt("Ingrese forma de pago (efectivo o tarjeta)");

if (formaPago != "EFECTIVO" && formaPago != "efectivo") {
  total *= 0.85; // Aplicar descuento del 15%
} else {
  total *= 1.05; // Aplicar recargo del 5%
}

alert(`Aca esta su ticket. Productos ${producto}, Total ${total}`);
