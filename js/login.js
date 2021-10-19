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
    User.contraseña=contraseña;
    localStorage.setItem("usuario",JSON.stringify(User));
    
    
    location.href="principio.html";
    
}
}

document.addEventListener("DOMContentLoaded", function(e){
  let User =JSON.parse(localStorage.getItem(`usuario`)) ;

  document.getElementById("bienvenido").innerHTML="Usuario: "+ User.nombre +" " +`<i class="fa fa-caret-down"></i>` ;
  document.getElementById("perfil").innerHTML=`<b>Usuario: </b>${User.nombre}`;
});

function onSignIn(googleUser) {
    
  // Useful data for your client-side scripts:
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId()); // Don't send this directly to your server!
  console.log('Full Name: ' + profile.getName());
 console.log('Given Name: ' + profile.getGivenName());
 console.log('Family Name: ' + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
 console.log("Email: " + profile.getEmail());

  // The ID token you need to pass to your backend:
  var id_token = googleUser.getAuthResponse().id_token;
  console.log("ID Token: " + id_token);
    
  let google={};
  
  google.nombre=profile.getName();
    
    localStorage.setItem("usuario",JSON.stringify(google));
    //document.getElementById("bienvenido").innerHTML=localStorage.getItem(google.nombre);
  location.href="principio.html";
}




 



