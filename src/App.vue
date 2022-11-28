<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <header>
    <nav>
        <h1 class="main-logo">OLYMPUS</h1>
        <ul>

          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
          <RouterLink to="/about">About us</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/cart">Cart</RouterLink>
        </ul>
    </nav>

  </header>

  <RouterView />



  <section class="footer">
        <br>
        <p>Copyright © 2021-2022 OLYMPUS LTDA.</p>
        <p><a href="#">Trabalhe conosco</a> - <a href="#">Termos e condições</a> - <a href="#">Como cuidamos da sua privacidade</a> - <a href="#">Acessibilidade</a> - <a href="#">Contato</a> - <a href="#">Informações sobre seguros</a></p>
        <p>CNPJ n.º 12.345.678/9012-34 / Av. Brasil, nº 1.234, Vila 2, São Carlos/SP - CEP 12345-678 - empresa do grupo Olympus.</p>
    </section>
    
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
