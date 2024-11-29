import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import { projects } from './models/projects.js'

const store = createStore({
  state () {
    return {
      projects: projects,
      selectedProject: null
    }
  },
  mutations: {
    setSelectedProject(state, project) {
      state.selectedProject = project;
    }
  },
  actions: {
    selectProject({ commit }, project) {
      commit('setSelectedProject', project);
    }
  },
  getters: {
    projects: state => state.projects,
    selectedProject: state => state.selectedProject
  }
});

const app = createApp(App)

app.use(router)
app.use(store)


app.mount('#app')
