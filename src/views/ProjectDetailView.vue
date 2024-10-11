<!-- src/views/ProjectDetails.vue -->
<template>
  <div v-if="project" class="project-details">
    <div class="text-container">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
    <div class="gallery-container">
      <div v-for="(image, index) in project.gallery" :key="index" class="gallery-item">
        <img :src="image" :alt="`Gallery image ${index + 1}`" />
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectDetails',
  computed: {
    project() {
      // Fetch the selected project from the store or using the provided props
      return this.$store.getters.selectedProject;
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.project-details {
  display: flex;
  flex-direction: row;
  padding: 20px;
  height: 100vh;
}

.text-container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.text-container h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 18px;
  margin-bottom: 20px;
}

.back-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
}

.back-button:hover {
  background-color: #555;
}

.gallery-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 20px;
  overflow-y: auto;
}

.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}
</style>
