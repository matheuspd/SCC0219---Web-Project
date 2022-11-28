<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
    <nav>
        <h1 class="main-logo">OLYMPUS</h1>
        <ul>

          <RouterLink to="/"><i class="fa fa-house"></i> Home</RouterLink>
          <RouterLink to="/products"><i class="fa-solid fa-bag-shopping"></i> Products</RouterLink>
          <RouterLink to="/about"><i class="fa-solid fa-circle-info"></i> About us</RouterLink>
          <RouterLink to="/contact"><i class="fa fa-phone"></i> Contact</RouterLink>
          <RouterLink to="/login"><i class="fa fa-user"></i> Login</RouterLink>
          <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</RouterLink>
        </ul>
    </nav>

</header>

<RouterView />
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
  text-decoration: none;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--header-gap) / 2);
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
