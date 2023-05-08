
 class FormularioRegistro {

    constructor(nombreIngresado, apellidoIngresado, emailIngresado, passwordIngresado) {

        this.nombreIngresado = nombreIngresado
        this.apellidoIngresado = apellidoIngresado
        this.emailIngresado = emailIngresado
        this.passwordIngresado = passwordIngresado

    }

}




const formularioRegistro = document.querySelector("#formulario-registro")

formularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault()
    const nombreIngresado = document.querySelector("#nombre-ingresado").value
    const apellidoIngresado = document.querySelector("#apellido-ingresado").value
    const emailIngresado = document.querySelector("#email-ingresado").value
    const passwordIngresado = document.querySelector("#password-ingresado").value
    console.log(nombreIngresado);
    
    const nombreRecuperado = JSON.parse(localStorage.getItem('usuarios')) || []
    console.log(nombreRecuperado);
    const existeNombre=nombreRecuperado.find(el => el.nombreIngresado === nombreIngresado)
   console.log(existeNombre);

    
    if(existeNombre){
     
     const dato =document.getElementById("registro")
     const p = document.createElement("p") 
     p.innerHTML="El usuario ya existe"
     dato.appendChild(p)
    }else{
        const datoDos=document.getElementById("registro")
        datoDos.innerHTML="Registro exitoso"
        window.location.href='ingreso.html'
    }

    nombreRecuperado.push(new FormularioRegistro(nombreIngresado, apellidoIngresado, emailIngresado, passwordIngresado))
    localStorage.setItem('usuarios', JSON.stringify(nombreRecuperado))

    /* console.log(guardadosLS); */
    formularioRegistro.reset()
        
})




    



    



