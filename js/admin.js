import { exportar } from "./productController.js";
const divTodos = document.querySelector("[todos-div]");


const crearNuevaLinea = (img, nombre, precio, id, categoria)=>{
    const div = document.createElement("div");
    div.classList.add('galeria-descripcion');
    const content = `
    
          <ul class="galeria-descripcion-articulo" id="objeto1Consola">
              <li id="objeto1cosola-img" class="galeria-descripcion-items img">
              <img src="../img/icon/editar.png" editar-img alt="${categoria}" title="editar" class="btn-editar" id="${id}">
              <img src="../img/icon/borrar.png" borrar-img alt="${categoria}" title="borrar" class="btn-borrar" id="${id}">
              <img src="${img}" alt="objeto" class="foto" id="foto">
              </li>
              <li class="galeria-descripcion-items nombre"><p id="objeto1cosola-nombre">${nombre}</p></li>
              <li id="objeto1cosola-precio " class="galeria-descripcion-items precio"><p>${precio}</p></li>
              <li class="galeria-descripcion-items ver-producto"><a href="#">ver producto</a></li>
          </ul>`;
  
    
    div.innerHTML = content;
    const btnBorrar = div.querySelector("[borrar-img]");
    btnBorrar.addEventListener("click", (e) =>{
        e.preventDefault();
        const idProducto = btnBorrar.id;
        const categoriaProducto = btnBorrar.alt;
        console.log(categoriaProducto)
        console.log(idProducto)

       exportar.eliminarProduct(categoriaProducto, idProducto);
    });


    return div;
  };



  /////////////////----------HACIENDO LA FUNCION DE LLAMADO--------------//////////////////////
const serverCall = async (seccion, div)=>{
    const response = await fetch(`http://localhost:3000/${seccion}`);
    const cambio = await response.json();
    cambio.forEach((element) => {
       const nuevaLinea = crearNuevaLinea(element.url, element.nombre, element.precio, element.id, element.categoria);
       div.appendChild(nuevaLinea);
      });
  };

  /////////////////-------HACIENDO LLAMADO PARA CADA SECCION------//////////////////////
serverCall("starWard",divTodos);
serverCall("consolas",divTodos);
serverCall("diversos",divTodos);




//////////////////////FUNCION DE BORRAR ELEMENTO DE LA BASE///////////////////////


