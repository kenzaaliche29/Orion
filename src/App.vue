<script setup lang="ts">
import { onMounted } from 'vue'
import OrionStatsCard from './components/OrionStatsCard.vue'
import ThemeToggle from './components/ThemeToggle.vue'

// Le thème est maintenant initialisé dans main.ts
</script>

<template>
  <div id="app">
    <ThemeToggle />
    <OrionStatsCard />
  </div>
</template>

<style>
/* Styles globaux sans scoped pour que les variables CSS soient disponibles partout */
#app {
  min-height: 100vh;
  background-color: var(--orion-bg-primary);
  transition: background-color 0.3s ease;
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
