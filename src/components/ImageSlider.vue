<template>
  <div v-if="isOpen" class="slider-container">
    <div class="slider-blurred-background" @click="closeSlider"></div>
    <div class="slider-content"
         @touchstart="handleTouchStart"
         @touchmove="handleTouchMove"
         @touchend="handleTouchEnd"
    >
      <img
        v-for="(image, index) in [currentImage]"
        :key="index + currentIndex"
        :src="image"
        class="slider-image"
        alt=""
      />
    </div>
    <div class="slider-controls">
      <button class="vector arrow left-arrow" @click="prevImage">
        <img src="/vectors/left.svg" alt="Previous" />
      </button>
      <button class="vector arrow right-arrow" @click="nextImage">
        <img src="/vectors/right.svg" alt="Next" />
      </button>
      <button class="vector close-button" @click="closeSlider">
        <img src="/vectors/cross.svg" alt="Close" />
      </button>
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
      currentIndex: this.startIndex,
      touchStartX: 0, // Starting X coordinate for touch
      touchEndX: 0 // Ending X coordinate for touch
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
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX; // Record the X position of the first touch
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX; // Update the X position as the touch moves
    },
    handleTouchEnd() {
      const swipeThreshold = 50; // Minimum distance for a swipe to be registered
      if (this.touchEndX < this.touchStartX - swipeThreshold) {
        // Swiped left
        this.nextImage();
      } else if (this.touchEndX > this.touchStartX + swipeThreshold) {
        // Swiped right
        this.prevImage();
      }
      // Reset touch positions
      this.touchStartX = 0;
      this.touchEndX = 0;
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
  transition: transform 0.3s ease; /* Smooth transition for any transform */
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
  padding-inline: 15px;
  cursor: pointer;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.arrow img, .close-button img {
  object-fit: contain;
  filter: brightness(1);
  transition: transform 0.3s ease, filter 0.3s ease;
}

.arrow:hover img, .close-button:hover img {
  transform: scale(1.2);
  filter: brightness(1.5);
}

</style>
