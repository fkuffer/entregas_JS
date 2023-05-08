 

const formularioIngreso = document.querySelector("#formulario")
formularioIngreso.addEventListener("submit", function (e) {
    let pass=document.querySelector("#password").value
    let usuario=document.querySelector("#nombre").value

    
    const nombreRecuperado = JSON.parse(localStorage.getItem('usuarios')) || []
    console.log(nombreRecuperado);


    const validacionUsuario=nombreRecuperado.find(el => el.nombreIngresado === usuario)
    const validacionPassword=nombreRecuperado.find(el => el.passwordIngresado === pass)
    
    
        if(validacionUsuario && validacionPassword){
            window.location.href='index.html'
            return alert("ingreso exitoso")
        }else{
            alert("usuario incorrecto")
        }

    

    
    
         
    
})