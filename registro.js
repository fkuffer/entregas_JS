
class FormularioRegistro {

    constructor(nombreIngresado, apellidoIngresado, emailIngresado, passwordIngresado) {

        this.nombreIngresado = nombreIngresado
        this.apellidoIngresado = apellidoIngresado
        this.emailIngresado = emailIngresado
        this.passwordIngresado = passwordIngresado

    }

}



let formularioRegistro = document.querySelector("#formulario-registro")
const registrado=[]

formularioRegistro.addEventListener("submit", function (e) {
    e.preventDefault()
    let nombreIngresado = document.querySelector("#nombre-ingresado")
    let apellidoIngresado = document.querySelector("#apellido-ingresado")
    let emailIngresado = document.querySelector("#email-ingresado")
    let passwordIngresado = document.querySelector("#password-ingresado")
    
    registrado.push(new FormularioRegistro(nombreIngresado.value, apellidoIngresado.value, emailIngresado.value, passwordIngresado.value)) 
    console.log(registrado);
    let regisradosJSON=JSON.stringify(registrado)
    localStorage.setItem('usuarios', regisradosJSON)
    formularioRegistro.reset()
    
})

/* Validacion ingreso */



/* Recuperacion LS */


    



    



