<template>
  <div class="index">
    <header class="hero-section">
      <h1 class="company-name">ARCHAPRO Liberec s.r.o.</h1>
      <p class="tagline">architektonická a projekční kancelář, statika pozemních staveb</p>
      <div class="sketch-image">
        <img src="/index_bg.jpg" alt="" />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'IndexView'
}
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  background-color: white;
}

.hero-section {
  max-width: 1920px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.company-name {
  font-family: 'Courier', serif; /* Changed to match office-intro font */
  font-size: 3rem;
  font-weight: lighter;
  color: #333;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

.sketch-image img {
  width: 100%;
  max-width: 1100px;
  height: auto;
  margin-top: 2rem;
  filter: grayscale(100%);
}

/* Responsive styling */
@media (min-width: 768px) {
  .company-name {
    font-size: 4rem;
  }

  .tagline {
    font-size: 1.5rem;
  }
}
</style>
