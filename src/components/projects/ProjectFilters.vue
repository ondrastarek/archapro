<template>
  <div>
    <div class="filters-desktop">
      <button
        v-for="category in options"
        :key="category.key"
        type="button"
        class="filter-button"
        :class="{ active: category.key === activeCategory }"
        @click="emit('select', category.key)"
      >
        <span>{{ category.label }}</span>
        <span class="count">{{ category.count }}</span>
      </button>
    </div>

    <div class="filters-mobile">
      <label class="sr-only" for="project-category-select">Kategorie projektů</label>
      <div class="mobile-select-wrapper">
        <select
          id="project-category-select"
          class="mobile-select"
          :value="activeCategory"
          @change="handleSelectChange"
        >
          <option v-for="category in options" :key="category.key" :value="category.key">
            {{ category.label }} ({{ category.count }})
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  options: {
    type: Array,
    default: () => []
  },
  activeCategory: {
    type: String,
    default: 'all'
  }
})

const emit = defineEmits(['select'])

const handleSelectChange = (event) => {
  emit('select', event.target.value)
}
</script>

<style scoped>
.filters-desktop {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  justify-content: center;
  margin-bottom: var(--space-lg);
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  min-height: var(--touch-target-size);
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text-secondary);
  font-family: var(--font-family-display);
  letter-spacing: 1px;
  font-size: 0.85rem;
  padding: var(--space-xs) var(--space-md);
  cursor: pointer;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.filter-button:hover {
  color: var(--color-accent);
  border-color: var(--color-border-strong);
}

.filter-button.active {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background-color: var(--color-surface-muted);
}

.filter-button:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}

.count {
  font-size: 0.75rem;
  color: var(--color-text-soft);
}

.filters-mobile {
  display: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (max-width: 768px) {
  .filters-desktop {
    display: none;
  }

  .filters-mobile {
    display: block;
    position: sticky;
    top: var(--header-height-mobile);
    z-index: 9;
    background-color: var(--color-background);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-xs) 0;
    margin-bottom: var(--space-md);
  }

  .mobile-select-wrapper {
    position: relative;
  }

  .mobile-select-wrapper::after {
    content: '▾';
    position: absolute;
    right: var(--space-md);
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-accent);
    pointer-events: none;
  }

  .mobile-select {
    width: 100%;
    min-height: var(--touch-target-size);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
    color: var(--color-accent);
    font-family: var(--font-family-display);
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    padding: var(--space-xs) calc(var(--space-xl) + var(--space-md)) var(--space-xs)
      var(--space-md);
    appearance: none;
    -webkit-appearance: none;
  }

  .mobile-select:focus-visible {
    outline: var(--focus-ring);
    outline-offset: var(--focus-offset);
  }
}
</style>
