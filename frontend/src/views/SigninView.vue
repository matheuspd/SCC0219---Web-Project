<template>
    <section>
        <div class="section sign_in_page">
            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input v-model="username" type="text" placeholder="Username" name="uname" required>
            <br>

            <i class="fa fa-user"></i> <label for="uname"><b>Full name</b></label>
            <input v-model="name" type="text" placeholder="Full Name" name="name" required>
            <br>

            <i class="fa-solid fa-envelope"></i> <label for="email"><b>Email</b></label>
            <input v-model="email" type="text" placeholder="user@teste.com" name="email" required>
            <br>

            <i class="fa-solid fa-phone"></i> <label for="phone"><b>Telephone</b></label>
            <input v-model="telephone" type="text" placeholder="(99)9999-9999" name="phone" required>
            <br>

            <i class="fa-solid fa-house"></i> <label for="address"><b>Address</b></label>
            <input v-model="address" type="text" placeholder="Address" name="address" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input v-model="password" type="password" placeholder="Password" name="psw" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Confirm password</b></label>
            <input v-model="confpsw" type="password" placeholder="Password" name="psw" required>
            <br>

            <!--
            <i class="fa fa-calendar"></i> <label for="psw"><b>Birth</b></label>
            <input type="date" placeholder="Enter Password" name="psw" required>
            <br>
            -->

            <label>
              <input type="checkbox" checked="true" name="remember"> I agree with the terms and conditions
            </label>
            <br>

            <button type="submit" v-on:click="signin">Sign In</button>
            <button type="button" class="cancelbtn" >Cancel</button>
        </div>
    </section>
</template>

<style>

</style>
<script lang="ts">
export default {
    name: "SigninView",
    data() {
      return {
          username:"",
          name:"",
          email:"",
          password:"",
          address:"",
          telephone:"",
          confpsw:""
      }
    },
    methods: {
      signin: async function() {
        if(this.password != this.confpsw) {
            alert("The passwords must be the same.");
            return;
        }
        try{
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
              username: this.username,
              password: this.password,
              roles: "user",
              name: this.name,
              email:this.email,
              address: this.address,
              telephone: this.telephone
            })
          };
          let resp = await fetch("http://localhost:3000/users/", requestOptions);
          resp = await resp.json();
          //console.log("resp: " + JSON.stringify(resp));
          if(resp.message) {
            alert("User succesfully registered.");
            window.location.replace("/login");
          }
          else{alert("Error registering (username/email already taken or incorrectly filled data).")}
        }
        catch(e) {
          alert("Error registering (username/email already taken or incorrectly filled data).");
        }
      }
    }
  }
  </script>