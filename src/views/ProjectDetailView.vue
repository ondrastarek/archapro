<template>
  <div v-if="project" class="project-details">
    <div class="text-container">
      <h2>{{ project.name }}</h2>
    </div>
    <div class="gallery-container-wrapper">
      <div class="gallery-container">
        <div
          v-for="(image, index) in project.gallery"
          :key="index"
          class="gallery-item"
          :style="{ animationDelay: `${index * 0.1}s` }"
        @click="openSlider(index)"
        >
        <img :src="image" :alt="`Gallery image ${index + 1}`" />
      </div>
    </div>
  </div>
  <ImageSlider
    v-if="isSliderOpen"
    :images="project.gallery"
    :startIndex="selectedIndex"
    :isOpen="isSliderOpen"
    @close="isSliderOpen = false"
  />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';
import { useStore } from 'vuex'; // Import Vuex store
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'; // Access route params

export default {
  name: 'ProjectDetails',
  components: {
    ImageSlider,
  },
  setup() {
    const store = useStore(); // Access Vuex store
    const route = useRoute(); // Access route params

    const isSliderOpen = ref(false);
    const selectedIndex = ref(0);
    const project = ref(null);

    // Load project data
    const loadProject = () => {
      const projectId = parseInt(route.params.id, 10); // Get project ID from route
      const storedProject = store.getters.selectedProject;

      // If project is already in Vuex, use it
      if (storedProject && storedProject.id === projectId) {
        project.value = storedProject;
      } else {
        // Fetch project from Vuex state
        const allProjects = store.getters.projects;
        project.value = allProjects.find((p) => p.id === projectId);
      }

      // If project is still null, handle the error or fallback
      if (!project.value) {
        console.error('Project not found!');
      }
    };

    const openSlider = (index) => {
      selectedIndex.value = index;
      isSliderOpen.value = true;
    };

    onMounted(() => {
      loadProject(); // Load project data when component is mounted
    });

    return {
      project,
      isSliderOpen,
      selectedIndex,
      openSlider,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.project-details {
  display: flex;
  flex-direction: column;
}

.text-container {
  text-align: center;
  padding: 60px 20px;
}

.text-container h2 {
  font-size: 36px;
  margin: 0 auto;
  line-height: 1.4;
}

.gallery-container-wrapper {
  flex: 1; /* Dynamically grows to fill the remaining space */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Ensures the gallery aligns properly */
  padding-bottom: 50px; /* Leaves space for the footer */
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  padding: 0 4px;
}

.gallery-item {
  flex: 33%;
  max-width: 30%;
  padding: 0;
  position: relative;
  border-radius: 8px;
  opacity: 0; /* Initially hidden */
  animation: fadeIn 0.4s ease-in-out forwards; /* Fade-in animation */
  transition: transform 0.3s ease;
}

.gallery-item img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.gallery-item:hover {
  transform: scale(1.02);
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