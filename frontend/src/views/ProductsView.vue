<template>
        <section class="section">
            <div class="header_section">
                <h1><span>All Products</span></h1>
            </div>
            <div class="product">
                <div class="img-cover" v-for="prod in allProducts">
                    <a :href = "`/productpage?slug=${prod.slug}`"><img :src="`/${prod.image}`" class="logo"></a>
                    <div class="layout-tes">
                        <a :href="`/productpage?slug=${prod.slug}`"><p>{{prod.title}}</p></a>
                        <div class="rating">
                            Rating: {{ prod.rating }}<i class="bx bxs-star"></i>
                        </div>
                        <div class="price">
                            R$ {{ prod.price }}
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script lang="ts">
export default {
    name: "ProductsView",
    data() {
        return {
            allProducts: [{
                title:"",
                slug:"",
                description:"",
                price:0,
                image:"",
                tags:"",
                quantity:0,
                rating:0
            }]
        }
    },
    created() {
        this.getProducts();
    },
    methods: {
        getProducts: async function () {
            try {
                let resp = await fetch("http://localhost:3000/products");
                this.allProducts = await resp.json();
            }
            catch(e) {
                alert(e);
            }
        }
    }

}
</script>