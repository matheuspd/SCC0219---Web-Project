<template>
   <section>
        <div class="section login_page" v-show="!session">
            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="username" type="text" id="username" placeholder="Enter Username" name="uname" required>
            <br>
        
            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input v-model="password" type="password" id="password" placeholder="Enter Password" name="psw" required>
            <br>
        
            <label>
              <input type="checkbox" checked="true" name="remember"> Remember me
            </label>
            <br>
        
            <span class="psw"> <a href="#">Forgot password?</a></span>
            <br>
        
            <button type="submit" id="submit" v-on:click="login">Login</button>
            <button type="button" onclick="window.location.href='signin';">Sign In</button>

            <button type="button" class="cancelbtn">Cancel</button>
        
        </div>
    </section>

    <section>
        <!-- Admin profile -->
        <div class="section" v-if="user.roles == 'admin'" v-show="session">
            <h2>Personal Data</h2>
            <h3 id="name">Name: {{ user.name }}</h3>
            <h4 id="email">Email: {{ user.email }}</h4>
            <h4 id="telephone">Telephone: {{ user.telephone }}</h4>
            <h4 id="address">Address: {{ user.address }}</h4><br>


            <h2>Update Profile</h2>

            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="newUname" type="text" placeholder="Username" name="uname" required>
            <br>

            <i class="fa fa-user"></i> <label for="name"><b>Full name</b></label>
            <input v-model="newName" type="text" placeholder="Full Name" name="name" required>
            <br>

            <i class="fa-solid fa-envelope"></i> <label for="email"><b>Email</b></label>
            <input v-model="newEmail" type="text" placeholder="user@teste.com" name="email" required>
            <br>

            <i class="fa-solid fa-phone"></i> <label for="phone"><b>Telephone</b></label>
            <input v-model="newPhone" type="text" placeholder="(99)9999-9999" name="phone" required>
            <br>

            <i class="fa-solid fa-house"></i> <label for="address"><b>Address</b></label>
            <input v-model="newAddress" type="text" placeholder="Address" name="address" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input v-model="newPsw" type="password" placeholder="Password" name="psw" required>
            <br>

            <button type="submit" id="update" v-on:click="update">Update Profile</button>

            <h2>Add New Admin</h2>

            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="adm.uname" type="text" placeholder="Username" name="uname" required>
            <br>

            <i class="fa fa-user"></i> <label for="name"><b>Full name</b></label>
            <input v-model="adm.name" type="text" placeholder="Full Name" name="name" required>
            <br>

            <i class="fa-solid fa-envelope"></i> <label for="email"><b>Email</b></label>
            <input v-model="adm.email" type="text" placeholder="user@teste.com" name="email" required>
            <br>

            <i class="fa-solid fa-phone"></i> <label for="phone"><b>Telephone</b></label>
            <input v-model="adm.phone" type="text" placeholder="(99)9999-9999" name="phone" required>
            <br>

            <i class="fa-solid fa-house"></i> <label for="address"><b>Address</b></label>
            <input v-model="adm.address" type="text" placeholder="Address" name="address" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input v-model="adm.psw" type="password" placeholder="Password" name="psw" required>
            <br>

            <button type="submit" id="update" v-on:click="addAdmin">Add Admin</button>


            <h2>Remove User/Admin</h2>

            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="removeUser.username" type="text" id="username" placeholder="Enter Username" name="uname" required>
            <br>
            
            <button type="submit" id="addAdmin" v-on:click="rmUser">Remove User/Admin</button>


            <h2>Get All Products</h2>

            <button type="submit" id="addAdmin" v-on:click="getAllProd">Get Products</button>

            <div v-if="user.roles == 'admin'" v-show="session && foundAll" v-for="p in allProd">
              <h4>Title: {{ p.title }}</h4>
              <h4>Slug: {{ p.slug }}</h4>
              <h4>Description: {{ p.description }}</h4>
              <h4>Tags: {{ p.tags }}</h4>
              <h4>Price: {{ p.price }}</h4>
              <h4>Quantity: {{ p.quantity }}</h4>
              <h4>Image Path: {{ p.image }}</h4><br>
            </div>

            <h2>Get Products By Slug</h2>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="slug"><b>Slug</b></label>
            <input v-model="prod.getSlug" type="text" placeholder="Slug" name="slug" required>
            <br>

            <button type="submit" id="addAdmin" v-on:click="getSlugProd">Get Product</button>

            <div v-if="user.roles == 'admin'" v-show="session && foundSlug">
              <h4>Title: {{ slugProd.title }}</h4>
              <h4>Slug: {{ slugProd.slug }}</h4>
              <h4>Description: {{ slugProd.description }}</h4>
              <h4>Tags: {{ slugProd.tags }}</h4>
              <h4>Price: {{ slugProd.price }}</h4>
              <h4>Quantity: {{ slugProd.quantity }}</h4>
              <h4>Image Path: {{ slugProd.image }}</h4><br>
            </div>

            <h2>Add New Product</h2>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="title"><b>Title</b></label>
            <input v-model="prod.title" type="text" placeholder="Title" name="title" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="slug"><b>Slug</b></label>
            <input v-model="prod.slug" type="text" placeholder="Slug" name="slug" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="description"><b>Description</b></label>
            <input v-model="prod.description" type="text" placeholder="Description" name="description" required>
            <br>

            <i class="fa-sharp fa-solid fa-tag"></i> <label for="price"><b>Price</b></label>
            <input v-model="prod.price" type="text" placeholder="0" name="price" required>
            <br>

            <i class="fa-sharp fa-solid fa-tag"></i> <label for="quantity"><b>Quantity</b></label>
            <input v-model="prod.quantity" type="text" placeholder="0" name="quantity" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="tags"><b>Tags</b></label>
            <input v-model="prod.tags" type="text" placeholder="Tags" name="tags" required>
            <br>

            <i class="fa-sharp fa-solid fa-film"></i> <label for="image"><b>Image path</b></label>
            <input v-model="prod.image" type="text" placeholder="Image path" name="image" required>
            <br>

            <button type="submit" id="addAdmin" v-on:click="addProd">Add New Product</button>


            <h2>Update Product</h2>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="title"><b>Title</b></label>
            <input v-model="prod.newTitle" type="text" placeholder="Title" name="title" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="slug"><b>Slug</b></label>
            <input v-model="prod.newSlug" type="text" placeholder="Slug" name="slug" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="description"><b>Description</b></label>
            <input v-model="prod.newDescription" type="text" placeholder="Description" name="description" required>
            <br>

            <i class="fa-sharp fa-solid fa-tag"></i> <label for="price"><b>Price</b></label>
            <input v-model="prod.newPrice" type="text" placeholder="0" name="price" required>
            <br>

            <i class="fa-sharp fa-solid fa-tag"></i> <label for="quantity"><b>Quantity</b></label>
            <input v-model="prod.newQuantity" type="text" placeholder="0" name="quantity" required>
            <br>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="tags"><b>Tags</b></label>
            <input v-model="prod.newTags" type="text" placeholder="Tags" name="tags" required>
            <br>

            <i class="fa-sharp fa-solid fa-film"></i> <label for="image"><b>Image path</b></label>
            <input v-model="prod.newImage" type="text" placeholder="Image path" name="image" required>
            <br>

            <button type="submit" id="addAdmin" v-on:click="updProd">Update Product</button>


            <h2>Remove Product By Slug</h2>

            <i class="fa-sharp fa-solid fa-pen-nib"></i> <label for="slug"><b>Slug</b></label>
            <input v-model="prod.rmSlug" type="text" placeholder="Slug" name="slug" required>
            <br>

            <button type="submit" id="addAdmin" v-on:click="rmProd">Remove Product</button>

            <br>
            <button type="submit" id="logout" v-on:click="logout">Logout</button>
        </div>

        <!-- User profile -->
        <div class="section" v-else-if="user.roles == 'user'" v-show="session">
            <h2>Personal Data</h2>
            <h3 id="name">Name: {{ user.name }}</h3>
            <h4 id="email">Email: {{ user.email }}</h4>
            <h4 id="telephone">Telephone: {{ user.telephone }}</h4>
            <h4 id="address">Address: {{ user.address }}</h4><br>

            <!--<h2>Purchased Products</h2>-->


            <h2>Update Profile</h2>

            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="newUname" type="text" placeholder="Username" name="uname" required>
            <br>

            <i class="fa fa-user"></i> <label for="uname"><b>Full name</b></label>
            <input v-model="newName" type="text" placeholder="Full Name" name="name" required>
            <br>

            <i class="fa-solid fa-envelope"></i> <label for="email"><b>Email</b></label>
            <input v-model="newEmail" type="text" placeholder="user@teste.com" name="email" required>
            <br>

            <i class="fa-solid fa-phone"></i> <label for="phone"><b>Telephone</b></label>
            <input v-model="newPhone" type="text" placeholder="(99)9999-9999" name="phone" required>
            <br>

            <i class="fa-solid fa-house"></i> <label for="address"><b>Address</b></label>
            <input v-model="newAddress" type="text" placeholder="Address" name="address" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input v-model="newPsw" type="password" placeholder="Password" name="psw" required>
            <br>

            <button type="submit" id="logout" v-on:click="update">Update Profile</button>

            <br>
            <button type="submit" id="logout" v-on:click="logout">Logout</button>
        </div>
    </section>

