const expresionFooter = {
    nombre: /^(?=.*?[a-zA-Z]{3})(?!.*[0-9]).{3,}$/
}

///////////////////////////////////////--------VALIDACION DE FOOTER------////////////////////////////////////////////
const formularioFooter = document.querySelector('.pie-formulario-form')
const nombreFooter = formularioFooter.querySelector("#nombre");
const mensajeFooter = formularioFooter.querySelector("#mensaje");

nombreFooter.addEventListener("blur", (evento) =>{
    validarNombre(evento.target);
});
nombreFooter.addEventListener("keyup", (evento) =>{
    validarNombre(evento.target);
});

function validarNombre(input){
    if(expresionFooter.nombre.test(input.value)){
        
        input.classList.remove('input-padron-error');
    }
    else{
        input.classList.add('input-padron-error');
    }
}


formularioFooter.addEventListener('submit', (e)=>{
    e.preventDefault();
});
