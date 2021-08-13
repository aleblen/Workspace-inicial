//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


function verificar(usuario, contraseña) {
    
    let User={};
if (usuario.trim()==="") {
    alert("Llene el usuario");
} else if(contraseña.trim()===""){
alert("Llene la contraseña");
}else{
    User.nombre=usuario;
    User.estado="conectado";
    User.contraseña=contraseña
    localStorage.setItem("usuario",JSON.stringify(User));
    
    
    location.href="index.html";
    
}
}

document.addEventListener("DOMContentLoaded", function(e){

});

  
 
  

