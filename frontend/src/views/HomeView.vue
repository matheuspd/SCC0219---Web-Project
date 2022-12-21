<template>
    <section class="section">
        <div class="header_section">
            <h1><span>Featured Products</span></h1>
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

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  .logo {
    margin: 0 2rem 0 0;
  }
}

</style>

<script lang="ts">
export default {
name: "HomeView",
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
            resp = await resp.json();
            let len = resp.length;
            for (let i = 0; i < len/4; i++) {
                this.allProducts[i] = resp[i];  
            }
        }
        catch(e) {
            alert(e);
        }
    }
}

}
</script>

