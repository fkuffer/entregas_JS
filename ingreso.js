const regisradosJSON = document.querySelector("#nombre-ingresado")
let nombreRecuperado = JSON.parse(regisradosJSON)
console.log(nombreRecuperado);
let usuario=document.querySelector("#nombre")
let pass=document.querySelector("#password")

let formularioIngreso = document.querySelector("#formulario")
formularioIngreso.addEventListener("submit", function (e) {
    e.preventDefault()
    if ((nombreRecuperado.nombreIngresado == usuario) && (nombreRecuperado.passwordIngresado == pass)){
        alert("exito")
        document.createElement("p")
        let acceso=document.getElementById("registro-ok")
        acceso.innerHTML="Ingreso exitoso"
        document.appendChild(acceso)
    }else{
        document.createElement("p")
        let acceso=document.getElementById("registro-ok")
        acceso.innerHTML="Error en datos ingresados"
    
    }
         
    
})