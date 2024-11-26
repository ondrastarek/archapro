<template>
  <div class="contact">
    <div class="contact-header">
      <h1>ARCHAPRO Liberec s.r.o.</h1>
    </div>
    <div class="contact-container">
      <!-- First Row -->
      <div class="contact-details">
        <div class="details">
          <div class="detail-item">
            <h4>Sídlo firmy:</h4>
            <p>28. října 2362/36, 460 01 Jablonec nad Nisou</p>
          </div>
          <div class="detail-item">
            <h4>Navštívit nás můžete na:</h4>
            <p>Myslbekova 206, 463 03 Stráž nad Nisou</p>
          </div>
          <div class="detail-item">
            <h4>IČO:</h4>
            <p>10796690</p>
          </div>
          <div class="detail-item">
            <h4>ID Datové schránky:</h4>
            <p>arbnht9</p>
          </div>
          <div class="detail-item">
            <h4>Telefon:</h4>
            <p><a href="tel:+420602642052">+420 602 642 052</a></p>
          </div>
          <div class="detail-item">
            <h4>E-mail:</h4>
            <p><a href="mailto:info@archaproliberec.cz">info@archaproliberec.cz</a></p>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d289.104260729439!2d15.041442657201937!3d50.791058028649125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470936cb1ba146a9%3A0x7aa3f06a7400ef6f!2sMyslbekova%20206%2C%20463%2003%20Str%C3%A1%C5%BE%20nad%20Nisou!5e0!3m2!1scs!2scz!4v1731789090269!5m2!1scs!2scz"
          width="100%"
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
  name: 'ContactView',
};
</script>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4.8rem;
}

.contact-header {
  max-width: 1000px;
  margin-bottom: 4.8rem;
}

.contact-header h1 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.contact-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 1500px;
  width: 100%;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

.detail-item h4 {
  font-size: 18px;
  margin-bottom: 0.5rem;
}

.detail-item p {
  color: #7f8c8d;
  font-size: 16px;
  line-height: 1.6;
}

.detail-item a {
  color: #3498db;
  text-decoration: none;
}

.map {
  margin-top: 3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

iframe {
  border: none;
  border-radius: 8px;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .details {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .details {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>