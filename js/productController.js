//////////////...FUNCION PARA BORRAR PRODUCTO.../////////////////

const eliminarProduct = async (categoria, id) =>{
    try{

        respuesta = await fetch(`http://localhost:3000/${categoria}/${id}`, {
        method: "DELETE" 
        }) 

        return respuesta;


    }catch(error){
        console.log(error);
    }
}
    
   


export const exportar = {
    eliminarProduct,
}