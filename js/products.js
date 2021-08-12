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