import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '@/views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/projekty',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/projekty/:id',
      name: 'project-details',
      component: () => import('../views/ProjectDetailView.vue'),
      props: route => ({
        id: route.params.id,
        name: route.query.name,
        description: route.query.description,
        image: route.query.image
      })
    },
    {
      path: '/kancelar',
      name: 'office',
      component: () => import('../views/OfficeView.vue')
    },
    {
      path: '/kontakt',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    }
  ]
})

export default router
