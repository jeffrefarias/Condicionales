
// EJERCICIO 1
// OBTENEMOS EL ID DE LA IMAGEN
    const imagen = document.querySelector("#imagen");

imagen.addEventListener("click", function(){

    if(imagen.style.border === "2px solid red"){
        imagen.style.border = "none";
    }else{
        imagen.style.border = "2px solid red";

    }
});


