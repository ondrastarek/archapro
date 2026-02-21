<template>
  <div class="index">
    <div class="hero-section">
      <h1 class="company-name">ARCHAPRO Liberec s.r.o.</h1>
      <p class="tagline">architektonická a projekční kancelář, statika pozemních staveb</p>
      <div class="sketch-image">
        <img src="/index-bg-first.jpg" alt="" />
        <img src="/index-bg-second.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: var(--color-background);
  overflow-x: hidden;
}

.hero-section {
  max-width: 1920px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.company-name {
  font-family: var(--font-family-display);
  font-size: 3rem;
  font-weight: lighter;
  color: var(--color-text-primary);
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.2rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.sketch-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 10rem;
}

.sketch-image img {
  width: 100%;
  max-width: 900px;
  height: auto;
  object-fit: contain;
}

@media (min-width: 1468px) {
  .company-name {
    font-size: 4rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .sketch-image {
    flex-wrap: nowrap;
  }
}

@media (max-width: 767px) {
  .sketch-image {
    padding: 0;
    margin-top: 2rem;
  }

  .index {
    padding-right: 0;
    padding-left: 0;
  }

  .tagline {
    font-size: 1rem;
  }

  .company-name {
    font-size: 2.5rem;
  }
}
</style>
