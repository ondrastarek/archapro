<template>
  <div class="contact">
    <div class="info-container">
      <h3>Hlavní 123, Praha, Česká republika</h3>
      <h3>Jan Novák</h3>
      <p><strong>Email:</strong> info@archapro.cz</p>
      <p><strong>Telefon:</strong> +420 123 456 789</p>
      <h3>Petra Svobodová</h3>
      <p><strong>Email:</strong> info@archapro.cz</p>
      <p><strong>Telefon:</strong> +420 123 456 789</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView'
}
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.8rem;
  background-color: #fff;
}

.info-container {
  text-align: center;
}

.info-container h2 {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.info-container p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.info-container h3 {
  font-size: 1.5rem;
  color: #333;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}
</style>
