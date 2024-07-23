/* Ingreso de nombre de usuario y saludo */

let nombre = prompt("Por favor ingrese su nombre");

const saludar = nombreUsuario =>
  {alert("Hola " + nombreUsuario + ", vamos a cotizar tu presupuesto");};

saludar(nombre);
console.log({nombre});

/* Ingreso de seleccion de tipo de producto */
const productos = [
  {
    id: 1,
    nombre:"silla",
    costoManoDeObra:25000,
    costoDisenio: 25000,
    costoMaquinaria: 10000,
  },
  {
    id: 2,
    nombre: "mesa - escritorio",
    costoManoDeObra: 25000,
    costoDisenio: 25000,
    costoMaquinaria: 15000,
  },
  {
    id: 3,
    nombre: "accesorio",
    subproductos:[
      {
        idAccesorio: 1,
        accesorio: "soporte",
        manoDeObra: 10000,
      },
      {
        idAccesorio: 2,
        accesorio: "llavero",
        manoDeObra: 5000,
      },
    ],
    costoDisenio: 10000,
    costoMaquinaria: 5000,
  },
  {
    id: 4,
    nombre: "perfil",
    costoManoDeObra: 15000,
    costoDisenio: 20000,
    costoMaquinaria: 20000,
  },
];
const materiales = [
  {
    id: 1,
    nombre: "madera",
    costoPorMetroCubico: 15000,
  },
  {
    id: 2,
    nombre: "plastico",
    costoPorMetroCubico: 20000,
  },
  {
    id: 3,
    nombre: "aluminio",
    costoPorMetroCubico: 10000,
  },
  {
    id: 4,
    nombre: "hormigon - concreto",
    costoPorMetroCubico: 25000,
  },
];

const estilos = [
  {
    id: 1,
    nombre: "A",
    costoEstilo: 10000,
  },
  {
    id: 2,
    nombre: "B",
    costoEstilo: 20000,
  },
  {
    id: 3,
    nombre: "C",
    costoEstilo: 30000,
  },
  {
    id: 4,
    nombre: "D",
    costoEstilo: 40000,
  },
  {
    id: 5,
    nombre: "E",
    costoEstilo: 50000,
  },
  {
    id: 6,
    nombre: "F",
    costoEstilo: 60000,
  },
];

const encontrarProducto = (producto) =>{
  return productos.find((elemento)=> {return elemento.nombre.toLowerCase().includes(producto);})
};

let productoSeleccionado = prompt("Seleccione el tipo de producto del que desea obtener presupuesto\n(Silla - Mesa - Escritorio - Accesorio - Perfil)");
let productoEncontrado = encontrarProducto(productoSeleccionado);
console.log({productoEncontrado});

const encontrarAccesorio = (accesorio, producto) => {
  return producto.subproductos.find((elemento)=> {return elemento.accesorio.toLowerCase().includes(accesorio)});
};

let accesorioEncontrado = 0;
let accesorioSeleccionado = null;

if(productoEncontrado.id === 3){
  accesorioSeleccionado = prompt("Por favor ingrese que tipo de accesorio desea cotizar\n(Soporte - Llavero - Otros)");
  accesorioEncontrado = encontrarAccesorio(accesorioSeleccionado, productoEncontrado);
  console.log({accesorioEncontrado});
}

/* Ingreso de materiales que quiere emplear en el producto. Se puede ingresar mas de uno*/

const encontrarMaterial = (material) => {
  return materiales.find((elemento)=> {return elemento.nombre.includes(material)});
};

let materialSeleccionado = null;
let materialEncontrado = null;
let contadorMateriales = 1;
let costoMaterial = 0;
let costoMaterialPromedio = 0;

do{
  let materialSeleccionado = prompt("Ingrese los materiales que desea emplear en su producto. Escriba 0 cuando haya terminado de ingresar\n(Madera - Plastico - Aluminio - Concreto - Hormigon)");
  if(materialSeleccionado === "0"){
    break;
  }
  materialSeleccionado = materialSeleccionado.toLowerCase();
  let materialEncontrado = encontrarMaterial(materialSeleccionado);
  console.log({materialEncontrado});
  costoMaterial += materialEncontrado.costoPorMetroCubico;
  costoMaterialPromedio = costoMaterial/contadorMateriales;
  contadorMateriales ++;
}
while(materialSeleccionado !== "0")

console.log({costoMaterialPromedio});

/* Ingreso de dimensiones del producto en centimetros*/

alert("A continuación te pediremos las dimensiones de tu producto personalizado");
let alto = Number(prompt("Ingrese la altura del producto(en cm)"));
console.log({alto});
let ancho = Number(prompt("Ingrese el ancho del producto(en cm)"));
console.log({ancho});
let largo = Number(prompt("Ingrese el largo del producto(en cm)"));
console.log({largo});

const calculoVolumen = (alto, ancho, largo) =>{
  let volumen = (alto/100)*(ancho/100)*(largo/100);
  return volumen;
};

let volumen = calculoVolumen(alto,ancho,largo);

/*Seleccion del estilo del producto para determinar el costo de desarrollo. Mas adelante habra opciones para cada tipo de producto*/
const encontrarEstilo = (estilo) => {
  return estilos.find((elemento) => {return elemento.nombre === estilo});
};

let estiloSeleccionado = prompt("Por favor elija entre estas imagenes, el estilo del producto que desea.\n.A .B .C .D .E .F"); //supongamos que hay imagenes para elegir por cada tipo de producto
let estiloEncontrado = encontrarEstilo(estiloSeleccionado);
console.log({estiloEncontrado});

let cantidad = Number(prompt("Ingrese la cantidad del mismo producto que necesita"));
console.log({cantidad});

/*Tiene que haber varias funciones Calc_Cost_Desarrollo por cada producto, ya que varian los estilos y la complejidad segun el tipo, pero en este caso es de ejemplo ya que no hay estilos definidos*/

const calculoCostoDesarrollo =(productoEncontrado, estiloEncontrado, accesorioEncontrado, cantidad) => {
  let costoProducto = 0;
  if(productoEncontrado.id !== 3){ 
    costoProducto = productoEncontrado.costoDisenio + productoEncontrado.costoMaquinaria + (productoEncontrado.costoManoDeObra * cantidad);
  }
  else {
    costoProducto = (accesorioEncontrado.manoDeObra * cantidad) + productoEncontrado.costoDisenio + productoEncontrado.costoMaquinaria;
  }
  let costoEstilo = estiloEncontrado.costoEstilo;
  let costoTotalDesarrollo = costoProducto + costoEstilo;
  return costoTotalDesarrollo;
}
let costoTotalDesarrollo = calculoCostoDesarrollo(productoEncontrado, estiloEncontrado, accesorioEncontrado, cantidad);
console.log({costoTotalDesarrollo});

const calculoCotizacion = (volumen, costoTotalDesarrollo, costoMaterialPromedio, cantidad) => {
  let costoTotal = (volumen * costoMaterialPromedio * cantidad) + costoTotalDesarrollo;
  return costoTotal;
};

let costoTotalCotizacion = calculoCotizacion(volumen, costoTotalDesarrollo, costoMaterialPromedio, cantidad);

alert("El costo total de tu pedido sería aproximadamente de $"+costoTotalCotizacion+"\nRecuerde que estos valores pueden variar según la complejidad de su diseño y el nivel de detalles que necesita darle.\nSi quiere un presupuesto más detallado, no dude en contactarnos.\nMuchas gracias!")
console.log({costoTotalCotizacion});