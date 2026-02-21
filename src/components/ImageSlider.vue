<template>
  <div v-if="isOpen" class="slider-container">
    <div class="slider-blurred-background" @click="closeSlider"></div>

    <div
      class="slider-content"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
      <img v-if="currentImage" :src="currentImage" class="slider-image" alt="" />
    </div>

    <div class="slider-controls">
      <button
        type="button"
        class="vector arrow left-arrow"
        aria-label="Předchozí obrázek"
        @click="prevImage"
      >
        <img src="/vectors/left.svg" alt="Previous" />
      </button>
      <button
        type="button"
        class="vector arrow right-arrow"
        aria-label="Další obrázek"
        @click="nextImage"
      >
        <img src="/vectors/right.svg" alt="Next" />
      </button>
      <button
        type="button"
        class="vector close-button"
        aria-label="Zavřít galerii"
        @click="closeSlider"
      >
        <img src="/vectors/cross.svg" alt="Close" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  startIndex: {
    type: Number,
    default: 0
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const currentIndex = ref(0)
const touchStartX = ref(0)
const touchEndX = ref(0)

const normalizeIndex = (index) => {
  if (!props.images.length) {
    return 0
  }

  if (!Number.isInteger(index)) {
    return 0
  }

  if (index < 0) {
    return 0
  }

  if (index >= props.images.length) {
    return props.images.length - 1
  }

  return index
}

const preloadAdjacentImages = () => {
  if (!props.images.length) {
    return
  }

  const previousIndex =
    currentIndex.value > 0 ? currentIndex.value - 1 : props.images.length - 1
  const nextIndex =
    currentIndex.value < props.images.length - 1 ? currentIndex.value + 1 : 0

  ;[previousIndex, nextIndex].forEach((index) => {
    const imagePath = props.images[index]

    if (!imagePath) {
      return
    }

    const image = new Image()
    image.src = imagePath
  })
}

const currentImage = computed(() => props.images[currentIndex.value] ?? '')

const prevImage = () => {
  if (!props.images.length) {
    return
  }

  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  } else {
    currentIndex.value = props.images.length - 1
  }
}

const nextImage = () => {
  if (!props.images.length) {
    return
  }

  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value += 1
  } else {
    currentIndex.value = 0
  }
}

const closeSlider = () => {
  emit('close')
}

const handleKeydown = (event) => {
  if (!props.isOpen) {
    return
  }

  if (event.key === 'ArrowLeft') {
    prevImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  } else if (event.key === 'Escape') {
    closeSlider()
  }
}

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX
}

const handleTouchEnd = () => {
  const swipeThreshold = 50

  if (touchEndX.value < touchStartX.value - swipeThreshold) {
    nextImage()
  } else if (touchEndX.value > touchStartX.value + swipeThreshold) {
    prevImage()
  }

  touchStartX.value = 0
  touchEndX.value = 0
}

watch(
  () => props.startIndex,
  (value) => {
    currentIndex.value = normalizeIndex(value)
  },
  { immediate: true }
)

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      currentIndex.value = normalizeIndex(props.startIndex)
      preloadAdjacentImages()
    }
  }
)

watch(currentIndex, () => {
  if (props.isOpen) {
    preloadAdjacentImages()
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
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
  background-color: var(--color-overlay);
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
  border-radius: var(--radius-sm);
  transition: transform var(--transition-base);
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
  padding: var(--space-sm) 15px;
  border-radius: var(--radius-sm);
  z-index: 1002;
}

.arrow,
.close-button {
  background-color: transparent;
  border: none;
  padding-inline: 15px;
  cursor: pointer;
  transition: transform var(--transition-base), filter var(--transition-base);
}

.arrow img,
.close-button img {
  object-fit: contain;
  filter: brightness(1);
  transition: transform var(--transition-base), filter var(--transition-base);
}

.arrow:hover img,
.close-button:hover img {
  transform: scale(1.2);
  filter: brightness(1.5);
}
</style>
