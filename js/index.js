
const divStar = document.querySelector("[star-div]");
const divConsolas = document.querySelector("[consolas-div]");
const divDiversos = document.querySelector("[diversos-div]");

const crearNuevaLinea = (img, nombre, precio)=>{
  const div = document.createElement("div");
  div.classList.add('galeria-descripcion');

  const content = `
  
        <ul class="galeria-descripcion-articulo" id="objeto1Consola">
            <li id="objeto1cosola-img" class="galeria-descripcion-items img"><img src="${img}" alt="objeto" class="foto"></li>
            <li class="galeria-descripcion-items nombre"><p id="objeto1cosola-nombre">${nombre}</p></li>
            <li id="objeto1cosola-precio " class="galeria-descripcion-items precio"><p>${precio}</p></li>
            <li class="galeria-descripcion-items ver-producto"><a href="#">ver producto</a></li>
        </ul>`;

  
  div.innerHTML = content;
  return div;
};



/////////////////----------HACIENDO LA FUNCION DE LLAMADO--------------//////////////////////
const serverCall = async (seccion, div)=>{
  const response = await fetch(`http://localhost:3000/${seccion}`);
  const cambio = await response.json();
  cambio.forEach((element) => {
     const nuevaLinea = crearNuevaLinea(element.url, element.nombre, element.precio);
     div.appendChild(nuevaLinea);
    });
};


/////////////////----------HACIENDO LLAMADO PARA CADA SECCION-----------//////////////////////
serverCall("starWard",divStar);
serverCall("consolas",divConsolas);
serverCall("diversos",divDiversos);


export const exportar  = {
  serverCall, 
  crearNuevaLinea,
};