var cartel = document.querySelectorAll(".addToCart")


for ( var i = 0; i < cartel.length; i++){
    cartel[i].addEventListener("click", () => {
   
        cartNumbers()
    })
}
function onLoadCartNumbers() {
      var productNumbers = localStorage.getItem("cartNumbers")

      if(productNumbers){
          document.querySelector("#spann").textContent = productNumbers;
      }
}

function cartNumbers(){
  console.log();
    var productNumbers = localStorage.getItem("cartNumbers")
    
     productNumbers = parseInt(productNumbers)

     if (productNumbers){
        localStorage.setItem("cartNumbers", productNumbers + 1)
        document.querySelector("#spann").textContent = productNumbers + 1
     } else {
        localStorage.setItem("cartNumbers", 1)
        document.querySelector("#spann").textContent = 1
     }
      
}

onLoadCartNumbers()



