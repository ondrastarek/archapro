<!-- src/views/Projekty.vue -->
<template>
  <div class="gallery">
    <div
      v-for="project in projects"
      :key="project.id"
      class="gallery-item"
      @click="goToProjectDetails(project)"
    >
      <img :src="project.thumbnail" :alt="project.name" />
      <div class="overlay">
        <h2>Pokračovat na {{project.name }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  },
  methods: {
    goToProjectDetails(project) {
      this.$store.dispatch('selectProject', project);
      this.$router.push({
        name: 'project-details',
        params: { id: project.id }
      });
    }
  }
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.gallery-item {
  position: relative;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.gallery-item:hover img {
  filter: grayscale(100%);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: white;
  padding: 50px 50px 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 45%, rgba(255,255,255,0) 100%);
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.overlay h2 {
  margin: 0;
  font-size: 24px;
  display: flex;
  align-items: center;
}

.overlay h2::after {
  content: '→';
  margin-left: 10px;
  font-size: 24px;
}
</style>
