//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

var hoy = new Date();
var fecha= hoy.getFullYear()+`-`+(hoy.getMonth() + 1)+ `-`+ hoy.getDate();
var hora=hoy.getHours()+`:`+hoy.getMinutes()+`:`+hoy.getSeconds();
var actu = fecha + ` ` + hora;

fetch(PRODUCT_INFO_URL)

.then(respuesta => respuesta.json())

.then(datos => {
    document.getElementById("nombre").innerHTML+= ` ${datos.name} `;
    document.getElementById("descr").innerHTML+= ` ${datos.description} `;
    document.getElementById("costo").innerHTML+= ` ${datos.cost}  ${datos.currency}`;
    document.getElementById("cate").innerHTML+= ` ${datos.category} `;
    
    let fotos ="";
    
    for(let i=0; i<datos.images.length; i++){
        let foto = datos.images[i];

        
        
        
        fotos+=`
        
        
    
      <img onmouseover="preview.src=img`+i+`.src" name="img`+i+`" src="`+foto+`" alt=""/>
      
        `
        
   
        document.getElementById("imagenes").innerHTML=(fotos);
    }
    document.getElementById("imgpri").innerHTML=(`<img name="preview" src="`+datos.images[0]+`" alt=""/>`);
    
    let rela ="";
    
        let x=0;
        
        fetch(PRODUCTS_URL)

        .then(respuestas => respuestas.json())
        
        .then(dat => {
            
            
            
            for(let i=0; i<datos.relatedProducts.length; i++){
                let fot = datos.relatedProducts[i];
                console.log(fot);
                let fotorel = dat[fot];
                
                if (x==0) {
                    rela+=`<div class="carousel-item active">
                    <img src="` + fotorel.imgSrc + `" class="d-block w-100" alt="100%">
                    <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white;">` + fotorel.name + `</h5>  
      </div>
                </div>`
                x++;
                } else {
                    rela+=`<div class="carousel-item ">
                    <img src="` + fotorel.imgSrc + `" class="d-block w-100" alt="100%">
                    <div class="carousel-caption d-none d-md-block">
        <h5 style="color: white;">` + fotorel.name + `</h5>  
      </div>
                </div>`
                }
                document.getElementById("relacionados").innerHTML=(rela);
            }
        })
     
    
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
    <div class="stars-outer">
        <div class="stars-inner" style="width:${comentario.score*20}%;"></div>
      </div>   </div>  
      <hr>        
            `
        document.getElementById("comentarios").innerHTML = coment;       
    }
}




function mostrar(comentarios){
    let espacio = document.getElementById("comentarios");
    
    let coment=document.getElementById("comment").value;
    
    let com =JSON.parse(localStorage.getItem(`usuario`)) ;

    let filas ="";
    
        
        filas += ` 
        
        <div >
    <h5 class="name" style="float: left;">${com.nombre}</h5>
    <p style="float: right;" >Comentado el ${actu}</p><br><br>
   <div class="text_holder"> <p style="font-family: Arial, Helvetica, sans-serif;" >${coment}</p></div>
    <div class="stars-outer">
        <div class="stars-inner" style="width: ${valor*20}%;"></div>
      </div>   </div>  
      <hr>     
        `;

    
    espacio.innerHTML+=filas;
    console.log(comentarios);
}
function cargar(){
    mostrar(comentarios);
    asignarvalor(0);     
    document.getElementById("radio1").checked=false;   
    document.getElementById("radio2").checked=false;   
    document.getElementById("radio3").checked=false;   
    document.getElementById("radio4").checked=false;   
    document.getElementById("radio5").checked=false;     
    document.getElementById("comment").value=""; 
}
var valor = "";
function asignarvalor(a) {
    valor=a;
}


