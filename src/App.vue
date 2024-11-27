<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header>
    <!-- Desktop Navigation -->
    <nav class="desktop-nav">
      <RouterLink to="/">
        <div class="logo">
          <img src="/logo2.svg" alt=""/>
        </div>
      </RouterLink>
      <RouterLink to="/projekty">projekty</RouterLink>
      <RouterLink to="/kancelar">ateliér</RouterLink>
      <RouterLink to="/kontakt">kontakt</RouterLink>
    </nav>
    <!-- Hamburger Menu Button -->
    <div class="hamburger-menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <!-- Mobile Navigation -->
    <div v-if="isMenuOpen" class="mobile-nav">
      <RouterLink to="/projekty" @click="toggleMenu">projekty</RouterLink>
      <RouterLink to="/kancelar" @click="toggleMenu">ateliér</RouterLink>
      <RouterLink to="/kontakt" @click="toggleMenu">kontakt</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* General Styles */
header {
  max-height: 100vh;
  padding: 0 1rem;
  font-family: Courier, serif;
}

.logo img {
  display: block;
  height: 124px;
  width: 124px;
}

.mobile-nav a {
  text-decoration: none;
  color: #A8A8A8;
  font-weight: lighter;
  font-size: 1rem;
  letter-spacing: 5px;
  padding: 1rem;
}

.desktop-nav a:hover, .desktop-nav .router-link-exact-active,
.mobile-nav a:hover, .mobile-nav .router-link-exact-active {
  color: black;
}

/* Desktop Navigation */
.desktop-nav {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  width: 100%;
  font-size: 1rem;
  letter-spacing: 5px;
  text-align: center;
  justify-content: end;
}

.desktop-nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid gray;
  text-decoration: none;
  color: #A8A8A8;
  font-weight: lighter;
}

.desktop-nav a:first-of-type {
  border: 0;
}


.hamburger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}

.hamburger-menu span {
  display: block;
  height: 3px;
  width: 25px;
  background-color: #000;
  border-radius: 2px;
}

/* Mobile Navigation */
.mobile-nav {
  position: absolute;
  top: 70px;
  right: 1rem;
  background: white;
  border: 1px solid gray;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.mobile-nav a {
  text-align: right;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }
}

@media (min-width: 1025px) {
  .mobile-nav {
    display: none;
  }
}
</style>