//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function verificar(usuario, contraseña) {

if (usuario.trim()==="" || contraseña.trim()==="") {
    alert("El dato está vacío");
} else{
    
    localStorage.setItem("usuario",JSON.stringify(usuario));
    sessionStorage.setItem("usuario",JSON.stringify(usuario));
    localStorage.setItem("contraseña",JSON.stringify(contraseña));
    
    location.href="index.html";
    
}
}

document.addEventListener("DOMContentLoaded", function(e){

});

  
 
  

