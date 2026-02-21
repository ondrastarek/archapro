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
  margin-bottom: 22px;
}

.filter-button {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
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
  color: #111;
  border-color: var(--color-border-strong);
}

.filter-button.active {
  color: #111;
  border-color: #111;
  background-color: #f3f3f3;
}

.count {
  font-size: 0.75rem;
  color: #8b8b8b;
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
