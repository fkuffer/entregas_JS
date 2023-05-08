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

fetch('./datos/datos.json')
.then( (resp) => resp.json() )
.then( (data) => {

    const opcion = document.querySelector('#modelo')
    data.forEach((post) => {
        let crear = document.createElement("option")
        crear.innerHTML = `
            <h4 value=>${post.Modelo}</h4>
            `
        opcion.appendChild(crear)
    console.log(data);
    
    })
})

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

/* let select = document.createElement("select")
let modeloElegido = document.querySelector("#modelo")
for (const autos of modeloAutos) {
    select.innerHTML += `<option class="form-select p-5"selected></option>
    <option id="gama" class="modeloNuevo" value=>${autos.modelo}</option> `
    modeloElegido.appendChild(select)
 */    /* modeloElegido.onchange = () => { console.log(select.value) } */

/* } */



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
    console.log(totalCotizacionAutoIva);
    Swal.fire({
        title: 'Procesando datos!',
        text: 'En unos instantes vera su cotizacion!',
        icon: 'success',
        confirmButtonText: 'Aceptar'
     })

    
    /* Mostrar cotizacion en DOM********* */

    setTimeout(()=> {
    let capturaTarjeta = document.querySelector("#tarjeta")
    let tarjeta = document.createElement("div")
    tarjeta.innerHTML =
        `
                <div class="card-body">
                  <h5 class="card-title">Gracias por cotizar con nosotros!</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">Sr. ${nombre.value}  Su cotizacion es de:</h6>
                  <p class="card-text">Costo sin IVA $ :  ${totalCotizacionAuto}</p>
                  <p class="card-text">Costo con IVA $ :  ${totalCotizacionAutoIva}</p>
                  <a href="#contactenosTexto" class="card-link">Contactenos</a>
                  <p class="card-text">Agregue nuestras ofertas contra granizo y contra todo riesgo</p>
                  <h2>¡Gracias por su visita!</h2>
                </div> `
                  
    capturaTarjeta.appendChild(tarjeta)
    }, 4000)
    
   })

/* Evento de ofertas */

/* let ofertas = document.querySelector("#ofertas")
ofertas = document.addEventListener("click", function (e) {
    e.preventDefault()
    mostrarOfertas()
    
})

function mostrarOfertas() {
    
    const ingresoOfertas = document.querySelector("#muestra-ofertas")
    ingresoOfertas.innerHTML=

    `
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
    
    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>

    <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div> 
    `
    
    ingresoOfertas.appendChild(muestra-ofertas)
}
     */
    
    

/* Seleccion por modelo */

const modeloAltaGama=()=> {

    let vehiculoGama = document.querySelector("#gama")
    
        console.log(vehiculoGama.value);
    
        totalModelo=0;
    
        if(vehiculoGama.value === "Altagama"){
    
            totalModelo=modeloAltaG()
    
        }else{vehiculoGama.value === "Noaltagama"
    
            totalModelo=modeloNormal()
    
        }
    
        return (totalModelo)
    }

    function modeloAltaG() {

        let modeloAG = factorModeloGama*parseInt(valorComercial.value)
    
        return (modeloAG)
    
    }
    
     
    
    function modeloNormal() {
    
        let modeloNor = factorModelo*parseInt(valorComercial.value)
    
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
    let cotizarKm = factorKm * parseInt(valorComercial.value)
    return (cotizarKm);
}
function cotkmAlto() {
    let cotizarKmAlto = factorKmAlto * parseInt(valorComercial.value)
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
    let cotizar = factorGuardaGarage * parseInt(valorComercial.value)
    return (cotizar);

}
function cotguardaC() {
    let cotizarDos = factorGuardaCalle * parseInt(valorComercial.value)
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
    let cotizarResi = factorResidenciaCaba * parseInt(valorComercial.value)
    return (cotizarResi);


}
function cotResiPBA() {
    let cotizarResiDos = factorResidenciaPBA * parseInt(valorComercial.value)
    return (cotizarResiDos);
}

