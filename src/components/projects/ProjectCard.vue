<template>
  <article
    class="gallery-item"
    :style="{ animationDelay: `${animationDelay}s` }"
    role="button"
    tabindex="0"
    @click="emit('open', project)"
    @keydown.enter.prevent="emit('open', project)"
    @keydown.space.prevent="emit('open', project)"
  >
    <img :src="project.thumbnail" :alt="project.name" loading="lazy" />
    <div class="overlay">
      <h2>{{ project.name }}</h2>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  animationDelay: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['open'])
</script>

<style scoped>
.gallery-item {
  position: relative;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 0.4s ease-in-out forwards;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  transition: filter var(--transition-base);
}

.gallery-item:hover img,
.gallery-item:focus-visible img {
  filter: grayscale(0%);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--color-accent-contrast);
  padding: 50px 50px var(--space-lg);
  opacity: 0;
  transition: opacity var(--transition-base);
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 45%,
    rgba(255, 255, 255, 0) 100%
  );
}

.gallery-item:hover .overlay,
.gallery-item:focus-visible .overlay {
  opacity: 1;
}

.overlay h2 {
  margin: 0;
  font-size: clamp(16px, 1vw, 24px);
  display: flex;
  align-items: center;
  text-align: center;
  white-space: pre-line;
}

.overlay h2::after {
  content: '→';
  margin-left: var(--space-sm);
}

.gallery-item:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
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

@media (max-width: 768px) {
  .gallery-item img {
    filter: grayscale(0%);
  }

  .overlay {
    height: 35%;
    opacity: 1;
  }
}
</style>
