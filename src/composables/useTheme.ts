import { ref, computed, watch } from 'vue'

export type Theme = 'light' | 'dark'

// État global du thème
const currentTheme = ref<Theme>('light')

// Clé pour le localStorage
const THEME_STORAGE_KEY = 'orion-ui-theme'

export function useTheme() {
  // Initialiser le thème depuis le localStorage ou détecter la préférence système
  const initializeTheme = () => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme
    if (stored && (stored === 'light' || stored === 'dark')) {
      currentTheme.value = stored
    } else {
      // Détecter la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      currentTheme.value = prefersDark ? 'dark' : 'light'
    }
    applyThemeToDocument()
  }

  // Appliquer le thème au document
  const applyThemeToDocument = () => {
    document.documentElement.setAttribute('data-theme', currentTheme.value)
    document.documentElement.classList.toggle('dark-theme', currentTheme.value === 'dark')
    document.documentElement.classList.toggle('light-theme', currentTheme.value === 'light')
  }

  // Changer de thème
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  }

  // Définir un thème spécifique
  const setTheme = (theme: Theme) => {
    currentTheme.value = theme
  }

  // Propriétés calculées
  const isDark = computed(() => currentTheme.value === 'dark')
  const isLight = computed(() => currentTheme.value === 'light')
  const themeIcon = computed(() => isDark.value ? '☀️' : '🌙')
  const themeLabel = computed(() => isDark.value ? 'Mode clair' : 'Mode sombre')

  // Watcher pour sauvegarder et appliquer les changements
  watch(currentTheme, (newTheme) => {
    localStorage.setItem(THEME_STORAGE_KEY, newTheme)
    applyThemeToDocument()
  })

  // Écouter les changements de préférence système
  const watchSystemTheme = () => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem(THEME_STORAGE_KEY)) {
        currentTheme.value = e.matches ? 'dark' : 'light'
      }
    })
  }

  return {
    currentTheme: computed(() => currentTheme.value),
    isDark,
    isLight,
    themeIcon,
    themeLabel,
    toggleTheme,
    setTheme,
    initializeTheme,
    watchSystemTheme
  }
}