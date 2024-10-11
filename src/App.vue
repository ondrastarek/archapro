<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
      <div class="logo">
        <img src="/logo.svg" alt=""/>
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
  letter-spacing: 8px;
  text-align: center;
  //border: 2px solid gray;
  text-transform: uppercase;
  justify-content: end;
}

.logo img {
  display: block;
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 2px solid gray;
  text-decoration: none;
  color: black;
  font-weight: bold;

}

nav a:first-of-type {
  border: 0;

}

nav a:hover, .router-link-exact-active {
  color: #8C3B3B;
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