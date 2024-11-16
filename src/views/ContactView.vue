<template>
  <div class="contact">
    <div class="contact-grid">
      <!-- First Row -->
      <div class="row first-row">
        <div class="column contact-details">
          <div class="owner-contact">
            <h4>Tomáš Štejfa</h4>
            <p>+420 123 456 789</p>
          </div>
          <div class="owner-contact">
            <h4>Lenka Kimmerová</h4>
            <p>+420 123 456 789</p>
          </div>
        </div>
        <div class="column office-address">
          <p>Myslbekova 206, 463 03 Stráž nad Nisou</p>
        </div>
      </div>
      <!-- Second Row -->
      <div class="row map-row">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.104260729439!2d15.041442657201937!3d50.791058028649125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470936cb1ba146a9%3A0x7aa3f06a7400ef6f!2sMyslbekova%20206%2C%20463%2003%20Str%C3%A1%C5%BE%20nad%20Nisou!5e0!3m2!1scs!2scz!4v1731789090269!5m2!1scs!2scz"
          width="1200"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
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
  padding: 6rem;
  background-color: #fff;
}

.contact-grid {
  display: grid;
  grid-template-rows: auto auto;
  gap: 4rem;
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.first-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-details {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.office-address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.map-row {
  text-align: center;
}

.owner-contact {
  margin-bottom: 1.5rem;
}

h4 {
  color: #333;
  font-size: 24px;
}

p {
  color: #555;
  font-size: 20px;
  line-height: 2;
}
</style>
