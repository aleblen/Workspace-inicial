//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});
let subtotales = document.getElementsByClassName("order-product-subtotal");
let sumade = 0;                
function coso() {
  
  for (let i = 0; i < subtotales.length; i++) {
    sumade+=parseInt(subtotales[i].innerHTML);
    
  }
  document.getElementById("sub").innerHTML=sumade;
  
}

function envios(num) {
  document.getElementById("envio").textContent=sumade*num;
  
}
function total(tot) {
  document.getElementById("total").textContent=sumade*tot;
}

fetch(CART_DESA)

  .then(respuesta => respuesta.json())

  .then(carrito => {

    let carr = carrito.articles;

    for (let i = 0; i < carr.length; i++) {
      let product = carr[i];
      let resultado = document.createElement("tr");
      resultado.className="productoresult";
      let carro = "";
      if (product.currency==="USD") {
        product.unitCost=product.unitCost*40;
      }else{
        product.unitCost=product.unitCost;
      }
      
      carro += `
            
        <td>
                <h5>${product.name}</h5>
                <br>
        </td>
        <td class="text-center mob-hide">
                <img class="imgproduct" src="${product.src}" title="${product.name}">
        </td>
        <td class="mob-hide">
                <span class="order-product-price">UYU` + `${product.unitCost}</span>
        </td>
        <td>
                <input class="cantidaddeunidades"style="width: 130px;" type="number" name="Cantidad" min="1" value="${product.count}" >
                
        </td>
        <td>
                <span>UYU</span><span class="order-product-subtotal">${product.unitCost * product.count}</span>
        </td>
                `
              


      resultado.innerHTML = carro;

      //calculo el subtotal de un solo articulo
      let cant = resultado.getElementsByClassName("cantidaddeunidades")[0];
      cant.addEventListener('change', function (e) {
        
        let subtot = resultado.getElementsByClassName("order-product-subtotal")[0];
        subtot.textContent = `${product.unitCost * cant.value}`;
       
      })

      //agregamos el elemento resultado al carrito
      document.getElementById("carrito").appendChild(resultado);



    }
    

    

    coso();

  })
  
