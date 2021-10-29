//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  var preview = document.getElementById("imagen");
  let avatar1 =JSON.parse(localStorage.getItem("avatar")) ;
preview.src=avatar1;
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
function anterior() {
    var preview = document.getElementById("imagen");
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      preview.src = reader.result;

      let avatar=""
      avatar=reader.result;
      localStorage.setItem("avatar",JSON.stringify(avatar));
      
      
 }
  
    if (file) {
      reader.readAsDataURL(file);
      
      
    } else {
        
      preview.src="";
    }
    
  }
  
  
  

