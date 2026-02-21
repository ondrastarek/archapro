<template>
  <div class="office">
    <div class="office-header">
      <h1>Naše Služby</h1>
      <p class="office-intro">
        Jsme architektonická a projekční kancelář zaměřená na komplexní služby v oblasti
        architektury, statiky a pozemních staveb. Naším cílem je poskytovat kvalitní služby od
        návrhu po realizaci.
      </p>
    </div>

    <section class="services">
      <article v-for="service in services" :key="service.title" class="service">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </article>
    </section>
  </div>
</template>

<script setup>
const services = [
  {
    title: 'Architektonické a projekční práce',
    description:
      'Kompletní řešení od studie po stavebně technickou projektovou dokumentaci, včetně poradenství a řešení interiéru.'
  },
  {
    title: 'Pasportizace staveb',
    description:
      'Podrobné zaměření stávajících objektů a vytvoření dokumentace aktuálního stavu.'
  },
  {
    title: 'Statika staveb',
    description: 'Stavebně konstrukční řešení staveb, statické posudky a návrhy.'
  },
  {
    title: 'Autorský a technický dozor',
    description:
      'Dohled na realizaci staveb, zajištění souladu projektu s jeho realizací, včetně dodržování platné legislativy a řízení ekonomiky stavby.'
  },
  {
    title: 'Výkaz výměr a položkový rozpočet',
    description:
      'Výkaz výměr a položkový rozpočet stavby jsou důležitými podklady pro efektivní realizaci stavebního díla a kontrolu přiměřenosti nákladů na výstavbu.'
  },
  {
    title: 'Inženýrská činnost',
    description: 'Zajištění stavebních povolení a kolaudace stavby.'
  }
]
</script>

<style scoped>
.office {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4.8rem;
}

.office-header {
  max-width: 1000px;
  margin-bottom: 4.8rem;
}

.office-header h1 {
  font-family: var(--font-family-serif);
  font-size: 2.5rem;
  color: var(--color-text-primary);
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
  background-color: var(--color-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.service h2 {
  font-family: var(--font-family-serif);
  font-size: 1.5rem;
  color: var(--color-text-primary);
  margin-bottom: 0.5rem;
}

.service p {
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .services {
    grid-template-columns: 1fr;
  }

  .office {
    padding: 2rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .services {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
