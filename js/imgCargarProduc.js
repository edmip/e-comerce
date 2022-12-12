const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
      $imagenPrevisualizacion = document.querySelector("#imgPreview"),
      $urlImagen = document.querySelector("#url");
      const formAddProduct = document.querySelector('#formProducto'); 

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {

  // Los archivos seleccionados, pueden ser muchos o uno
  const archivos = $seleccionArchivos.files;

  // Si no hay archivos salimos de la función y quitamos la imagen
  if (!archivos || !archivos.length) {
    $imagenPrevisualizacion.src = "";
    return;
  }else{

    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = archivos[0];

    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);

    // Y a la fuente de la imagen le ponemos el objectURL
    $imagenPrevisualizacion.src = objectURL;

    //vaciamos el input de url para q se qde vacio
    $urlImagen.value = "";
    console.log(objectURL);
    console.log($imagenPrevisualizacion.name);
    $urlImagen.value = objectURL;
  }


});


//FUNCION PARA MOSTRAR LA IMAGEN A TRAVEZ DE UNA URL
$urlImagen.addEventListener("keyup", () => {
  
  
    $imagenPrevisualizacion.src = $urlImagen.value;
    $seleccionArchivos.value="";
});


//FUNCION PARA ERROR 404 EN IMAGEN
function getImage(imgUrl) {
  
  var img = event.srcElement;

  img.src = imgUrl;

}

formAddProduct.addEventListener('submit', (e) => {
  e.preventDefault();
  
});

