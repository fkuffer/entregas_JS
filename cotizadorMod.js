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

/* Obtener datos JSON */

window.addEventListener('DOMContentLoaded', async () => {


    const data = await cargaDatos()
    mostrarDom(data);
})


async function cargaDatos() {

    const response = await fetch('./datos/datos.json')
    return await response.json()
}

const opcion = document.querySelector("#precios")

function mostrarDom(lista) {

    lista.forEach((post) => {
        let crear = document.createElement("option")
        crear.innerHTML += `<option value=""><br><h4>Modelo: </h4>${post.Modelo}  <h4>Año: </h4>${post.Año}  <h4>Precio: $</h4>${post.Precio}</option>`
        opcion.appendChild(crear)

    })
}


/* Variable factor calculo */

let factorAnio = 0.001;
let factorAnioNuevo = 0.002;
let factorGuardaGarage = 0.001;
let factorGuardaCalle = 0.002;
let factorResidenciaCaba = 0.001;
let factorResidenciaPBA = 0.002;
let factorKm = 0.002;
let factorKmAlto = 0.003;
let factorModeloGama = 0.002
let factorModelo = 0.0001


class Autos {
    constructor(marca, modelo, altaGama) {
        this.marca = marca
        this.modelo = modelo
        this.altaGama = altaGama

    }
}

const modeloAutos = [];
/* console.log(modeloAutos); */

modeloAutos.push(new Autos("VOLKSWAGEN", "BORA", "true"))
modeloAutos.push(new Autos("VOLKSWAGEN", "AMAROK", true))
modeloAutos.push(new Autos("VOLKSWAGEN", "FOX", "false"))
modeloAutos.push(new Autos("VOLKSWAGEN", "PASSAT", true))
modeloAutos.push(new Autos("VOLKSWAGEN", "TREND", false))

modeloAutos.push(new Autos("FIAT", "FIORINO", false))
modeloAutos.push(new Autos("FIAT", "500", true))
modeloAutos.push(new Autos("FIAT", "CRONOS", true))
modeloAutos.push(new Autos("FIAT", "PUNTO", false))
modeloAutos.push(new Autos("FIAT", "TREND", true))


modeloAutos.push(new Autos("CHEVROLET", "CRUZE", true))
modeloAutos.push(new Autos("CHEVROLET", "ASTRA", false))
modeloAutos.push(new Autos("CHEVROLET", "CAMARO", true))
modeloAutos.push(new Autos("CHEVROLET", "BLAZER", true))
modeloAutos.push(new Autos("CHEVROLET", "APACHE", false))


/*****************Impresion modelo y marca en DOM *************** */




