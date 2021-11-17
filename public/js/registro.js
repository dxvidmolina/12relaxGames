window.addEventListener("load",function(){
 window.addEventListener("submit",function(e){
    let errores = []
    let form = document.querySelector("form");
    let nombre = document.querySelector("#nombre");
    if(nombre.value.length < 2){
        errores.push("El campo necesita al menos tres caracteres")
        
    }else if (nombre.value == ""){
        errores.push("El campo está vacio")
        
    }
    let email = document.querySelector("#email");
    if(email.value== "" || email.value == null){
        errores.push("El campo necesita al menos siete caracteres")
        
    }else if (email.value.length <2){
        errores.push("El campo está vacio")
        
    }
    let password = document.querySelector("#password");
    if(password.value.length < 7){
        errores.push("El campo necesita al menos ocho caracteres")
        
    }else if (password.value == "" || password.value == null){
        errores.push("El campo está vacio")
        
    }
    let lastName = document.querySelector("#nickname");
    if(lastName.value.length < 5){
        errores.push("El campo necesita al menos seis caracteres")
        
    }else if (lastName.value == "" || lastName.value == null){
        errores.push("El campo está vacio")
        
    }
    let pais = document.querySelector("#pais");
    if(pais.value == "" || pais.value == null){
        errores.push("Debe seleccionar una opción")
    }

    let edad = document.querySelector("#edad");
    if(edad.value == "" || edad.value == null){
        errores.push("Este campo está vacio")
    }

    
    if (errores.length > 0){
        console.log(errores)
        e.preventDefault();
        let ulError = document.querySelector(".errores ul")
        errores.forEach(error => {
            ulError.innerHTML += '<li>' + error +  '</li>'
        })
    }
})




})