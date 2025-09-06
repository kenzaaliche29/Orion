import { createApp } from 'vue'
import OrionUI from '@orion.ui/orion'
// TODO: CSS import is broken due to package export issues
// import '@orion.ui/orion/dist/orion.css'
import './style.css'
import './styles/orion-themes.css' // Import global du système de thème
import App from './App.vue'
import { useTheme } from './composables/useTheme'

// Initialiser le thème avant de créer l'application
const { initializeTheme, watchSystemTheme } = useTheme()
initializeTheme()
watchSystemTheme()

const app = createApp(App)
app.use(OrionUI)
app.mount('#app')
