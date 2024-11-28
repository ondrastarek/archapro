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
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.hero-section {
  max-width: 1920px;
  margin: 0 auto;
  padding: 3rem 1rem;
}

.company-name {
  font-family: 'Courier', serif;
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

.sketch-image {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 10rem;
}

.sketch-image img {
  width: 100%; /* Make the images responsive */
  max-width: 900px; /* Limit image size for large screens */
  height: auto; /* Allow natural aspect ratio */
  object-fit: contain; /* Ensure the image is fully visible without cropping */
}

/* Responsive styling */
@media (min-width: 1468px) {
  .company-name {
    font-size: 4rem;
  }

  .tagline {
    font-size: 1.5rem;
  }

  .sketch-image {
    flex-wrap: nowrap; /* Display images side by side */
  }
}

@media (max-width: 767px) {
  .sketch-image {
    padding: 0;
  }

  .index {
    padding-right: 0;
    padding-left: 0;
  }

  .tagline {
    font-size: 1rem; /* Adjust font size for smaller screens */
  }

  .company-name {
    font-size: 2.5rem; /* Adjust heading size for smaller screens */
  }
}
</style>