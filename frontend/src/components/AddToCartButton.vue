<script setup lang="ts">
function addToCart(){
    alert("Product added to cart!");
    window.location.replace("/cart");
}
</script>

<template>
    <button @click="addToCart" id="buy-product-bttn">ADD TO CART</button>
</template>

<style scoped>
#buy-product-bttn {
    background: #FBCA1F;
    font-family: inherit;
    color: black;
    padding: 0.6em 1.3em;
    font-weight: 900;
    font-size: 18px;
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
}

#buy-product-bttn:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
}
   
#buy-product-bttn:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
}
</style>
