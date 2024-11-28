<template>
  <div v-if="project" class="project-details">
    <div class="text-container">
      <h2>{{ project.name }}</h2>
    </div>
    <div class="gallery-container-wrapper">
      <div class="gallery-container">
        <div v-for="(image, index) in project.gallery" :key="index" class="gallery-item" @click="openSlider(index)">
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

export default {
  name: 'ProjectDetails',
  components: {
    ImageSlider,
  },
  data() {
    return {
      isSliderOpen: false,
      selectedIndex: 0,
    };
  },
  computed: {
    project() {
      return this.$store.getters.selectedProject;
    }
  },
  methods: {
    openSlider(index) {
      this.selectedIndex = index;
      this.isSliderOpen = true;
    },
  }
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