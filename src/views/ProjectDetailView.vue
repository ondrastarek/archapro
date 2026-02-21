<template>
  <div v-if="project" class="project-details">
    <div class="text-container">
      <h2>{{ project.name }}</h2>
    </div>

    <div class="gallery-container-wrapper">
      <div class="gallery-container">
        <button
          v-for="(image, index) in project.gallery"
          :key="image"
          type="button"
          class="gallery-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
          @click="openSlider(index)"
        >
          <img :src="image" :alt="`Galerie ${index + 1}`" loading="lazy" />
        </button>
      </div>
    </div>

    <ImageSlider
      v-if="isSliderOpen"
      :images="project.gallery"
      :start-index="selectedIndex"
      :is-open="isSliderOpen"
      @close="isSliderOpen = false"
    />
  </div>

  <div v-else class="project-not-found">
    <h2>Projekt nenalezen</h2>
    <p>Projekt s tímto ID neexistuje nebo byl přesunut.</p>
    <RouterLink to="/projekty" class="back-link">Zpět na projekty</RouterLink>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import ImageSlider from '@/components/ImageSlider.vue'
import { useProjects } from '@/composables/useProjects'

const route = useRoute()
const { projectById } = useProjects()

const projectId = computed(() => Number.parseInt(String(route.params.id), 10))
const project = computed(() => projectById(projectId.value))

const isSliderOpen = ref(false)
const selectedIndex = ref(0)

const openSlider = (index) => {
  selectedIndex.value = index
  isSliderOpen.value = true
}

watch(
  () => route.params.id,
  () => {
    isSliderOpen.value = false
    selectedIndex.value = 0
  }
)
</script>

<style scoped>
.project-details {
  display: flex;
  flex-direction: column;
}

.text-container {
  text-align: center;
  padding: var(--space-4xl) var(--space-lg);
}

.text-container h2 {
  font-size: 36px;
  margin: 0 auto;
  line-height: 1.4;
  color: var(--color-text-primary);
}

.gallery-container-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: var(--space-3xl);
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-gallery-gap);
  justify-content: center;
  padding: 0 var(--space-2xs);
}

.gallery-item {
  flex: 33%;
  max-width: 30%;
  padding: 0;
  border: none;
  background: transparent;
  position: relative;
  border-radius: var(--radius-md);
  opacity: 0;
  animation: fadeIn 0.4s ease-in-out forwards;
  transition: transform var(--transition-base);
}

.gallery-item img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  cursor: pointer;
  box-shadow: var(--shadow-soft);
}

.gallery-item:hover {
  transform: scale(1.02);
}

.gallery-item:focus-visible {
  outline: var(--focus-ring);
  outline-offset: 3px;
}

.project-not-found {
  max-width: 720px;
  margin: 0 auto;
  padding: var(--space-4xl) var(--space-lg);
  text-align: center;
  color: var(--color-text-secondary);
}

.project-not-found h2 {
  font-size: 2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--space-sm);
}

.project-not-found p {
  margin-bottom: var(--space-lg);
}

.back-link {
  text-decoration: none;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  padding: var(--space-xs) var(--space-md);
  display: inline-block;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.back-link:hover {
  background-color: var(--color-accent);
  color: var(--color-accent-contrast);
}

.back-link:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 1528px) {
  .gallery-item {
    flex: 33%;
    max-width: 49%;
  }
}

@media screen and (max-width: 764px) {
  .gallery-item {
    flex: 100%;
    max-width: 100%;
  }
}
</style>
