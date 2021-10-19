//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    let perfil1 =JSON.parse(localStorage.getItem(`usuarioperfil`)) ;
    
    document.getElementById("nombre").innerHTML=perfil1.nombre;
    document.getElementById("apellido").innerHTML=perfil1.apellido;
    document.getElementById("edad").innerHTML=perfil1.edad;
    document.getElementById("telefono").innerHTML=perfil1.telefono;
    document.getElementById("email").innerHTML=perfil1.email;
});
function perfil() {
    
   let nomb=document.getElementById("nombre1").value;
   let apell=document.getElementById("apellido1").value;
   let edad=document.getElementById("edad1").value;
   let tele=document.getElementById("telefono1").value;
   let email=document.getElementById("email1").value;


    let perfil={};

    perfil.nombre=nomb;
     perfil.apellido=apell;
     perfil.email=email;
    perfil.telefono=tele;
     perfil.edad=edad;
    localStorage.setItem("usuarioperfil",JSON.stringify(perfil));
    
    
    let perfil2 =JSON.parse(localStorage.getItem(`usuarioperfil`)) ;
    
    document.getElementById("nombre").innerHTML= perfil2.nombre;
    document.getElementById("apellido").innerHTML= perfil2.apellido;
    document.getElementById("edad").innerHTML= perfil2.edad;
    document.getElementById("telefono").innerHTML= perfil2.telefono;
    document.getElementById("email").innerHTML= perfil2.email;
  
  
    
    
}


