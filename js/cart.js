//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var costosub = 0;
var valorenvio = 0;
let checkeado=false;
let envios = document.getElementsByName("form");

document.addEventListener("DOMContentLoaded", function (e) {
  


  for (let radio of document.getElementsByClassName("radio")) {
    radio.addEventListener("click", function (e) {
      valorenvio = radio.getAttribute("valor");
      calcenvio();
    })
  }
 
});



function calcularcasi() {
  let subtotales2 = document.getElementsByClassName("order-product-subtotal");
  let totalcalc = 0;

  for (let i = 0; i < subtotales2.length; i++) {
    totalcalc += parseInt(subtotales2[i].textContent);

  }
  document.getElementById("sub").innerHTML = totalcalc.toFixed(1);
  costosub = totalcalc;
}


function calcenvio() {
 

  document.getElementById("envio").textContent = (costosub * valorenvio).toFixed(1);
  if (descuento == 0) {
    document.getElementById("total").textContent = (costosub + (costosub * valorenvio)).toFixed(1);
  } else {
    descuento = costosub * 0.10;
    document.getElementById("total").textContent = (costosub + (costosub * valorenvio) - costosub * 0.10).toFixed(1);
  }

  document.getElementById("descuento").innerHTML = (-descuento).toFixed(1);
}




fetch(CART_DESA)

  .then(respuesta => respuesta.json())

  .then(carrito => {

    let carr = carrito.articles;

    for (let i = 0; i < carr.length; i++) {
      let product = carr[i];
      let resultado = document.createElement("tr");
      resultado.className = "productoresult";
      let carro = "";
      if (product.currency === "USD") {
        product.unitCost = product.unitCost * 40;
      } else {
        product.unitCost = product.unitCost;
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

let descuento = (0).toFixed(1);

function swall() {
  if ((document.getElementById("coupon_code").value).trim() != "") {
    Swal.fire({
      title: "¡Gracias!",
      text: "¡Se te ha aplicado un 10% de descuento!",
      icon: "success",
      confirmButtonText: "Volver al carrito",

    })
    descuento = ((-costosub * 0.10));
  } else {
    Swal.fire({
      title: "¡UPS!",
      text: "No se ha encontrado ese código",
      icon: "error",
      confirmButtonText: "Volver al carrito",

    })
    descuento = (0);
  }

  document.getElementById("descuento").innerHTML = descuento.toFixed(1);
  document.getElementById("total").textContent = (costosub + (costosub * valorenvio) + descuento).toFixed(1);
}





document.getElementById('comprar').addEventListener("click", function () {

  var calle = document.getElementById('calle');
  var num = document.getElementById('num');
  var esq = document.getElementById('esq');
  

  var check = document.getElementById('tick');
  var check1 = document.getElementById('tick1');
  var check2 = document.getElementById('tick2');
  var check3=document.getElementById(`tick3`);
  
  var marca = "";
  var marca1 = "";
  var marca2 = "";
  var marca3 = "";

  var anuncio=document.getElementById("anuncio");
  anuncio.classList.remove('invalido');
  
  calle.classList.remove('invalido');
  check.classList.remove('mal');

  num.classList.remove('invalido');
  check1.classList.remove('mal');

  esq.classList.remove('invalido');
  check2.classList.remove('mal');
 

  if (calle.value === "") {

    calle.classList.add('invalido');
    tick.classList.add('mal');
    marca = "No ingresaste calle";

  } 
  document.getElementById('tick').innerHTML = marca;
  if (num.value === "") {

    num.classList.add('invalido');
    tick1.classList.add('mal');
    marca1 = "No ingresaste número";
   
  }
  document.getElementById('tick1').innerHTML = marca1;
  if (esq.value === "") {

    esq.classList.add('invalido');
    tick2.classList.add('mal');
    marca2 = "No ingresaste esquina";

  } 
  document.getElementById('tick2').innerHTML = marca2;


  for (let x = 0; x < envios.length; x++) {
    if (envios[x].checked) {
      checkeado=true;
    }
    
  }
  if (!checkeado) {
    anuncio.classList.add('invalido'); 
    tick3.classList.add('mal');
    marca3 = "No ingresaste envio";
  }
  document.getElementById('tick3').innerHTML = marca3;
});
