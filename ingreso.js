 

const formularioIngreso = document.querySelector("#formulario")
formularioIngreso.addEventListener("submit", function (e) {
    let pass=document.querySelector("#password").value
    let usuario=document.querySelector("#nombre").value

    
    const nombreRecuperado = JSON.parse(localStorage.getItem('usuarios')) || []
    console.log(nombreRecuperado);


    const validacionUsuario=nombreRecuperado.find(el => el.nombreIngresado === usuario)
    const validacionPassword=nombreRecuperado.find(el => el.passwordIngresado === pass)
    
    
        if(validacionUsuario && validacionPassword){
            const ingreso=document.querySelector("#registro-ok")
            ingreso.innerHTML="Ingreso exitoso"
            window.open('http://127.0.0.1:5503/index.html')
            
                
        }else{
            const ingresoMal=document.querySelector("#registro-no-ok")
            ingresoMal.innerHTML="Usuario incorrecto"
        }
        

    

})