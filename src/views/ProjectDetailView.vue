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
  padding: 20px;
  height: 80vh;
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
  display: flex;
  justify-content: center;
  flex: 1;
  padding-bottom: 50px;
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

.gallery-item:hover {
  transform: scale(1.01);
}

.gallery-item img {
  vertical-align: middle;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
}

.gallery-item img:hover {
  transform: scale(1.01);
}

@media screen and (max-width: 800px) {
  .gallery-item {
    flex: 66%;
    max-width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .gallery-item {
    flex: 100%;
    max-width: 100%;
  }
}
</style>