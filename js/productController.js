/////////////////...FUNCION PARA BORRAR PRODUCTO...////////////////////

const eliminarProduct = async (categoria, id) =>{
    try{

        if(categoria==1) categoria = "starWard";
        if(categoria==2) categoria = "consolas";
        if(categoria==3) categoria = "diversos"; 
    
        const respuesta = await fetch(`http://localhost:3000/${categoria}/${id}`, {
        method: "DELETE" 
        }); 

        return respuesta;


    }catch(error){
        console.log(error);
    }
}

//////////////FUNCION PARA AGREGAR EL PRODUCTO EN LA BASE///////////////  
  
const crearProduct = (url, category, nombre, precio, description) => {
  
    let categoria = "";
    if(category==1) categoria = "starWard";
    if(category==2) categoria = "consolas";
    if(category==3) categoria = "diversos";
  
    return fetch (`http://localhost:3000/${categoria}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url, nombre, precio, category, description, id: uuid.v4()}),
    });
}



//////////////FUNCION PARA AGREGAR EL PRODUCTO EN LA BASE/////////////// 
const editarProduct = async (url, category, nombre, precio, description) => {
    const urlPage = new URL(window.location);
    const id = urlPage.searchParams.get("id");
    let categoria = urlPage.searchParams.get("cat");
    if(category==1) categoria = "starWard";
    if(category==2) categoria = "consolas";
    if(category==3) categoria = "diversos";

    try{

        const respuesta = await fetch(`http://localhost:3000/${categoria}/${id}`, {
            
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({url, nombre, precio, category, description}),
              });



    }catch{
        console.log(error);
    }



}



////////////////FUNCION PARA EXPORTAR FUNCIONES//////////////////////// 
export const exportar = {
    eliminarProduct,
    crearProduct,
    editarProduct,
}

