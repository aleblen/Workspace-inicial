//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    
});

fetch(CART_INFO_URL)

.then(respuesta => respuesta.json())

.then(carrito => {

    let carr=carrito.articles;

    for(let i = 0; i <carr.length; i++){
        let car = carr[i];
        
        let carro = "";

            carro += `
            <tr>
              <td>
                <h5>${car.name}</h5>
                <br>
              </td>
              <td class="text-center mob-hide">
                  <img src="${car.src}" title="${car.name}">
              </td>
              <td class="mob-hide">
                <span class="order-product-price">$${car.currency}`+`${car.unitCost}</span>
              </td>
              <td>
                <input style="width: 130px;" type="number" name="Cantidad" min="1" value="${car.count}"  id="costo`+i+`">
                
              </td>
              <td>
              <span class="order-product-subtotal">$${car.currency}`+`${car.unitCost*car.count}</span>
              </td>
               </tr> `
            //     <span class="order-product-subtotal">$${car.currency}`+`${car.unitCost*#costo[i].value}</span>
            //   
    //         `  
    //         <div class="list-group-item">
    //         <div class="row">
    //         <div class="col-3">
    //             <img src="${car.src}" class="img-thumbnail">
    //         </div>
    //         <div class="col">
    //             <div class="d-flex w-100 justify-content-between">
    //                 <h4 class="mb-1">${car.name}</h4>
    //                 <p class="mb-1">Precio individual:$${car.currency}`+`${car.unitCost}  </p>
    //             </div>
                
                
    //             <p class="mb-1">${car.count} artículos</p>
    //         </div>
    //     </div>
    // </div> 
    //         `
            let subtotal="";

            subtotal+=`
            
            `

            document.getElementById("carrito").innerHTML = carro;
    }
    
})

