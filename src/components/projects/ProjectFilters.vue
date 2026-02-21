<template>
  <div class="filters">
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
</script>

<style scoped>
.filters {
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

@media (max-width: 768px) {
  .filters {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: var(--space-xs);
    margin-bottom: var(--space-md);
    scrollbar-width: thin;
  }

  .filter-button {
    white-space: nowrap;
  }
}
</style>
