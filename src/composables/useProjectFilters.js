import { computed, ref } from 'vue'

const DEFAULT_VISIBLE_PROJECTS = 12
const ALL_PROJECTS_CATEGORY = 'all'

const normalizeCategories = (project) =>
  Array.isArray(project?.categories) ? project.categories : []

export const useProjectFilters = (projectsRef) => {
  const activeCategory = ref(ALL_PROJECTS_CATEGORY)
  const visibleLimit = ref(DEFAULT_VISIBLE_PROJECTS)

  const filteredProjects = computed(() => {
    const projects = projectsRef.value ?? []

    if (activeCategory.value === ALL_PROJECTS_CATEGORY) {
      return projects
    }

    return projects.filter((project) =>
      normalizeCategories(project).includes(activeCategory.value)
    )
  })

  const displayedProjects = computed(() =>
    filteredProjects.value.slice(0, visibleLimit.value)
  )

  const hasMore = computed(
    () => filteredProjects.value.length > visibleLimit.value
  )

  const selectCategory = (category) => {
    activeCategory.value = category
    visibleLimit.value = DEFAULT_VISIBLE_PROJECTS
  }

  const loadMore = () => {
    visibleLimit.value += DEFAULT_VISIBLE_PROJECTS
  }

  return {
    activeCategory,
    visibleLimit,
    filteredProjects,
    displayedProjects,
    hasMore,
    selectCategory,
    loadMore
  }
}
