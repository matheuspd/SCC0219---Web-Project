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

            <button type="submit" id="logout" v-on:click="logout">Logout</button>
        </div>

        <!-- User profile -->
        <div class="section" v-else-if="user.roles == 'user'" v-show="session">
            <h2>Personal Data</h2>
            <h3 id="name">Name: {{ user.name }}</h3>
            <h4 id="email">Email: {{ user.email }}</h4>
            <h4 id="telephone">Telephone: {{ user.telephone }}</h4>
            <h4 id="address">Address: {{ user.address }}</h4><br>

            <h2>Purchased Products</h2>


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
        session: false,
        user: {}
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
    }
  }
}
</script>