</template>

<style>

</style>

<script lang="ts">

export default {
  name: "ProfileView",
  data() {
    return {
        username:"",
        password:"",
        newUname:"",
        newPsw:"",
        newName:"",
        newEmail:"",
        newPhone:"",
        newAddress:"",
        session: false,
        adm: {
          uname:"",
          psw:"",
          name:"",
          email:"",
          phone:"",
          address:""
        },
        user: {
          username:"",
          password:"",
          name:"",
          email:"",
          telephone:"",
          address:"",
          roles:"user"
        },
        prod: {
          title:"",
          slug:"",
          description:"",
          price:0,
          image:"",
          tags:"",
          quantity:0,
          newTitle:"",
          newSlug:"",
          newDescription:"",
          newPrice:0,
          newImage:"",
          newTags:"",
          newQuantity:0,
          rmSlug:"",
          getSlug:""
        },
        foundAll: false,
        allProd:[{
          title:"",
          slug:"",
          description:"",
          price:0,
          image:"",
          tags:"",
          quantity:0,
        }],
        foundSlug: false,
        slugProd: {
          title:"",
          slug:"",
          description:"",
          price:0,
          image:"",
          tags:"",
          quantity:0,
        },
        removeUser: {
          username:"",
          password:"",
          name:"",
          email:"",
          telephone:"",
          address:"",
          roles:"user"
        }
    }
  },
  created() {
    this.getUser();
  },
  methods: {
    login: async function() {
      try{
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            username: this.username,
            password: this.password
          })
        };
        let resp = await fetch("http://localhost:3000/users/authenticate", requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));
        
        const token = resp.token;
        const id = resp.user._id;
        //const isAdmin = resp.roles[0];
        
        sessionStorage.setItem("id", id);
        sessionStorage.setItem("token", token);
        //console.log(sessionStorage.getItem("id"));

        this.session = true;
        this.getUser();
      }
      catch(e) {
        alert("User or password incorret.");
      }
    },
    getUser: async function() {
      try {
        let resp = await fetch("http://localhost:3000/users/" + sessionStorage.getItem("id"));
        this.user = await resp.json();
        this.session = true;
      }
      catch(e) {
        this.session = false;
      }
    },
    logout() {
      this.session = false;
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("token");
    },
    addAdmin: async function () {
      try{
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token"),
            username: this.adm.uname,
            password: this.adm.psw,
            name:this.adm.name,
            roles: "admin",
            email:this.adm.email,
            telephone: this.adm.phone,
            address: this.adm.address,
          })
        };
        let resp = await fetch("http://localhost:3000/users", requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));

        if(resp.message) {
            alert("Admin succesfully added.");
          }
          else{alert("Error adding the admin.")}
      }
      catch(e) {
        alert("Error adding the admin.");
      }
    },
    rmUser: async function () {
      try{
        const requestOptions1 = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token")
          })
        };
        let resp1 = await fetch("http://localhost:3000/users/" + this.removeUser.username, requestOptions1);
        this.removeUser = await resp1.json();
        //console.log(this.removeUser);

        if(this.removeUser.username == this.user.username) {
          alert("Cannot remove the current admin.");
          return;
        }

        if(this.removeUser.username == "admin") {
          alert("Cannot remove the main admin.");
          return;
        }

        const requestOptions2 = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token")
          })
        };
        let resp2 = await fetch("http://localhost:3000/users/" + this.removeUser._id, requestOptions2);
        resp2 = await resp2.json();
        //console.log("resp: " + JSON.stringify(resp2));

        if(resp2.message) {
            alert("User succesfully removed.");
          }
          else{alert("Error removing the user.")}
      }
      catch(e) {
        alert("Error removing the user.");
      }
    },
    update: async function() {
      try{
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token"),
            username: this.newUname,
            password: this.newPsw,
            name:this.newName,
            roles: this.user.roles,
            email:this.newEmail,
            telephone: this.newPhone,
            address: this.newAddress,
          })
        };
        let resp = await fetch("http://localhost:3000/users/" + this.user._id, requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));

        if(resp.message) {
            alert("User succesfully updated.");
            window.location.replace("/login");
          }
          else{alert("Error updating the profile.")}
      }
      catch(e) {
        alert("Error updating the profile.");
      }
    },
    addProd: async function() {
      try{
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token"),
            title: this.prod.title,
            slug: this.prod.slug,
            description: this.prod.description,
            price: this.prod.price,
            image: this.prod.image,
            tags: this.prod.tags.split(' ')   ,
            quantity: this.prod.quantity         
          })
        };
        let resp = await fetch("http://localhost:3000/products", requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));
        if(resp.message) {
            alert("Product succesfully added.");
        }
        else{alert("Error adding new product.")}
      }
      catch(e) {
        alert("Error adding new product.");
      }
    },
    updProd: async function() {
      try{
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token"),
            title: this.prod.newTitle,
            slug: this.prod.newSlug,
            description: this.prod.newDescription,
            price: this.prod.newPrice,
            image: this.prod.newImage,
            tags: this.prod.newTags.split(' '),
            quantity: this.prod.newQuantity         
          })
        };
        let product = await fetch("http://localhost:3000/products/" + this.prod.newSlug);
        product = await product.json();
        //console.log("resp: " + JSON.stringify(product));
        let id = product._id;

        let resp = await fetch("http://localhost:3000/products/" + id, requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));
        if(resp.message) {
            alert("Product succesfully updated.");
        }
        else{alert("Error updating product.")}
      }
      catch(e) {
        alert("Error updating product.");
      }
    },
    rmProd: async function() {
      try{
        const requestOptions = {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            token: sessionStorage.getItem("token")        
          })
        };
        let product = await fetch("http://localhost:3000/products/" + this.prod.rmSlug);
        product = await product.json();
        //console.log("resp: " + JSON.stringify(product));
        let id = product._id;

        let resp = await fetch("http://localhost:3000/products/" + id, requestOptions);
        resp = await resp.json();
        //console.log("resp: " + JSON.stringify(resp));
        if(resp.message) {
            alert("Product succesfully removed.");
        }
        else{alert("Error removing product.")}
      }
      catch(e) {
        alert("Error removing product.");
      }
    },
    getAllProd: async function() {
      try {
        let resp = await fetch("http://localhost:3000/products");
        this.allProd = await resp.json();
        this.foundAll = true;
      }
      catch(e) {
        this.foundAll = false;
      }
    },
    getSlugProd: async function() {
      try {
        let resp = await fetch("http://localhost:3000/products/" + this.prod.getSlug);
        this.slugProd = await resp.json();
        this.foundSlug = true;
      }
      catch(e) {
        this.foundSlug = false;
      }
    }
  }
}
</script>