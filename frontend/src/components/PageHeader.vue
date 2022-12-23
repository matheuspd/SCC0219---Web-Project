<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
        <h1 class="main-logo">OLYMPUS</h1>
        <ul>

          <RouterLink to="/"><i class="fa fa-house"></i> Home</RouterLink>
          <RouterLink to="/products"><i class="fa-solid fa-bag-shopping"></i> Products</RouterLink>
          <RouterLink to="/about"><i class="fa-solid fa-circle-info"></i> About us</RouterLink>
          <RouterLink to="/contact"><i class="fa fa-phone"></i> Contact</RouterLink>
          <RouterLink to="/login"><i class="fa fa-user"></i> Profile</RouterLink>
          <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</RouterLink>
        </ul>
    </nav>

<RouterView />
</template>

<style scoped>

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
  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
