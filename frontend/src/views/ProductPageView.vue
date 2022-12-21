<script setup lang="ts">
import AddToCartButton from "../components/AddToCartButton.vue";
</script>

<template>
        <section class="section">
            <div class="product">
                <div class="img-cover">
                    <img :src="`/${product.image}`" class="logo">
                    <div class="layout-tes">
                        <h2>{{product.title}}</h2>
                        <div class="rating">
                            Rating: {{ product.rating }}<i class="bx bxs-star"></i>
                        </div>

                        <div class="price">
                            <h3>R$ {{ product.price }},00</h3>
                        </div> 

                        <p>{{product.description}}</p><br>                        
                        
                        <p v-show="stock">Available stock</p>
                        <p v-show="!stock">Unavailable stock</p>
                        <br> 
                        
                        <div  v-show="stock" >
                            <AddToCartButton />
                        </div>                 
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

<script lang="ts">
export default {
    name: "ProfileView",
    data() {
      return {
          product: {
            title:"",
            slug:"",
            description:"",
            price:0,
            image:"",
            tags:"",
            quantity:0,
            rating:0
          },
          slug:"",
          stock:false
      }
    },
    created() {
      this.slug = this.getUrlVar();
      this.getProd();
    },
    methods: {
      getUrlVar() {
        let search = window.location.search.replace(/^\?/,'').replace(/\+/g,' ');
        let slug  = search.split('=')[1];
        //console.log(slug);
        
        return slug;
      },
      getProd: async function () {
        try {
            let resp = await fetch("http://localhost:3000/products/" + this.slug);
            this.product = await resp.json();
            if(this.product.quantity > 0) {
                this.stock = true;
            }
        }
        catch(e) {
            alert(e);
        }
      }
    }
  }
  </script>