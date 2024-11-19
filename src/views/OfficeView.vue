<template>
  <div class="office">
    <header class="office-header">
      <h1>Naše Služby</h1>
      <p class="office-intro">
        Jsme architektonická a projekční kancelář zaměřená na komplexní služby v oblasti architektury, statiky a pozemních staveb. Naším cílem je poskytovat kvalitní služby od návrhu po realizaci.
      </p>
    </header>

    <section class="services">
      <div class="service" v-for="(service, index) in services" :key="index">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OfficeView',
  data() {
    return {
      services: [
        {
          title: 'Architektonické a projekční práce',
          description: 'Kompletní řešení od studie po stavebně technickou projektovou dokumentaci, včetně poradenství a řešení interiéru.'
        },
        {
          title: 'Pasportizace staveb',
          description: 'Podrobné zaměření stávajících objektů a vytvoření dokumentace aktuálního stavu.'
        },
        {
          title: 'Statika staveb',
          description: 'Stavebně konstrukční řešení staveb, statické posudky a návrhy.'
        },
        {
          title: 'Autorský a technický dozor',
          description: 'Dohled na realizaci staveb, zajištění souladu projektu s jeho realizací, včetně dodržování platné legislativy a řízení ekonomiky stavby.'
        },
        {
          title: 'Výkaz výměr a položkový rozpočet',
          description: 'Výkaz výměr a položkový rozpočet stavby jsou důležitými podklady pro efektivní realizaci stavebního díla a kontrolu přiměřenosti nákladů na výstavbu.'
        },
        {
          title: 'Inženýrská činnost',
          description: 'Zajištění stavebních povolení a kolaudace stavby.'
        }
      ]
    };
  }
}
</script>

<style scoped>
.office {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4.8rem; /* Increased padding for more space */
}

.office-header {
  max-width: 1000px;
  margin-bottom: 4.8rem; /* Increased margin for more spacing below header */
}

.office-header h1 {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.office-intro {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.6rem;
  max-width: 1800px;
  width: 100%;
}

.service {
  padding: 3.6rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.service h2 {
  font-family: 'Georgia', serif; /* Changed to match office-intro font */
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.service p {
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .services {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
