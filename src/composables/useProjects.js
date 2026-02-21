import { computed, unref } from 'vue'
import { projectCategoryOrder, projects as projectEntries } from '@/models/projects.js'

const ALL_PROJECTS_CATEGORY = 'all'
const ALL_PROJECTS_LABEL = 'Všechny projekty'

const normalizeCategories = (project) =>
  Array.isArray(project?.categories) ? project.categories : []

export const useProjects = () => {
  const projects = computed(() => projectEntries)

  const projectById = (id) => {
    const parsedId = Number.parseInt(String(id), 10)

    if (!Number.isInteger(parsedId)) {
      return null
    }

    return projects.value.find((project) => project.id === parsedId) ?? null
  }

  const categoryOptions = (projectsSource = projects) => {
    const items = unref(projectsSource) ?? []

    const categoryCounts = items.reduce((result, project) => {
      const categories = normalizeCategories(project)

      categories.forEach((category) => {
        result[category] = (result[category] || 0) + 1
      })

      return result
    }, {})

    const orderedCategories = projectCategoryOrder.filter(
      (category) => categoryCounts[category]
    )

    return [
      {
        key: ALL_PROJECTS_CATEGORY,
        label: ALL_PROJECTS_LABEL,
        count: items.length
      },
      ...orderedCategories.map((category) => ({
        key: category,
        label: category,
        count: categoryCounts[category]
      }))
    ]
  }

  return {
    projects,
    projectById,
    categoryOptions,
    ALL_PROJECTS_CATEGORY
  }
}
