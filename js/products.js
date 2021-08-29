//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
const products_URL="https://japdevdep.github.io/ecommerce-api/product/all.json"; 
const ORDER_ASC_BY_NAME = "AZ";
const ORDER_DESC_BY_NAME = "ZA";
const ORDER_BY_PROD_COST_DESC = "Costo desc";
const ORDER_BY_PROD_COST_ASC = "Costo asc";
const ORDER_BY_PROD_RELE = "Relevancia";
var currentProductsArray = [];
var currentSortProduct = undefined;
var minCost = undefined;
var maxCost = undefined;





function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_NAME)
    {
        result = array.sort(function(a, b) {
            if ( a.name < b.name ){ return -1; }
            if ( a.name > b.name ){ return 1; }
            return 0;
        });
    }
    else if (criteria === ORDER_DESC_BY_NAME){
        result = array.sort(function(a, b) {
            if ( a.name > b.name ){ return -1; }
            if ( a.name < b.name ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST_DESC){
        result = array.sort(function(a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);

            if ( acost > bcost ){ return -1; }
            if ( acost < bcost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_BY_PROD_COST_ASC){
        result = array.sort(function(a, b) {
            let acost = parseInt(a.cost);
            let bcost = parseInt(b.cost);

            if ( acost < bcost ){ return -1; }
            if ( acost > bcost ){ return 1; }
            return 0;
        });
     } else if (criteria === ORDER_BY_PROD_RELE){
            result = array.sort(function(a, b) {
                let arele = parseInt(a.soldCount);
                let brele = parseInt(b.soldCount);
    
                if ( arele > brele ){ return -1; }
                if ( arele < brele ){ return 1; }
                return 0;
            });
    }
        
    

    return result;
}

/***terminar la Relevancia*/
 

function showProductsList(){
    let buscador="";
    let htmlProductsToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let Product = currentProductsArray[i];
        
        if (((minCost == undefined) || (minCost != undefined && parseInt(Product.cost) >= minCost)) &&
            ((maxCost == undefined) || (maxCost != undefined && parseInt(Product.cost) <= maxCost))){
                
            htmlProductsToAppend += `
            
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="` + Product.imgSrc + `" class="bd-placeholder-img card-img-top" height="225" width="100%" >
                        <div class="card-body">
                        <h2 style="text-align: center;">`+Product.name+` </h2>
                        <p class="card-text">`+Product.description+`</p><br>
                        <h5 class="text-success" style="font-weight: bold; text-align: center;"> `+Product.cost+ Product.currency+`</h5>
                        </div>
                    </div>
                </div>
            
            
                
            `
            buscador += `

        <option>`+ Product.name+` </option>
        <option>`+ Product.description+` </option>
        `
        }
        
        let msg = document.getElementById('buscador');

msg.addEventListener("keydown", (event) => {
    
});

msg.addEventListener("keypress", (event) => {
    
});

msg.addEventListener("keyup", (event) => {
    document.getElementById("busca").innerHTML=buscador;
});
        
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
    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_NAME);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_NAME);
    });

    document.getElementById("sortByCostdesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COST_DESC);
    });
    document.getElementById("sortByCostasc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_COST_ASC);
    });
    document.getElementById("ordenarrelevancia").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_PROD_RELE);
    });
    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCost = undefined;
        maxCost = undefined;
    showProductsList();
});
});
document.getElementById("rangeFilterCount").addEventListener("click", function(){
    //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
    //de productos por categoría.
    minCost = document.getElementById("rangeFilterCountMin").value;
    maxCost = document.getElementById("rangeFilterCountMax").value;

    if ((minCost != undefined) && (minCost != "") && (parseInt(minCost)) >= 0){
        minCost = parseInt(minCost);
    }
    else{
        minCost = undefined;
    }

    if ((maxCost != undefined) && (maxCost != "") && (parseInt(maxCost)) >= 0){
        maxCost = parseInt(maxCost);
    }
    else{
        maxCost = undefined;
    }

    showProductsList();
});


function buscador() {
    
}
