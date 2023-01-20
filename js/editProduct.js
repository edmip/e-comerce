
        

const obtenerInfo = async  ()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    let categoria = url.searchParams.get("cat");
    console.log(categoria);
    if(categoria==1) categoria = "starWard";
    if(categoria==2) categoria = "consolas";
    if(categoria==3) categoria = "diversos"; 

    
console.log(`http://localhost:3000/${categoria}/${id}`);

    try{

        const respuesta = await fetch(`http://localhost:3000/${categoria}/${id}`);
        

        if (respuesta.ok){

            const jsonRespuesta = await respuesta.json();
            const urlProduct = document.querySelector("#url"); 
            const categoryProduct = document.querySelector("#categoria");
            const nomProduct = document.querySelector("#nombreProduct");
            const priceProduct = document.querySelector("#precioProduct");
            const descripProduct = document.querySelector("#mensaje");

            urlProduct.value = jsonRespuesta.url;
            categoryProduct.value = jsonRespuesta.category;
            nomProduct.value = jsonRespuesta.nombre;
            priceProduct.value = jsonRespuesta.precio;
            descripProduct.value = jsonRespuesta.description;

            console.log(jsonRespuesta);
        }


    }catch(error){
        console.log(error);
    }

}

obtenerInfo();