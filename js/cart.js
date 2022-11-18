"use strict"

document.getElementById("buy-product-bttn").addEventListener("click", finishPurchase)

function finishPurchase(){
    alert("Purchase done!");
    window.location.replace("index.html");
}