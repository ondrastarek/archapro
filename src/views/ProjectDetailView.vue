<template>
  <div v-if="project" class="project-details">
    <div class="text-container">
      <h2>{{ project.name }}</h2>
      <component :is="project.descriptionComponent" />
    </div>
    <div class="gallery-container-wrapper">
      <div class="gallery-container" ref="gallery" @scroll="handleScroll">
        <div
          class="fade-left"
          :style="{ opacity: showLeftFade ? 0.8 : 0 }"
        ></div>
        <div
          class="fade-right"
          :style="{ opacity: showRightFade ? 0.8 : 0 }"
        ></div>
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
      showLeftFade: false,
      showRightFade: true,
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
    handleScroll() {
      const gallery = this.$refs.gallery;
      this.showLeftFade = gallery.scrollLeft > 0;
      this.showRightFade = gallery.scrollLeft + gallery.clientWidth < gallery.scrollWidth;
    },
  },
  mounted() {
    this.handleScroll();
  }
  ,
};
</script>

<style scoped>
.project-details {
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 80vh;
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 400px 50px 400px;
}

.text-container h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.text-container p {
  font-size: 18px;
  margin-bottom: 40px;
}

.gallery-container-wrapper {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(25vw + 20px);
  max-height: calc(600px + 20px);
}

.gallery-container {
  flex: 1;
  display: flex;
  overflow-x: scroll;
  gap: 10px;
  scrollbar-width: thin;
}

.gallery-item {
  flex: 0 0 calc((100% / 3.5) - 10px);
  height: 25vw;
  max-height: 600px;
  overflow: hidden;
  border-radius: 7px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform-origin: center;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

/* Fade effects */
.fade-left,
.fade-right {
  position: absolute;
  top: 0;
  bottom: 20px;
  width: 100px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 5;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0.9), transparent);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.9), transparent);
}

@media (max-width: 768px) {
  .gallery-item {
    flex: 0 0 calc((100% / 2.5) - 10px);
    height: 35vw;
    max-height: 200px;
  }
  .gallery-container-wrapper {
    height: calc(35vw + 20px);
    max-height: calc(200px + 20px);
  }
}
</style>