<template>
   <section>
        <div class="section login_page">
            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input type="text" id="username" placeholder="Enter Username" name="uname" required>
            <br>
        
            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input type="password" id="password" placeholder="Enter Password" name="psw" required>
            <br>
        
            <label>
              <input type="checkbox" checked="true" name="remember"> Remember me
            </label>
            <br>
        
            <span class="psw"> <a href="#">Forgot password?</a></span>
            <br>
        
            <button type="submit" id="submit">Login</button>
            <button type="button" onclick="window.location.href='signin';">Sign In</button>

            <button type="button" class="cancelbtn">Cancel</button>
        
        </div>
    </section>
</template>

<style>

</style>
