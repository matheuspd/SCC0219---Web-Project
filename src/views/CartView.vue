<script setup lang="ts">
import FinishPurchaseButton from "../components/FinishPurchaseButton.vue";
</script>

<template>
        <div class="product">
            <div class="img-cover">
                <img src="@/assets/img/shirts/1.jpg" class="logo">
                <div class="layout-tes">
                    <h3>Product Name</h3>
                    <div class="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bx-star"></i>
                    </div>

                    <div class="price">
                        <h4>500R$</h4>
                    </div> 

                    <p>Description of the product</p>
                                          
                </div>
            </div>

            <div class="img-cover">
                <img src="@/assets/img/shirts/2.jpg" class="logo">
                <div class="layout-tes">
                    <h3>Product Name</h3>
                    <div class="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bx-star"></i>
                    </div>

                    <div class="price">
                        <h4>500R$</h4>
                    </div> 

                    <p>Description of the product</p>
                                          
                </div>
            </div>

            <div class="img-cover">
                <img src="@/assets/img/shirts/3.jpg" class="logo">
                <div class="layout-tes">
                    <h3>Product Name</h3>
                    <div class="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bx-star"></i>
                    </div>

                    <div class="price">
                        <h4>500R$</h4>
                    </div> 

                    <p>Description of the product</p>
                                          
                </div>
            </div>

            <div class="img-cover">
                <img src="@/assets/img/shirts/4.jpg" class="logo">
                <div class="layout-tes">
                    <h3>Product Name</h3>
                    <div class="rating">
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bxs-star"></i>
                        <i class="bx bx-star"></i>
                    </div>

                    <div class="price">
                        <h4>500R$</h4>
                    </div> 

                    <p>Description of the product</p>
                                          
                </div>
            </div>

        </div>

        <div class="finish-purchase">

            <div>
                <h2>TOTAL: 2000R$</h2> 
            </div>

            <FinishPurchaseButton />
        </div>

</template>

<style scoped>
.img-cover > img {
    width: 200px;
    height: 200px;
    border-radius: 10% 10% 10% 10%;
    box-shadow: 0vw 0.1vw 0.2vw 0.15vw #E0E0E0;
    -webkit-transition: -webkit-transition .3s ease;
    transition: transform .3s ease;
    float: inline-start;
    margin-bottom: 10px;
}

.img-cover > img:hover {
    -webkit-transform: translate(0px, -6px);
    transform: translate(0px, -6px);
}

.layout-tes {
    width: 400px;
    height: 200px;
    margin: 0 50px 0;
    margin-bottom: 0;
    padding: 4px 4px 4px 4px;
    background-color: #005F73;
    border-radius: 1vw 1vw 1vw 1vw;
    box-shadow: 0vw 0.1vw 0.2vw 0.15vw #D6D6D6;
    color: #E7E7E7;
    float: inline-end;
    margin-bottom: 10px;
}
</style>

