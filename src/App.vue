<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div id="app">
    <header>
      <!-- Logo and Hamburger Menu Row -->
      <div class="mobile-header">
        <RouterLink to="/">
          <div class="logo">
            <img src="/logo2.svg" alt="Logo" />
          </div>
        </RouterLink>
        <div
          class="hamburger-menu"
          :class="{ open: isMenuOpen }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <!-- Mobile Navigation -->
      <div
        class="mobile-nav"
        :class="{ visible: isMenuOpen }"
      >
        <RouterLink to="/projekty" @click="toggleMenu">projekty</RouterLink>
        <RouterLink to="/kancelar" @click="toggleMenu">ateliér</RouterLink>
        <RouterLink to="/kontakt" @click="toggleMenu">kontakt</RouterLink>
      </div>
      <!-- Desktop Navigation -->
      <nav class="desktop-nav">
        <RouterLink to="/">
          <div class="logo">
            <img src="/logo2.svg" alt="" />
          </div>
        </RouterLink>
        <RouterLink to="/projekty">projekty</RouterLink>
        <RouterLink to="/kancelar">ateliér</RouterLink>
        <RouterLink to="/kontakt">kontakt</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <span>&copy; 2021-2024 ARCHAPRO Liberec s.r.o.</span>
        <span>
          implemented by
          <a href="https://ondrejstarek.cz" target="_blank" rel="noopener noreferrer">ondrejstarek</a>
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* General Styles */
header {
  font-family: Courier, serif;
}

/* Logo and Hamburger Menu Row */
.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo img {
  height: 124px;
  width: auto;
}

/* Hamburger Menu Animation */
.hamburger-menu {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.hamburger-menu span {
  display: block;
  height: 3px;
  width: 25px;
  background-color: #000;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger-menu.open span:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.hamburger-menu.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.open span:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

/* Mobile Navigation Animation */
.mobile-nav {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  display: flex; /* Ensures flexbox is used */
  flex-direction: column; /* Arrange items in a column */
  align-items: center;
  background: white;
  border-top: 1px solid #ccc;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
}

.mobile-nav.visible {
  opacity: 1;
  z-index: 1000;
  visibility: visible;
  transform: translateY(0);
}

.mobile-nav a {
  display: block; /* Ensures each link is a block element */
  text-align: center; /* Centers text horizontally */
  width: 100%; /* Makes each link span the full width of the container */
  padding: 1rem 0;
  text-decoration: none;
  color: #A8A8A8;
  font-size: 1rem;
  letter-spacing: 2px;
  border-bottom: 1px solid #ccc;
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a:hover,
.mobile-nav .router-link-exact-active {
  color: black;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
}

.desktop-nav a:hover,
.desktop-nav .router-link-exact-active {
  color: black;
}

/* Responsive Styles */
@media (max-width: 1024px) {
  .desktop-nav {
    display: none;
  }

  .hamburger-menu {
    display: flex;
  }

  .logo img {
    height: 40px;
    width: auto;
  }
}

@media (min-width: 1025px) {
  .mobile-header {
    display: none;
  }

  .mobile-nav {
    display: none;
  }

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
}
</style>