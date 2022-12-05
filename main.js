const productos = [
  { nombre: "nueces", precio: 500 },
  { nombre: "almendras", precio: 100 },
  { nombre: "pasasDeUva", precio: 200 },
  { nombre: "mixfrutal", precio: 400 },
  { nombre: "mani", precio: 200 },
];

let carrito = [];

let seleccion = prompt("hola desea comprar algun productos si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingrese si o no");
  seleccion = prompt("hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuacion nuestra lista de productos");
  let todosLosProductos = productos.map(
    (productos) => productos.nombre + " " + productos.precio + "$"
  );
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("gracias por venir, hasta pronto!!");
}

while (seleccion != "no") {
  let producto = prompt("agregar un producto a tu carrito");
  let precio = 0;

  if (
    productos == "nueces" ||
    productos == "almendras" ||
    productos == "pasasDeUva" ||
    productos == "mixFrutal" ||
    productos == "mani"
  ) {
    switch (productos) {
      case "nueces":
        precios = 500;
        break;
      case "almendras":
        precios = 100;
        break;
      case "pasasDeUva":
        precios = 200;
        break;
      case "mixFrutal":
        precios = 400;
        break;
      case "mani":
        precios = 200;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("cuantas unidades va a llevar"));

    carrito.push({ productos, unidades });
    console.log(carrito);
  }

  seleccion = prompt("desea seguir comprando?");

  while (seleccion === "no") {
    alert("gracias por la compra!!");
  }
}
