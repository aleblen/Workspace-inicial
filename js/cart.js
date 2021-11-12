//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var costosub = 0;
var valorenvio = 0;
let checkeado = false;
let envios = document.getElementsByName("form");
let metodos = document.getElementsByName("metodo");

var cosas=[];
var msj="";
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(CART_DESA).then(function (resultado) {
    if (resultado.status === "ok") {
      cosas=resultado.data.articles;
      carro(cosas);

    }
  });
  getJSONData(CART_BUY_URL).then(function (mensaje) {
    if (mensaje.status === "ok") {
      msj=mensaje.data;
      

    }
  });
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
var dolar=false;

function carro(productos) {
  document.getElementById("carrito").innerHTML="";
  for (let i = 0; i < productos.length; i++) {
    let producto = productos[i];
    let resultado = document.createElement("tr");
    resultado.className = "productoresult";
    if (producto.currency === "USD" && dolar==false) {
    dolar=true;
      producto.unitCost = producto.unitCost * 40;
    } 

    resultado.innerHTML= `
            
        <td>
                <h5>${producto.name}</h5>
                <br>
        </td>
        <td class="text-center mob-hide">
                <img class="imgproduct" src="${producto.src}" title="${producto.name}">
        </td>
        <td class="mob-hide">
                <span class="order-product-price">UYU` + `${producto.unitCost}</span>
        </td>
        <td>
                <input class="cantidaddeunidades"style="width: 130px;" type="number" name="Cantidad" min="1" value="${producto.count}" >
                
        </td>
        <td>
                <span>UYU</span><span class="order-product-subtotal">${producto.unitCost * producto.count}</span>
        </td>
        <td>
        <img src="img/pngborrar.png" width="25px" onclick="borrar(${i})">
        </td>
                `

    //calculo el subtotal de un solo articulo
    let cant = resultado.getElementsByClassName("cantidaddeunidades")[0];
    cant.addEventListener('change', function (e) {

      let subtot = resultado.getElementsByClassName("order-product-subtotal")[0];
      subtot.textContent = `${producto.unitCost * cant.value}`;
      calcularcasi();
      calcenvio();
    })

    //agregamos el elemento resultado al carrito
    document.getElementById("carrito").appendChild(resultado);
    
  }




  calcularcasi();

}

function borrar(numero) {
  
  cosas.splice(numero, 1);

  carro(cosas);
  calcenvio();
}


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

let lleno1 = false;
let lleno2 = false;
let lleno3 = false;


function comprar() {

  var botonmetodo = document.getElementById("enviocheck");
  botonmetodo.classList.add('btn-secondary');
  botonmetodo.classList.remove('btn-danger');

  var calle = document.getElementById('calle');
  var num = document.getElementById('num');
  var esq = document.getElementById('esq');


  var check = document.getElementById('tick');
  var check1 = document.getElementById('tick1');
  var check2 = document.getElementById('tick2');
  var check3 = document.getElementById(`tick3`);
  var check4 = document.getElementById(`tick4`);

  var marca = "";
  var marca1 = "";
  var marca2 = "";
  var marca3 = "";
  var marca4 = "";

  let metcheck = false;

  var anuncio = document.getElementById("anuncio");
  anuncio.classList.remove('invalido');

  var enviocheck = document.getElementById("enviocheck");
  enviocheck.classList.remove('invalido');

  calle.classList.remove('invalido');
  check.classList.remove('mal');

  num.classList.remove('invalido');
  check1.classList.remove('mal');

  esq.classList.remove('invalido');
  check2.classList.remove('mal');


  if (calle.value.trim() === "") {

    calle.classList.add('invalido');
    tick.classList.add('mal');
    marca = "No ingresaste calle";

  } else {
    lleno1 = true;
  }
  document.getElementById('tick').innerHTML = marca;
  if (num.value.trim() === "") {

    num.classList.add('invalido');
    tick1.classList.add('mal');
    marca1 = "No ingresaste número";

  } else {
    lleno2 = true;
  }
  document.getElementById('tick1').innerHTML = marca1;
  if (esq.value.trim() === "") {

    esq.classList.add('invalido');
    tick2.classList.add('mal');
    marca2 = "No ingresaste esquina";

  } else {
    lleno3 = true;
  }
  document.getElementById('tick2').innerHTML = marca2;


  for (let x = 0; x < envios.length; x++) {
    if (envios[x].checked) {
      checkeado = true;
    }

  }
  if (!checkeado) {
    anuncio.classList.add('invalido');
    tick3.classList.add('mal');
    marca3 = "No ingresaste envio";
  }
  document.getElementById('tick3').innerHTML = marca3;

let cuenta=document.getElementById("cuenta");
let num1=document.getElementById("num1");
let cod=document.getElementById("cod");
let venc=document.getElementById("venc");

  for (let z = 0; z < metodos.length; z++) {
    if (metodos[0].checked && cuenta.value.trim()!="") {
      metcheck = true;

    }else if (metodos[1].checked && num1.value.trim()!="" && cod.value.trim()!="" && venc.value.trim()!="") {
      metcheck = true;
    }

  }
  if (!metcheck) {
    enviocheck.classList.add('invalido'); 
    tick4.classList.add('mal');
    marca4 = "No ingresaste forma de pago";
    botonmetodo.classList.remove('btn-secondary');
    botonmetodo.classList.add('btn-danger');
  }
  document.getElementById('tick4').innerHTML = marca4;

  if (lleno1 == true && lleno2 == true && lleno3 == true && checkeado == true && metcheck == true) {
    
    Swal.fire({
      title: "¡Gracias!",
      text: msj.msg,
      icon: "success",
      confirmButtonText: 'Volver al Inicio',
    }).then(function(result) {
      if (result.value) {
        location.assign("principio.html")
      }
    })
  }
};




