<template>
  <div v-if="isOpen" class="slider-container">
    <div class="slider-blurred-background" @click="closeSlider"></div>
    <div class="slider-content">
      <img
        v-for="(image, index) in [currentImage]"
        :key="index + currentIndex"
        :src="image"
        class="slider-image"
        alt="TBD"
      />
    </div>
    <div class="slider-controls">
      <button class="arrow left-arrow" @click="prevImage">&#706;</button>
      <button class="arrow right-arrow" @click="nextImage">&#707;</button>
      <button class="close-button" @click="closeSlider">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  props: {
    images: Array,
    startIndex: Number,
    isOpen: Boolean
  },
  data() {
    return {
      currentIndex: this.startIndex
    }
  },
  computed: {
    currentImage() {
      return this.images[this.currentIndex]
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
  },
  methods: {
    prevImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      } else {
        this.currentIndex = this.images.length - 1
      }
    },
    nextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++
      } else {
        this.currentIndex = 0
      }
    },
    handleKeydown(event) {
      if (event.key === 'ArrowLeft') {
        this.prevImage()
      } else if (event.key === 'ArrowRight') {
        this.nextImage()
      } else if (event.key === 'Escape') {
        this.closeSlider()
      }
    },
    closeSlider() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.slider-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.slider-blurred-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}

.slider-content {
  position: relative;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
}

.slider-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  margin: auto;
  border-radius: 7px;
}

.slider-controls {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 7px 15px;
  border-radius: 7px;
  z-index: 1002;
}

.arrow, .close-button {
  background-color: transparent;
  border: none;
  color: white; /* Change color to white */
  font-size: 2rem;
  padding-inline: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, color 0.3s ease;
}

.arrow:hover, .close-button:hover {
  transform: scale(1.2);
}

</style>
