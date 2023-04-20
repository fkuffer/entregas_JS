/* Cotizador de seguros. criterios:
    Datos a ingresar por usuario:
    1-Marca
    2-Modelo
    3-Año fabricacion
    4-Nombre y apellido
    5-Particular o remis
    6-Lugar de residencia
    7-Donde guarda el vehiculo
    8-Cuantos Km hace por mes
    9-Precio comercial.

    Marcas a usar:
    1-VW
    2-Fiat
    3-Chevrolet

    Modelos:
    
    1-Bora, Amarok,Fox, passat, Trend
    2-Punto, 500, Argo, Ducato, Cronos
    3-Agile, astra, camaro, blazer, apache

    Criterios:

    -Preguntar si guarda en garage o calle
    -Preguntar si es remis (Salir de cotizacion) o si es particular continuar.
    -Preguntar lugar de residencia( CABA o PBA)
    -Preguntar KM estimados x mes.

    Se agregaron arrays para marcas y modelos.



*/

/* Validacion usuario */

let usuarioRegistrado = "Fede";
let usuario = false

 
for(i=3; i>=0 ; i--){ 
let usuarioIngresado = prompt("🔒 Ingresar usuario: ");
if(usuarioIngresado === usuarioRegistrado){
   alert(" 👍 Datos correctos");
   usuario = true;
   ejecutar();
    break;
}else{
    alert("👎 Error, datos incorrectos, le quedan"+ " " + i + " "+ "intentos para iniciar sesion");
    usuario == false;
}
}


function ejecutar(){

let nombre = prompt("✍️ Ingrese su nombre y apellido: ");

if (nombre != ""){
alert("🙋‍♂️Sr." + " " + nombre + " " + "Le damos la bienvenida a nuestro cotizador de seguros");
alert("✍️ Para cotizar su seguro debera seguir los siguientes pasos:");
}

/* let marca = prompt("🚗Ingresar la marca del vehiculo: \n1-VolksWagen: \n2-Fiat: \n3-Chevrolet:"); */
let precioVehiculo=parseInt(prompt("💵Ingrese el precio comercial de su vehiculo: "));
let factorModelo = "";

/* let marcaIngresada = prompt("Ingrese marca del vehiculo:") */



/* Clasificacion por marca/modelo */

class Autos{
    constructor(marca, modelo,altaGama){
        this.marca=marca
        this.modelo=modelo
        this.altaGama=altaGama
        
    }
}

const modeloAutos = [];

modeloAutos.push(new Autos ("VOLKSWAGEN","BORA",true))
modeloAutos.push(new Autos ("VOLKSWAGEN","AMAROK",true))
modeloAutos.push(new Autos ("VOLKSWAGEN","FOX", false))
modeloAutos.push(new Autos ("VOLKSWAGEN","PASSAT", true))
modeloAutos.push(new Autos ("VOLKSWAGEN","TREND",false))

modeloAutos.push(new Autos ("FIAT","FIORINO", false))
modeloAutos.push(new Autos ("FIAT","500", true))
modeloAutos.push(new Autos ("FIAT","CRONOS", true))
modeloAutos.push(new Autos ("FIAT","PUNTO",false))
modeloAutos.push(new Autos ("FIAT","TREND", true))

modeloAutos.push(new Autos ("CHEVROLET","CRUZE", true))
modeloAutos.push(new Autos ("CHEVROLET","ASTRA", false))

modeloAutos.push(new Autos ("CHEVROLET","CAMARO", true))
modeloAutos.push(new Autos ("CHEVROLET","BLAZER", true))
modeloAutos.push(new Autos ("CHEVROLET","APACHE", false))

let entrada = prompt(("✍️Ingresar el modelo:") + ("\n Volkswagen")+("\n1-Bora \n2-Amarok \n3-Fox \n4-Passat \n5-Trend") +  ("\n Fiat") + (" \n6-Fiorino \n7-Fiat 500 \n8-Cronos \n9-Punto") +  ("\n Chevrolet") + (" \n10-Cruze \n11-Astra \n12-Camaro \n13-Blazer \n14-Apache"), ("Ingresar modelo 'palabras'"));


function ingreso(auto, marcaIngresada) {
    return auto.find((el) => el.modelo === marcaIngresada.toUpperCase());
}
let marcaComparada = ingreso(modeloAutos, entrada);
console.log(marcaComparada);




if(marcaComparada.altaGama === true){
    console.log(factorModelo=(precioVehiculo*0.003));
    console.log("Alta gama");
}else{
    console.log(factorModelo=(precioVehiculo*0.002));
    console.log("No gama");

}


/* Clasificacion por año de fabricacion */

let anoFabricacion = prompt("🗓️Ingrese el año de fabricacion del vehiculo: ");

if (anoFabricacion >= 1990 && anoFabricacion <= 2000){
    console.log(factorFab = (precioVehiculo*0.001));
}

if (anoFabricacion >= 2001 && anoFabricacion <= 2010){
    console.log(factorFab = (precioVehiculo*0.002));
}

if (anoFabricacion >= 2011 && anoFabricacion <= 2021){
    console.log(factorFab = (precioVehiculo*0.003));
}

if (anoFabricacion >= 2023){
    console.log(factorFab = (precioVehiculo*0.004));
}


/* Clasificacion por KM recorrido por mes */

kilometrosMes=parseInt(prompt("🛣️Ingrese los kilometros que realiza por mes: "));

if (kilometrosMes >= 1000){
    console.log(factorkm = (precioVehiculo*0.002));
}else {
    console.log(factorkm = (precioVehiculo*0.001));
}

/* Clasificacion guarderia vehiculo */

guarderia = prompt("🌙Donde guarda el vehiculo cuando no lo utiliza: \n1-Garage \n2-Calle ");

if (guarderia == 1){
    console.log(factorGuarda=(precioVehiculo*0.002));
}else{
    console.log(factorGuarda=(precioVehiculo*0.004));
}

/* Lugar de residencia */

residencia=prompt("🏠Ingrese lugar de residencia: \n1-CABA  \n2-PBA");

if(residencia == 1){
    console.log(factorResidencia = (precioVehiculo*0.0005));
}else{
    console.log(factorResidencia = (precioVehiculo*0.0002));
}

function presupuesto (){

    let calculo = (factorResidencia+factorGuarda+factorkm+factorFab+factorModelo);
    return calculo;
}
 presupuesto();
let calculoIVA = presupuesto()*1.21

alert("💵 La cotizacion del seguro de su vehiculo es de $: " + " " + presupuesto() + " " + "No incuye Iva");
alert("💵 Su cotizacion final incluyendo IVA (21%) es de $: " + " " + calculoIVA);
}

