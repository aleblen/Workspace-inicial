//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const url="https://japdevdep.github.io/ecommerce-api/product/all.json"; 


fetch(url) 
    .then( respuesta=>respuesta.json()) 
    .then(autos=> { 
        for (const auto of autos) {
            document.getElementById("autos").innerHTML+= `<tr> <td>${auto.name}</td><td> ${auto.cost}${auto.currency} </td> <td>${auto.description}</td></tr>`
    }
}
    )
    .catch( error => alert("Hubo un error: " + error));
document.addEventListener("DOMContentLoaded", function (e) {

});
const url2="https://japdevdep.github.io/ecommerce-api/product/all.json"; 
fetch(url2) 
    .then( respuesta=>respuesta.json()) 
    .then(autos=> { 
        for (const auto of autos) {
            document.getElementById("foto").src+= auto.imgSrc;
            document.getElementById("descripcion").innerHTML+=auto.description;
            document.getElementById("valor").innerHTML+= auto.cost;
    }
}
    )
    .catch( error => alert("Hubo un error: " + error));
document.addEventListener("DOMContentLoaded", function (e) {

});
//para que aprezca lo que quiero y necesito de los productos tengo que reciclar las funciones de categorias (la de i+= etc) y cambiarle el getjsondata por el url de los productos, ademas no es necesario tener en el html los divs de los productos, lo copio en el js y se hace solo.//