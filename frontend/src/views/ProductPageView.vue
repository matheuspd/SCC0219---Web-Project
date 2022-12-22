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
                        
                        <p v-show="stock">Available stock: {{ product.quantity }} remaining products.</p>
                        <p v-show="!stock">Unavailable stock</p>
                        <br> 
                        
                        <div v-show="stock">
                            <i class="fa fa-tag"></i> <label for="uname"><b>Quantity</b></label>
                            <input v-model="quantity" style="width:10%; margin:10px" type="number" id="quantity" placeholder=1 name="quantity" required>
                            <br>
                            <button v-on:click="addProd" id="buy-product-bttn">ADD TO CART</button>
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
    name: "ProductPageView",
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
          stock:false,
          order: {
            number:"",
            user: "",
            status:"created",
            items: [{
                quantity:0,
                product: "",
                price:0
            }]
          },
          quantity:1
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
      },
      addProd: async function() {
        try {
            if(sessionStorage.getItem("id") == null) {
                alert("You must be logged to buy a product");
                return;
            }

            if(this.product.quantity <= 0) {
                alert("Product out of stock");
                return;
            }

            if(this.quantity > this.product.quantity) {
                alert("You can't add more products than the available stock");
                return;
            }

            const requestOptions1 = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    token: sessionStorage.getItem("token")
                })
            };
            // Get user orders
            let resp1 = await fetch("http://localhost:3000/orders/user/" + sessionStorage.getItem("id"), requestOptions1);
            resp1 = await resp1.json();

            if(resp1.length == 0) {
                this.order.items[0].quantity = this.quantity;
                this.order.items[0].price = this.product.price * this.quantity;
                this.order.items[0].product = this.product._id;
                //console.log(this.order.items);
                
                const requestOptions2 = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        token: sessionStorage.getItem("token"),
                        user: sessionStorage.getItem("id"),
                        items: this.order.items
                    })
                };
                let resp2 = await fetch("http://localhost:3000/orders", requestOptions2);
                this.product = await resp2.json();

                if(this.product) {
                    alert("Product added to cart.");
                    window.location.replace("/cart");
                }
                else{
                    alert("Error adding product to cart.");
                    window.location.replace("/products");
                }
            }
            else {
                let found = 0;
                for(let i = 0; i < resp1.length; i++) {
                    if(resp1[i].status == "created") {
                        this.order = resp1[i];
                        found = 1;
                        break;
                    }
                }
                //console.log(this.order);
                //console.log(found);
                if(found == 1) {
                    let foundItem = 0;
                    let index = this.order.items.length;
                    for(let i = 0; i < this.order.items.length; i++) {
                        if(this.product._id == this.order.items[i].product) {
                            index = i;
                            foundItem = 1;
                            break;
                        }
                    }
                    //console.log(foundItem);
                    //console.log(index);
                    if(foundItem == 1) {
                        //console.log(this.order.items);
                        this.order.items[index].quantity +=  this.quantity;
                        this.order.items[index].price += this.product.price * this.quantity;
                        //console.log(this.order.items);  
                    }
                    else {
                        //console.log(this.order.items);
                        this.order.items[index] = {
                            quantity: this.quantity,
                            price: this.product.price * this.quantity,
                            product: this.product._id
                        }
                        //console.log(this.order.items);
                    }

                    const requestOptions2 = {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ 
                            token: sessionStorage.getItem("token"),
                            user: sessionStorage.getItem("id"),
                            items: this.order.items
                        })
                    };
                    let resp2 = await fetch("http://localhost:3000/orders", requestOptions2);
                    this.product = await resp2.json();
                
                    if(this.product) {
                        alert("Product added to cart.");
                        window.location.replace("/cart");
                    }
                    else{
                        alert("Error adding product to cart.");
                        window.location.replace("/products");
                    }
                }
                else {
                    this.order.items[0].quantity = this.quantity;
                    this.order.items[0].price = this.product.price * this.quantity;
                    this.order.items[0].product = this.product._id;
                    //console.log(this.order.items);
                    
                    const requestOptions2 = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ 
                            token: sessionStorage.getItem("token"),
                            user: sessionStorage.getItem("id"),
                            items: this.order.items
                        })
                    };
                    let resp2 = await fetch("http://localhost:3000/orders", requestOptions2);
                    this.product = await resp2.json();

                    if(this.product) {
                        alert("Product added to cart.");
                        window.location.replace("/cart");
                    }
                    else{
                        alert("Error adding product to cart.");
                        window.location.replace("/products");
                    }
                }
            }
        }
        catch(e) {
            alert("Error adding product to cart." + e);
            window.location.replace("/products");
        }
      }
    }
  }
  </script>