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
let factorModelo = "";

const nombre=document.querySelector("#nombre")
const valorComercial=document.querySelector("#valor")
const fabricacion=document.querySelector("#fabricacion")
const kilometros=document.querySelector("#kilometros")
const guarderis=document.querySelector("#guarderis")
const residencia=document.querySelector("#residencia")

class Autos{
    constructor(marca, modelo,altaGama){
        this.marca=marca
        this.modelo=modelo
        this.altaGama=altaGama
        
    }
}

const modeloAutos = [];
/* console.log(modeloAutos); */

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


/* DOM Creacion de select */

let modeloElegido=document.querySelector("#modelo")
let select = document.createElement("select")
for (const autos of modeloAutos) {
    
    select.innerHTML+=`<option selected>Modelo</option>
    <option class="form-control col p-5" value=''>${autos.modelo}</option> `
    modeloElegido.appendChild(select)
    modeloElegido.onchange = () => {console.log(select.autos.modelo)};
}


let marcaElegida=document.querySelector("#marca")
let selectMarca = document.createElement("select")
for (const autos of modeloAutos) {
    
    selectMarca.innerHTML+=`<option selected>Marca</option>
    <option class="form-control col p-5" value=''>${autos.marca}</option> `
    marcaElegida.appendChild(selectMarca)
    
    marcaElegida.onchange = () => {console.log(autos.marca)};
}



    
    

console.log(marcaElegida.children[0].value);
console.log(modeloElegido.children[0].value);
/* Logica calculo presupuesto */

/* function ingreso(auto, marcaAuto) {
    return auto.find((el) => el.modelo === marcaAuto);
}
let marcaComparada = ingreso(modeloAutos, marca);
console.log(marcaComparada);
 */

/* 
let altaGama=new Autos(true, false)

if(marcaComparada.altaGama === true){
    console.log(factorModelo=(valorComercial*0.003));
    console.log("Alta gama");
}else{
    console.log(factorModelo=(valorComercial*0.002));
    console.log("No gama");

}

     */
    