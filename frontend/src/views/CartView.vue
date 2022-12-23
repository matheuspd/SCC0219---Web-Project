<template>
        <div class="product">
            <div v-show="emptyCart">
                <h1>Empty Cart</h1>
            </div>
            <div v-show="!emptyCart" v-for="prod in orders" >                
                <div class="img-cover" v-if="prod.user == userId && prod.status=='created'" v-for="(p, index) in products" :key="index">
                    <img :src="`/${p.image}`" class="logo">
                    <div class="layout-tes">
                        <h3>{{p.title}}</h3>
                        <div class="rating">
                            Rating: {{ p.rating }}<i class="bx bxs-star"></i>
                        </div> 
                        <p>{{ p.description }}</p> 
                        <div class="quantity">
                            <h4>Quantity: {{ prod.items[index].quantity }}</h4>
                        </div> 
                        <div class="price">
                            <h4>Price: R${{ p.price * prod.items[index].quantity }},00</h4>
                        </div>
                    </div>
                </div>                
            </div>
        </div>

        <div class="finish-purchase" v-show="!emptyCart">

            <div>
                <h2>TOTAL: R${{ total }},00</h2> 
            </div>

            <button v-on:click="finishPurchase" id="buy-product-bttn">Finish Purchase</button>
        </div>

</template>

<style scoped>

h1 {
    text-align: center;
    margin: 20px;
    padding: 20px;
}

.img-cover {
    float:left;
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
                    product: "",
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
            }],
            total:0
        }
    },
    created() {
        this.getOrders();
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
                this.userId = id;

                let resp = await fetch("http://localhost:3000/orders/user/" + id, requestOptions);
                this.orders = await resp.json();
                //console.log(this.orders)
                for(let i = 0; i < this.orders.length; i++) {
                    if(this.orders.length == 0) {
                        this.emptyCart = true;
                        break;
                    }
                    if(this.orders[i].status == "created") {
                        this.emptyCart = false;
                        this.orders = [{
                            user: this.orders[i].user,
                            items: this.orders[i].items,
                            status: this.orders[i].status
                        }]
                        break;
                    }                   
                }
                this.getProdById();
            }
            catch(e) {
                alert(e);
            }
        },
        getProdById: async function() {
            try {                
                for(let i = 0; i < this.orders.length; i++) {
                    if(this.orders[i].status == "created" && this.orders[i].user == sessionStorage.getItem("id")) {
                        //console.log(this.orders[i])
                        for(let j = 0; j < this.orders[i].items.length; j++) {
                            const requestOptions = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ 
                                    token: sessionStorage.getItem("token")
                                })
                            };
                            let resp = await fetch("http://localhost:3000/products/user/" + this.orders[i].items[j].product, requestOptions);
                            this.products[j] = await resp.json();
                            this.total += this.orders[i].items[j].quantity * this.products[j].price
                        }
                        //console.log(this.products)
                        return;
                    }
                }                
            } catch (e) {
                alert(e);
            }
        },
        finishPurchase: async function() {
            try {
                for(let i = 0; i < this.orders.length; i++) {
                    if(this.orders[i].status == "created" && this.orders[i].user == sessionStorage.getItem("id")) {
                        // atualizar order
                        const requestOptions1 = {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ 
                                token: sessionStorage.getItem("token"),
                                user: sessionStorage.getItem("id"),
                                status: "done",
                                items: this.orders[i].items
                            })
                        };
                        let resp1 = await fetch("http://localhost:3000/orders", requestOptions1);
                        resp1 = await resp1.json();
                        //console.log("resp: " + JSON.stringify(resp1));

                        // atualizar dados do produto
                        for(let j = 0; j < this.orders[i].items.length; j++) {
                            const requestOptions2 = {
                                method: "PUT",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ 
                                    token: sessionStorage.getItem("token"),
                                    title: this.products[j].title,
                                    slug: this.products[j].slug,
                                    description: this.products[j].description,
                                    price: this.products[j].price,
                                    image: this.products[j].image,
                                    tags: this.products[j].tags,
                                    quantity: this.products[j].quantity - this.orders[i].items[j].quantity      
                                })
                            };                    
                            let resp2 = await fetch("http://localhost:3000/products/" + this.orders[i].items[j].product, requestOptions2);
                            resp2 = await resp2.json();
                            //console.log("resp: " + JSON.stringify(resp2));
                        }
                        break;
                    }
                }
                alert("Purchase finished.")
                window.location.replace("/");
            }
            catch(e) {
                alert(e);
            }
        }        
    }
}
</script>