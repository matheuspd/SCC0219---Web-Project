<template>
        <section class="section">
            <div class="product">
                <div class="img-cover">
                    <img src="@/assets/img/shirts/1.jpg" class="logo">
                    <div class="layout-tes">
                        <h2>Product Name</h2>
                        <div class="rating">
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bxs-star"></i>
                            <i class="bx bx-star"></i>
                        </div>

                        <div class="price">
                            <h3>500R$</h3>
                        </div> 

                        <p>Description of the product</p><br>                        
                        
                        <p>Estoque disponível</p><br> 

                        <button id="buy-product-bttn">ADD TO CART</button>
                                              
                    </div>
                </div>
            </div>
        </section>
</template>

<style scoped>
.img-cover > img {
    width: 400px;
    height: 400px;
    border-radius: 10% 10% 10% 10%;
    box-shadow: 0vw 0.1vw 0.2vw 0.15vw #E0E0E0;
    -webkit-transition: -webkit-transition .3s ease;
    transition: transform .3s ease;
}

.img-cover > img:hover {
    -webkit-transform: translate(0px, -6px);
    transform: translate(0px, -6px);
}

.layout-tes {
    width: 900px;
    height: 400px;
    margin: 0 50px 0;
    margin-bottom: 0;
    padding: 4px 4px 4px 4px;
    background-color: #005F73;
    border-radius: 1vw 1vw 1vw 1vw;
    box-shadow: 0vw 0.1vw 0.2vw 0.15vw #D6D6D6;
    color: #E7E7E7;
    float: right;
}

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
