//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
function verificar() {
    
    let dato=document.getElementById("usuario");
    let usuario={};
    let contra=document.getElementById("contraseña");
    let contra={};
if (dato.value.trim()===``) {
    alert("Llene el campo de usuario");
}if (contra.value.trim()===``) {
    alert("Llene el campo de contraseña");
} else{
    usuario.nombre=dato.value;
    location.href="index.html";
    usuario.estado="Conectado";
    localStorage.setItem(`usuario`,JSON.stringify(usuario));
    sessionStorage.setItem(`usuario`,JSON.stringify(usuario));
}
}

document.addEventListener("DOMContentLoaded", function(e){

});


//function verificar() {
    
 //   let dato=document.getElementById("usuario");
 //   let usuario={};
  //  let contra=document.getElementById("contraseña"); 
  //  let contra={};
//if (dato.value.trim()===``) {
 //   alert("Llene el campo de usuario");
//};
//if (contra.value.trim()===``) {
//alert("Llene el campo de contraseña");
//};
//if ((!dato.value.trim()===``) && (!contra.value.trim()===``)) {
  //  usuario.nombre=dato.value;
  //  location.href="index.html";
  //  usuario.estado="Conectado";
   // localStorage.setItem(`usuario`,JSON.stringify(usuario));
   // sessionStorage.setItem(`usuario`,JSON.stringify(usuario));
  //  localStorage.setItem(`contraseña`,JSON.stringify(contra));
  //  sessionStorage.setItem(`contraseña`,JSON.stringify(contra));
//}
//}