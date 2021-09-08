//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



fetch(PRODUCT_INFO_URL)

.then(respuesta => respuesta.json())

.then(datos => {
    document.getElementById("nombre").innerHTML+= ` ${datos.name} `;
    document.getElementById("descr").innerHTML+= ` ${datos.description} `;
    document.getElementById("costo").innerHTML+= ` ${datos.cost}  ${datos.currency}`;
    document.getElementById("cate").innerHTML+= ` ${datos.category} `;
    
    
    
})  
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            mostrarcomentarios(resultObj.data);
            
        }
});
});

var comentarios=[];

function mostrarcomentarios(comentarios){
    
    let coment = "";
    for(let i = 0; i < comentarios.length; i++){
        let comentario = comentarios[i];
        
        
            coment += `  

    <div >
    <h5 class="name" style="float: left;">${comentario.user}</h5>
    <p style="float: right;" >Comentado el ${comentario.dateTime}</p><br><br>
   <div class="text_holder"> <p style="font-family: Arial, Helvetica, sans-serif;" >${comentario.description}</p></div>
    <p>${comentario.score}</p>   </div>  
      <hr>        
            `
        document.getElementById("comentarios").innerHTML = coment;       
    }
}
var zFondos150 = ["url('img/prod1.jpg')","url('img/prod1_1.jpg')","url('img/prod1_2.jpg')","url('img/prod1_3.jpg')","url('img/prod1_4.jpg')"];

var imagenPrincipal = document.querySelectorAll(".imagen-principal")[0];
var subImagenes = document.querySelectorAll('[class *= "subImagen-"]');

imagenPrincipal.style.backgroundImage =zFondos150[0];
subImagenes[0].style.backgroundImage =zFondos150[0];
subImagenes[1].style.backgroundImage =zFondos150[1];
subImagenes[2].style.backgroundImage =zFondos150[2];
subImagenes[3].style.backgroundImage =zFondos150[3];
subImagenes[4].style.backgroundImage =zFondos150[4];

subImagenes[0].addEventListener("mouseover",accion0);
subImagenes[1].addEventListener("mouseover",accion1);
subImagenes[2].addEventListener("mouseover",accion2);
subImagenes[3].addEventListener("mouseover",accion3);
subImagenes[4].addEventListener("mouseover",accion4);

function accion0(){imagenPrincipal.style.backgroundImage =zFondos150[0];}
function accion1(){imagenPrincipal.style.backgroundImage =zFondos150[1];}
function accion2(){imagenPrincipal.style.backgroundImage =zFondos150[2];}
function accion3(){imagenPrincipal.style.backgroundImage =zFondos150[3];}
function accion4(){imagenPrincipal.style.backgroundImage =zFondos150[4];}