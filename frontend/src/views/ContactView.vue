<template>
   <section>
        <div class="section contact_page">
            <h2>Contact us</h2>
            <p> Give us a shout, we will be happy to help you.<br>
                We will reply to your email within 24 working hours.
            </p>
            <br>

            <form method="post" id="contact-page" accept-charset="UTF-8" class="contact-form">

                <i class="fa fa-user"></i> <label for="name">Name</label>
                <input type="text" id="name" class="input-full" name="contact[name]" autocapitalize="words" value="">

                <i class="fa fa-envelope"></i> <label for="email">Email</label>
                <input type="email" id="email" class="input-full" name="contact[email]" autocorrect="off" autocapitalize="off" value="">
            
                <i class="fa fa-message"></i> <label for="message">Message</label>
                <textarea rows="5" id="message" class="input-full" name="contact[body]"></textarea>

                <br>
                <button type="submit" class="btn">
                    Send
                </button>
            </form>
        </div>
    </section>
    
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
