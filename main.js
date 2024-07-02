/* Ingreso de nombre de usuario y saludo */

let nombre = prompt("Por favor ingrese su nombre");

let saludar = name =>"Hola " + name + ", vamos a cotizar tu presupuesto";

alert(saludar(nombre));
console.log(nombre);

/* Ingreso de seleccion de tipo de producto */

let seleccion = prompt("Seleccione el tipo de producto del que desea obtener presupuesto\n1.Silla 2.Mesa-Escritorio 3.Accesorios 4.Perfileria");
console.log("La seleccion es " + seleccion);

let seleccionAcc;

if(seleccion == "3")//Si elijo opcion accesorio, elijo cual de las opciones disponibles.
{
  seleccionAcc = prompt("Por favor ingrese que tipo de accesorio desea cotizar\n1.Soporte 2.Llavero 3.Otros");
  console.log("La seleccion de accesorio es " + seleccionAcc);
}
else{
  seleccionAcc = 0;
}

/* Ingreso de dimensiones del producto en centimetros*/

alert("A continuación te pediremos las dimensiones de tu producto personalizado");
let lenght = Number(prompt("Ingrese el largo del producto(en cm)"));
console.log("La altura es " + lenght);
let width = Number(prompt("Ingrese el ancho del producto(en cm)"));
console.log("El ancho es " + width);
let height = Number(prompt("Ingrese la altura del producto(en cm)"));
console.log("La altura es " + height);


function Calc_Cost_Material(mate) { //Funcion que determina el costo por m3 del materual segun cual elija
  switch (mate) {
    case "1": //Madera xm3
      costMat = 15000;
      break;
    case "2": //Plastico xm3
      costMat = 20000;
      break;
    case "3": //Aluminio xm3
      costMat = 10000;
      break;
    case "4": //Hormigon xm3
      costMat = 25000;
      break;
    default:
      break;
  }
  return costMat;
}

/* Ingreso de materiales que quiere emplear en el producto. Se puede ingresar mas de uno*/


let select_mat = 1;
let costMaterial = 0;

while(select_mat >= 1)
{
  let material= prompt("Ingrese los materiales que desea emplear en su producto. Presione 5('Listo') cuando haya terminado de ingresar\n1.Madera 2.Plastico 3.Aluminio 4.Concreto-Hormigon 5.Listo");
  console.log("La seleccion de material es "+ material);
  if(material == "5")
  {
    break;
  }
  costMaterial+=Calc_Cost_Material(material); //Los costos de los materiales se van sumando segun la funcion hecha anteriormente y se guarda en la variable costMaterial
  select_mat ++;
}

CostoPromedioMat = (costMaterial/(select_mat-1)); //Esto lo realizo ya que necesito el costo promedio por m3. Sumo los costos y divido por la cantidad de materiales seleccionados. Le resto uno ya que una seleccion es la opcion 5 para salir del bucle. 

console.log("El costo del material aproximado por m3 es "+CostoPromedioMat);

/*Seleccion del estilo del producto para determinar el costo de desarrollo. Mas adelante habra opciones para cada tipo de producto*/


let estilo= prompt("Por favor elija entre estas imagenes, el estilo del producto que desea.\n.A .B .C .D .E .F"); //supongamos que hay imagenes para elegir por cada tipo de producto
console.log("La seleccion del estilo es " +estilo);

let cantidad= Number(prompt("Ingrese la cantidad del mismo producto que necesita"));
console.log("La cantidad es " + cantidad);

/*Tiene que haber varias funciones Calc_Cost_Desarrollo por cada producto, ya que varian los estilos y la complejidad segun el tipo, pero en este caso es de ejemplo ya que no hay estilos definidos*/

function Calc_Cost_Desarrollo(est, select, selectAcc, cant) {
  let cost_est;
  let disenio, manoDeObra;
  if (select == "1" || select == "2") {
    disenio = 25000;
    manoDeObra = 25000 * cant;
  }
  else if (select == "3") {
    selectAcc == "1" ? manoDeObra = 10000 * cant : manoDeObra = 5000 * cant;
    disenio = 10000;
  }
  else {
    disenio = 20000;
    manoDeObra = 15000 * cant;
  }

  switch (est) {
    case "A":
      cost_est = 10000;
      break;
    case "B":
      cost_est = 20000;
      break;
    case "C":
      cost_est = 30000;
      break;
    case "D":
      cost_est = 40000;
      break;
    case "E":
      cost_est = 50000;
      break;
    case "F":
      cost_est = 60000;
      break;
    default:
      alert("No es una opcion valida");
      break;
  }
  return cost_est + disenio + manoDeObra;
}

let cost_desarrollo = Calc_Cost_Desarrollo(estilo,seleccion,seleccionAcc,cantidad);
console.log("El costo del desarrollo del diseño aproximado es "+ cost_desarrollo);

/* Funcion de Cotizacion final del producto pedido */


let Calc_Cotizacion = (l, w, h, cant, costMat, cost_est) => {
  let vol = (l/100) * (w/100) * (h/100);
  console.log(vol); //en m3
  let Cost_Total = (costMat * vol* cant) + cost_est;
  return Cost_Total;
};

let CostoTotal = Calc_Cotizacion(lenght, width, height, cantidad, CostoPromedioMat, cost_desarrollo);

switch(seleccion)
{
  case "1": 
    CostoTotal+=10000; //adicional por silla y mantenimiento de maquinaria
    break;
  case "2": 
    CostoTotal+=15000; //adicional por mesa y mantenimiento de maquinaria
    break;
  case "3": 
    CostoTotal+=5000; //por uso de impresora 3D
    break;
  case "4":
    CostoTotal+=20000; //Uso de servicio de Hydro (extrusion de aluminio)
    break;
  default:
    alert("No se pudo calcular");
    break;
}

alert("El costo total de tu pedido sería aproximadamente de $"+CostoTotal+"\nRecuerde que estos valores pueden variar según la complejidad de su diseño y el nivel de detalles que necesita darle.\nSi quiere un presupuesto más detallado, no dude en contactarnos.\nMuchas gracias!")
console.log("El costo total es "+CostoTotal);