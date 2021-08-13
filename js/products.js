//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const products_URL="https://japdevdep.github.io/ecommerce-api/product/all.json"; 
const ORDER_ASC_BY_NAME = "AZ";
var currentProductsArray = [];
var currentSortProduct = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.productCount);
            let bCount = parseInt(b.productCount);

            if ( aCount > bCount ){ return -1; }
            if ( aCount < bCount ){ return 1; }
            return 0;
        });
    }

    return result;
}

//para que aprezca lo que quiero y necesito de los productos tengo que reciclar las funciones de categorias (la de i+= etc) y cambiarle el getjsondata por el url de los productos, ademas no es necesario tener en el html los divs de los productos, lo copio en el js y se hace solo.//
function showProductsList(){

    let htmlProductsToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let Product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(category.productCount) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(category.productCount) <= maxCount))){

            htmlProductsToAppend += `
            <div class="row">
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="` + Product.imgSrc + `" class="bd-placeholder-img card-img-top" height="225" width="100%" >
                        <div class="card-body">
                        <p class="card-text">`+Product.description+`</p><br>
                        <p>Precio: `+Product.cost+ Product.currency+`</p>
                        </div>
                    </div>
                </div>
            </div>
            
                
            `
        }

        document.getElementById("prod-list-container").innerHTML = htmlProductsToAppend;
    }
}

function sortAndShowProducts(sortProduct, productsArray){
    currentSortProduct = sortProduct;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortProduct, currentProductsArray);

    
    showProductsList();
}


document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(products_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_NAME, resultObj.data);
        }
    });
    showProductsList();
});