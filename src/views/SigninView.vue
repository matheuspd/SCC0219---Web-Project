<template>
    <section>
        <div class="section sign_in_page">
            <i class="fa fa-user"></i> <label for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required>
            <br>

            <i class="fa-solid fa-envelope"></i> <label for="uname"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="uname" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <br>

            <i class="fa fa-lock"></i> <label for="psw"><b>Confirm password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required>
            <br>

            <i class="fa fa-calendar"></i> <label for="psw"><b>Birth</b></label>
            <input type="date" placeholder="Enter Password" name="psw" required>
            <br>

            <label>
              <input type="checkbox" checked="true" name="remember"> I agree with the terms and conditions
            </label>
            <br>

            <button type="submit">Sign In</button>
            <button type="button" class="cancelbtn">Cancel</button>
        </div>
    </section>
</template>

<style>

</style>
