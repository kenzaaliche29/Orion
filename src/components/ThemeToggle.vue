<template>
  <button 
    class="theme-toggle orion-button--secondary"
    @click="toggleTheme"
    :title="themeLabel"
    :aria-label="themeLabel"
  >
    <span class="theme-toggle-icon">{{ themeIcon }}</span>
    <span class="theme-toggle-text">{{ themeLabel }}</span>
  </button>
</template>

<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { isDark, themeIcon, themeLabel, toggleTheme } = useTheme()
</script>

<style scoped>
.theme-toggle-text {
  display: none;
}

@media (min-width: 768px) {
  .theme-toggle-text {
    display: inline;
  }
}

/* Mobile styles */
@media (max-width: 767px) {
  .theme-toggle {
    padding: 0.5rem;
    min-width: 3rem;
    min-height: 3rem;
    justify-content: center;
  }
  
  .theme-toggle-icon {
    font-size: 1.5rem;
  }
}
</style>