/* Evento boton cotizar*********************** */
let botonCoti = document.querySelector("#btn-cotizar")
botonCoti.addEventListener("click", function (e) {
    let kilometrosCalculo = kilometrosHechos()
    console.log(kilometrosCalculo);
    let fabricacionCalculo = fabricacionAnio()
    console.log(fabricacionCalculo);
    let guarderiaCalculo = guardaAuto();
    console.log(guarderiaCalculo);
    let residenciaCalculo = residenciaAuto()
    console.log(residenciaCalculo);
    let modeloCalculado = modeloAltaGama();
    console.log(modeloCalculado);
    let totalCotizacionAuto = kilometrosCalculo + fabricacionCalculo + guarderiaCalculo + residenciaCalculo + modeloCalculado
    console.log(totalCotizacionAuto);
    let totalCotizacionAutoIva = totalCotizacionAuto * 1.21
    let descuentoHecho = totalCotizacionAutoIva + (totalCotizacionAutoIva * 0.02)
    let descuentoHechoDos = totalCotizacionAutoIva + (totalCotizacionAutoIva * 0.015)
    let descuentoHechoTres = totalCotizacionAutoIva - (totalCotizacionAutoIva * 0.05)
    let descuentoHechoCuatro = totalCotizacionAutoIva - (totalCotizacionAutoIva * 0.02)

    Swal.fire({
        title: 'Procesando datos!',
        text: 'En unos instantes vera su cotizacion!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })



    /* Mostrar cotizacion en DOM********* */

    setTimeout(() => {
        let capturaTarjeta = document.querySelector("#tarjeta")
        capturaTarjeta.innerHTML =
            `
                <div class="card-body">
                  <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Sr. ${nombre.value}  Su cotizacion es de:</h6>
                  <p class="card-text">Costo sin IVA $ :  ${totalCotizacionAuto}</p>
                  <p class="card-text">Costo con IVA $ :  ${totalCotizacionAutoIva}</p>
                  <a href="#contactenosTexto" class="card-link">Contactenos</a>
                  <p class="card-text">Agregue nuestras ofertas contra granizo y contra todo riesgo</p>
                  <h2>¡Gracias por su visita!</h2>
                  <h4>Si ya cotizaste aprovecha nuestras ofertas:</h4>
                    
                </div> `

    }, 2000)

    let descuentoUno = document.querySelector("#offUno")
    let descuentoOne = document.querySelector("#descuentoUno")
    descuentoUno.addEventListener("click", function (e) {
        e.preventDefault()
        descuentoOne.innerHTML =
            `
        <div class="card-body">
         <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
         <p class="card-text">Sr. ${nombre.value} su nueva cotizacion con franquicia por tormentas es de $ :  ${descuentoHecho}</p>
         <a href="#contactenosTexto" class="card-link">Contactenos</a>
         <h2>¡Gracias por su visita!</h2>
        </div> `

    })
    let descuentoDos = document.querySelector("#offDos")
    let descuentoTwo = document.querySelector("#descuentoDos")
    descuentoDos.addEventListener("click", function (e) {
        e.preventDefault()
        descuentoTwo.innerHTML =  `
        <div class="card-body">
          <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
          <p class="card-text">Sr. ${nombre.value} su nueva cotizacion anti-granizo es de $ :  ${descuentoHechoDos}</p>
          <a href="#contactenosTexto" class="card-link">Contactenos</a>
          <h2>¡Gracias por su visita!</h2>
        </div> `

          
    })

    let descuentoTres = document.querySelector("#offTres")
    let descuentoThree = document.querySelector("#descuentoTres")
    descuentoTres.addEventListener("click", function (e) {
        e.preventDefault()
        descuentoThree.innerHTML =  `
        <div class="card-body">
          <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
          <p class="card-text">Sr. ${nombre.value} cotizacion por auto-electrico es de $:  ${descuentoHechoTres}</p>
          <a href="#contactenosTexto" class="card-link">Contactenos</a>
          <h2>¡Gracias por su visita!</h2>
        </div> `
          
    })

    let descuentoCuatro = document.querySelector("#offCuatro")
    let descuentoFour = document.querySelector("#descuentoCuatro")
    descuentoCuatro.addEventListener("click", function (e) {
        e.preventDefault()
        descuentoFour.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
          <p class="card-text">Sr. ${nombre.value} su nueva cotizacion por inundaciones es de $ : ${descuentoHechoCuatro}</p>
          <a href="#contactenosTexto" class="card-link">Contactenos</a>
          <h2>¡Gracias por su visita!</h2>
        </div> `
          

    })

})


/* Tarjetas de ofertas */

const ingresoOfertas = document.querySelector("#muestra-ofertas")
ingresoOfertas.innerHTML =

    `
     <div class="container justify-content-center align-content-center grid gap-3 my-5">
                <div class="row grid gap-5">
                    <div class="card" style="width: 15rem;">
                        <img src="imagenes/th.jpg" class="card-img-top p-2" alt="..." >
                        <div class="card-body justify-content-center align-content-center">
                            <h5 class="card-title">Cobertura por tormentas</h5>
                            <p class="card-text my-5">Coberturas por tormentas solo por un 2% del total cotizado</p>
                            <button id="offUno" type="button" class="btn btn-primary" >Contratar</button>
                        </div>
                    </div>

                    <div class="card" style="width: 15rem;">
                        <img src="imagenes/granizo.jpg" class="img-fluid card-img-top p-2" style="height: 9rem;">
                        <div class="card-body">
                            <h5 class="card-title">Cobertura por granizo.</h5>
                            <p class="card-text my-5">Cobertura por bandalizaciones solo por el 1,5% del total cotizado.</p>
                            <button id="offDos" type="button" class="btn btn-primary" >Contratar</button>
                        </div>
                    </div>

                    <div class="card" style="width: 15rem;">
                        <img src="imagenes/electrico.jpg" class="card-img-top p-2"style="height: 9rem;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Descuento auto-electrico</h5>
                            <p class="card-text my-5">Tendra un descuento del 5% sobre el total de la cotizacion.</p>
                            <button type="button" class="btn btn-primary" id="offTres">Contratar</button>
                        </div>
                    </div>

                    <div class="card" style="width: 15rem;">
                        <img src="imagenes/inundacion.jpg" class="card-img-top p-2" style="height: 9rem;" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Cobertura por inundaciones.</h5>
                            <p class="card-text my-5">Cobertura por bandalizaciones solo por el 2% del total cotizado</p>
                            <button type="button" class="btn btn-primary" id="offCuatro">Contratar</button>
                        </div>
                    </div>
                </div>
    `

/* Mostrar modelo en DOM */

for (const autos of modeloAutos) {
    let modeloElegido = document.querySelector("#modelo")

    let select = document.createElement("option")
    select.innerHTML += `<option class="form-select p-5"></option>
        <option id="gama" class="modeloNuevo" value="${autos.modelo}">${autos.modelo}</option> `
    modeloElegido.appendChild(select)


}


/* Seleccion por modelo */

const modeloAltaGama = () => {

    let vehiculoGama = document.querySelector("#gama")

    console.log(vehiculoGama.value);

    totalModelo = 0;

    if (vehiculoGama.value === "Altagama") {

        totalModelo = modeloAltaG()

    } else {
        vehiculoGama.value === "Noaltagama"

        totalModelo = modeloNormal()

    }

    return (totalModelo)
}

function modeloAltaG() {

    let modeloAG = factorModeloGama * parseInt(valorComercial.value)

    return (modeloAG)

}



function modeloNormal() {

    let modeloNor = factorModelo * parseInt(valorComercial.value)


    return (modeloNor)

}


let valorComercial = document.querySelector("#valor")
const valorInput = () => { console.log(valorComercial.value) };




const nombre = document.querySelector("#nombre")
const nombreApellido = nombre.onchange = () => { console.log(nombre.value) };




/* *****Cotizar por Anio fabricacion*************** */
const fabricacionAnio = () => {

    const fabricacion = document.querySelector("#fabricacion")

    let totalDos = 0;

    if (parseInt(fabricacion.value) <= 2010) {
        totalDos = cotfab()


    } else {
        parseInt(fabricacion.value > 2010)
        totalDos = cotfabDos()
    }
    return totalDos
}

function cotfab() {
    let cotUno = factorAnio * parseInt(valorComercial.value)
    return (cotUno)

}
function cotfabDos() {
    let cotDos = factorAnioNuevo * parseInt(valorComercial.value)
    return (cotDos)

}

/* *****Cotizar por kilometros realizados*************** */



const kilometrosHechos = () => {
    const kilometros = document.querySelector("#kilometros")
    let total = 0;

    if (parseInt(kilometros.value) <= 500) {
        total = cotkm()

    } else {
        parseInt(fabricacion.value > 500)
        total = cotkmAlto()

    }
    return total
};


function cotkm() {
    let cotizarKm = factorKm * valorComercial.value
    return (cotizarKm);
}
function cotkmAlto() {
    let cotizarKmAlto = factorKmAlto * valorComercial.value
    return (cotizarKmAlto);
}


/* *****Cotizar por lugar donde guarda auto*************** */

const guardaAuto = () => {
    const guarderia = document.querySelector("#guarderia")
    totalTres = 0;
    if (guarderia.value === "garage") {
        totalTres = cotguardaG()
    } else {
        guarderia.value === "calle"
        totalTres = cotguardaC()
    };

    return totalTres
}

function cotguardaG() {
    let cotizar = factorGuardaGarage * valorComercial.value
    return (cotizar);

}
function cotguardaC() {
    let cotizarDos = factorGuardaCalle * valorComercial.value
    return (cotizarDos);
}

/* *****Cotizar por residencia titular*************** */

const residenciaAuto = () => {

    const residencia = document.querySelector("#residencia")
    totalCuatro = 0;
    if (residencia.value === "CABA") {
        totalCuatro = cotResiCABA()
    } else {
        totalCuatro = cotResiPBA()
    }
    return totalCuatro
}

function cotResiCABA() {
    let cotizarResi = factorResidenciaCaba * valorComercial.value
    return (cotizarResi);


}
function cotResiPBA() {
    let cotizarResiDos = factorResidenciaPBA * valorComercial.value
    return (cotizarResiDos);
}










