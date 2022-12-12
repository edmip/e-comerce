///////////////////////////////////////--------CONSTANTES PARA VALIDACION------////////////////////////////////////////////
const expresiones = {
    nombre: /^(?=.*?[a-zA-Z]{3})(?!.*[0-9]).{3,}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^(?=.*[a-z)(?=.*[0-9)(?=.*[A-Z)])(?!.*[ !@#$%^&*_+=-]).{6,12}$/
}


///////////////////////////////////////--------VALIDACION DE LOGIN------////////////////////////////////////////////
const formLogin = document.querySelector('.loguin-form');
const inputs = formLogin.querySelectorAll('.loguin-form input');



const validarCampo = (e) =>{
    switch(e.target.id){
        case "correo":
            if(expresiones.correo.test(e.target.value)){
        
                document.getElementById('correo').classList.remove('input-padron-error');
                //console.log("email bien");
            }
            else{
                document.getElementById('correo').classList.add('input-padron-error');
                //document.getElementById('correo').setCustomValidity("Ejemplo: correo@dominio.com");
            }
        break;
        case "clave":
            if(expresiones.password.test(e.target.value)){
        
                document.getElementById('clave').classList.remove('input-padron-error');
                //console.log("clave bien");
            }
            else{
                document.getElementById('clave').classList.add('input-padron-error');
                //document.getElementById('clave').setCustomValidity("rango de 6 a 12 caracteres, no se permiten: !@#$%^&*_+=-");
            }
        break;

        
    }
}

inputs.forEach((input) =>{

    input.addEventListener('blur', validarCampo);
    input.addEventListener('keyup', validarCampo);
});





