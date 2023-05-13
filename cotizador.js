
 window.addEventListener('DOMContentLoaded', async()=>{
    
    const data = await cargaDatos()
    mostrarDom(data);
    
})


 async function cargaDatos() {
    
    const response =await fetch('./datos/datos.json')
    return await response.json()
}
    
const opcion = document.querySelector("#precios")

function mostrarDom(lista) {
    console.log(lista);
    lista.forEach((post) => {
        let crear = document.createElement("option")
        crear.innerHTML += `<li value=""><br><h4>Modelo: </h4>${post.Modelo}<h4>Año: </h4>${post.Año}<h4>Precio: $</h4>${post.Precio}</li>`
        opcion.appendChild(crear)
    })
} 
cargaDatos()



   



    
    



/* const fabricacionAnio = (fabAnio) => {

    const fabricacionAnio=document.querySelector("#fabricacion")
    fabAnio.forEach(el => {
        
        let fab = document.createElement("option")
        fab.innerHTML += `
            <h4 value="">${el.Año}</h4>
            `
        fabricacionAnio.appendChild(fab) 
    });

}


 */



/* console.log(precioAuto); */
/* const precioLuego = document.querySelectorAll("#valor")
console.log(precioLuego.value); */

