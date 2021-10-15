//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var costosub=0;
var valorenvio=0;
document.addEventListener("DOMContentLoaded", function (e) {
for( let radio of document.getElementsByClassName("radio")){
  radio.addEventListener("click",function (e) {
    valorenvio=radio.getAttribute("valor");
    calcenvio();
  })
}
});


              
function calcularcasi() {
  let subtotales2 = document.getElementsByClassName("order-product-subtotal");
let totalcalc=0;

  for (let i = 0; i < subtotales2.length; i++) {
    totalcalc+=parseInt(subtotales2[i].textContent);
    
  }
  document.getElementById("sub").innerHTML=totalcalc.toFixed(1);
  costosub=totalcalc;
}


function calcenvio() {
  document.getElementById("envio").textContent=(costosub*valorenvio).toFixed(1);
  if (descuento==0) {
    document.getElementById("total").textContent=(costosub+(costosub*valorenvio)).toFixed(1);
  } else {
    descuento=costosub*0.10;
    document.getElementById("total").textContent=(costosub+(costosub*valorenvio)-costosub*0.10).toFixed(1);
  }
  
  document.getElementById("descuento").innerHTML=(-descuento).toFixed(1);
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
        calcularcasi();
        calcenvio();
        
        
        
      })

      //agregamos el elemento resultado al carrito
      document.getElementById("carrito").appendChild(resultado);



    }
    

    

    calcularcasi();

  })

  let descuento=(0).toFixed(1);
  
  function swall(){
    if ((document.getElementById("coupon_code").value).trim()!="") {
      Swal.fire({
        title: "¡Gracias!",
        text: "¡Se te ha aplicado un 10% de descuento!",
        icon: "success",
        confirmButtonText: "Volver al carrito",
        
    })
    descuento=((-costosub*0.10));
    } else {
      Swal.fire({
        title: "¡UPS!",
        text: "No se ha encontrado ese código",
        icon: "error",
        confirmButtonText: "Volver al carrito",
        
    })
    descuento=(0);
    }
    
document.getElementById("descuento").innerHTML=descuento.toFixed(1);
document.getElementById("total").textContent=(costosub+(costosub*valorenvio)+descuento).toFixed(1);
    }