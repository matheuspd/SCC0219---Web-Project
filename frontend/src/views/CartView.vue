<template>
        <div class="product">
            <div v-show="emptyCart">
                <h1>Empty Cart</h1>
            </div>
            <div v-show="!emptyCart" v-for="prod in orders">
                <div v-if="prod.user == userId && prod.status=='created'" class="img-cover">
                    <img src="@/assets/img/shirts/1.jpg" class="logo">
                    <div class="layout-tes">
                        <h3>Product Name</h3>
                        <div class="rating">
                            <i class="bx bxs-star"></i>
                        </div>

                        <div class="price">
                            <h4>500R$</h4>
                        </div> 

                        <p>Description of the product</p>

                    </div>
                </div>
            </div>

        </div>

        <div class="finish-purchase" v-show="!emptyCart">

            <div>
                <h2>TOTAL: 2000R$</h2> 
            </div>

            <button v-on:click="" id="buy-product-bttn">Finish Purchase</button>
        </div>

</template>

<style scoped>

h1 {
    text-align: center;
    margin: 20px;
    padding: 20px;
}

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
    name: "CartView",
    data() {
        return {
            orders: [{
                user:"",
                status:"created",
                items:[{
                    quantity:1,
                    _id: "",
                    price:0
                }]
            }],
            emptyCart:true,
            userId: "",
            products: [{
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
        this.getOrders();
        this.getUser();
    },
    methods: {
        getOrders: async function () {
            try {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        token: sessionStorage.getItem("token")
                    })
                };
                const id = sessionStorage.getItem("id");
                if(id == null) {
                    this.emptyCart = true;
                    return;
                }

                let resp = await fetch("http://localhost:3000/orders/user/" + id, requestOptions);
                this.orders = await resp.json();
                //console.log(this.orders)
                if(this.orders) {
                    this.emptyCart = false;
                }
                else{
                    this.emptyCart = true;
                }
            }
            catch(e) {
                alert(e);
            }
        },
        getUser() {
            let id = sessionStorage.getItem("id");
            if(id != null) this.userId = id;
        },
        getProdById: async function() {

        }
    }

}
</script>