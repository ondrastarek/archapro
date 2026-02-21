<template>
  <div class="projects-view">
    <ProjectFilters
      :options="categoryFilterOptions"
      :active-category="activeCategory"
      @select="selectCategory"
    />

    <div v-if="displayedProjects.length" class="gallery">
      <ProjectCard
        v-for="(project, index) in displayedProjects"
        :key="project.id"
        :project="project"
        :animation-delay="index * 0.1"
        @open="goToProjectDetails"
      />
    </div>

    <p v-else class="empty-state">V této kategorii zatím nejsou žádné projekty.</p>

    <div v-if="hasMore" class="load-more-container">
      <button type="button" class="load-more-button" @click="loadMore">
        Načíst další projekty
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/projects/ProjectCard.vue'
import ProjectFilters from '@/components/projects/ProjectFilters.vue'
import { useProjectFilters } from '@/composables/useProjectFilters'
import { useProjects } from '@/composables/useProjects'

const router = useRouter()
const { projects, categoryOptions } = useProjects()

const {
  activeCategory,
  displayedProjects,
  hasMore,
  selectCategory,
  loadMore
} = useProjectFilters(projects)

const categoryFilterOptions = computed(() => categoryOptions(projects))

const goToProjectDetails = (project) => {
  router.push({
    name: 'project-details',
    params: { id: project.id }
  })
}
</script>

<style scoped>
.projects-view {
  padding: var(--space-xl) var(--space-sm) 40px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-sm);
}

.load-more-container {
  display: flex;
  justify-content: center;
  margin-top: 26px;
}

.load-more-button {
  border: 1px solid #111;
  color: #111;
  background: var(--color-surface);
  font-family: var(--font-family-display);
  letter-spacing: 1px;
  font-size: 0.8rem;
  padding: var(--space-sm) 18px;
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    color var(--transition-fast);
}

.load-more-button:hover {
  color: #fff;
  background-color: #111;
}

.empty-state {
  text-align: center;
  color: #6f6f6f;
  padding: 30px 0 var(--space-md);
}

@media (max-width: 1024px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-view {
    padding-top: 12px;
  }

  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>
