fetch('./datos/datos.json')
.then( (resp) => resp.json() )
.then( (data) => {
    
    fabricacionAnio(data)
    valorVehiculo(data)

    const opcion = document.querySelector('#modelo')
    data.forEach((post) => {
        let crear = document.createElement("option")
        crear.innerHTML += `
        <h4 value="">${post.Modelo}</h4>
        `
        opcion.appendChild(crear)
        
        
    })

    
    

})



const fabricacionAnio = (fabAnio) => {

    const fabricacionAnio=document.querySelector("#fabricacion")
    fabAnio.forEach(el => {
        
        let fab = document.createElement("option")
        fab.innerHTML += `
            <h4 value="">${el.Año}</h4>
            `
        fabricacionAnio.appendChild(fab) 
    });
}


let precioAuto=document.querySelector("#valor")
const valorVehiculo =(precioApi)=>{
    precioApi.forEach(el => {
        
    let val = document.createElement("option")
    
    val.innerHTML += `
        <h4 value="">${el.Precio}</h4>
        `
    precioAuto.appendChild(val) 

    /* valorAuto(data) */
    })
    return (precioAuto)

}

console.log(precioAuto);
/* const precioLuego = document.querySelectorAll("#valor")
console.log(precioLuego.value); */

