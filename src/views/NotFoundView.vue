<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Tato stránka neexistuje.</p>
    <RouterLink to="/" class="back-home">Zpět na úvod</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  min-height: 45vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--space-4xl) var(--space-lg);
}

.not-found h1 {
  font-family: var(--font-family-display);
  font-size: 4rem;
  margin-bottom: var(--space-xs);
}

.not-found p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-lg);
}

.back-home {
  text-decoration: none;
  color: #111;
  border: 1px solid #111;
  padding: var(--space-xs) var(--space-md);
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.back-home:hover {
  background-color: #111;
  color: #fff;
}
</style>
