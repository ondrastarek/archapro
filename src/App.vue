<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
      <div class="logo">
        <img src="/logo-lines.svg" alt=""/>
        <span class="company-name">ARCHAPRO</span>
      </div>
      </RouterLink>
      <RouterLink to="/projekty">projekty</RouterLink>
      <RouterLink to="/kancelar">ateliér</RouterLink>
      <RouterLink to="/kontakt">kontakt</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

header {
  max-height: 100vh;
  padding: 0 1rem;
  font-family: Courier, serif;
}

nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 5px;
  text-align: center;
  justify-content: end;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem; /* Space between logo image and company name */
}

.logo img {
  display: block;
  height: 64px;
  width: 64px;
}

.company-name {
  font-size: 1.2rem;
  color: #333; /* Adjust color as needed */
  font-weight: bold;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid gray;
  text-decoration: none;
  color: #A8A8A8;
  font-weight: lighter;
}

nav a:first-of-type {
  border: 0;
}

nav a:hover, .router-link-exact-active {
  color: black;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav {
    width: 100%;
    font-size: 1rem;
    margin: 2rem 0;
  }

  .logo {
    grid-column: span 1;
  }

  nav a {
    padding: 1rem;
  }
}
</style>