<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { onMounted, onUnmounted, ref, watch } from 'vue'

const isMenuOpen = ref(false)
const mobileNavRef = ref(null)
const menuButtonRef = ref(null)
const mobileNavId = 'mobile-nav'
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleClickOutside = (event) => {
  if (!isMenuOpen.value) {
    return
  }

  const nav = mobileNavRef.value
  const button = menuButtonRef.value

  if (
    nav &&
    button &&
    !nav.contains(event.target) &&
    !button.contains(event.target)
  ) {
    closeMenu()
  }
}

const handleEscape = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div id="app">
    <header>
      <div class="mobile-header">
        <RouterLink to="/">
          <div class="logo">
            <img src="/logo2.svg" alt="Logo" />
          </div>
        </RouterLink>

        <button
          ref="menuButtonRef"
          class="hamburger-menu"
          :class="{ open: isMenuOpen }"
          type="button"
          :aria-expanded="String(isMenuOpen)"
          :aria-controls="mobileNavId"
          aria-label="Otevřít navigaci"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        :id="mobileNavId"
        ref="mobileNavRef"
        class="mobile-nav"
        :class="{ visible: isMenuOpen }"
      >
        <RouterLink to="/projekty" @click="closeMenu">projekty</RouterLink>
        <RouterLink to="/kancelar" @click="closeMenu">ateliér</RouterLink>
        <RouterLink to="/kontakt" @click="closeMenu">kontakt</RouterLink>
      </div>

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

    <footer class="footer">
      <div class="footer-content">
        <span>&copy; 2021-2026 ARCHAPRO Liberec s.r.o.</span>
        <span>
          implemented by
          <a
            href="https://www.linkedin.com/in/starek-ondrej"
            target="_blank"
            rel="noopener noreferrer"
            >ondrejstarek</a
          >
        </span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header {
  font-family: var(--font-family-display);
}

.mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-page-mobile);
  height: var(--header-height-mobile);
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo img {
  height: 124px;
  width: auto;
}

.hamburger-menu {
  display: none;
  border: 0;
  background: transparent;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  justify-content: center;
  min-width: var(--touch-target-size);
  min-height: var(--touch-target-size);
  cursor: pointer;
  transition: transform var(--transition-base);
}

.hamburger-menu span {
  display: block;
  height: 3px;
  width: 25px;
  background-color: var(--color-accent);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.hamburger-menu:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
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

.mobile-nav {
  position: absolute;
  top: var(--header-height-mobile);
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  box-shadow: var(--shadow-menu);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition:
    opacity var(--transition-base),
    transform var(--transition-base),
    visibility var(--transition-base);
}

.mobile-nav.visible {
  opacity: 1;
  z-index: 1000;
  visibility: visible;
  transform: translateY(0);
}

.mobile-nav a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  min-height: var(--touch-target-size);
  padding: var(--space-md) 0;
  text-decoration: none;
  color: var(--color-text-subtle);
  font-size: 1rem;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--color-border);
}

.mobile-nav a:last-child {
  border-bottom: none;
}

.mobile-nav a:hover,
.mobile-nav .router-link-exact-active {
  color: var(--color-accent);
}

.mobile-nav a:focus-visible,
.desktop-nav a:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
  background-color: var(--color-surface-muted);
}

.desktop-nav {
  display: none;
}

.desktop-nav a:hover,
.desktop-nav .router-link-exact-active {
  color: var(--color-accent);
}

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
    padding: var(--space-md);
    border-left: 1px solid var(--color-border-strong);
    text-decoration: none;
    color: var(--color-text-subtle);
    font-weight: lighter;
  }

  .desktop-nav a:first-of-type {
    border: 0;
  }
}
</style>
