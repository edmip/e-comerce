

/*abrir http (metodo, url)

CRUD    - Metodos

create = POST
read   = GET
update = PUT/PATCH
delete = DELETE
*/
const formularioLogin = document.querySelector('.loguin-form')
const btnEntrar = document.querySelector('#btn-Login');
const inputCorreo = document.querySelector('#correo');
const inputClave = document.querySelector('#clave');
let credenciales= false;

function llamado(dato1, dato2){
    const http = new XMLHttpRequest();
    http.open("GET", "http://localhost:3000/perfil");
    http.send();
    http.onload = ()=>{
        
        const data = JSON.parse(http.response);

        data.forEach((element) => {
            

            if((dato1 == element.correo) && (dato2 == element.password)){
                
                console.log("entre en el if");
                credenciales= true;
                console.log(credenciales);
                location.href ="../pantallas/admin.html";
                return;
            }
        });
        
        if(credenciales == false) alert("usuario o contraseña incorrecta");
    }
    credenciales= false;
    return;
}


formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    llamado(inputCorreo.value, inputClave.value);
})





