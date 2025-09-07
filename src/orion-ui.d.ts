declare module '@orion.ui/orion' {
  import { App } from 'vue'
  
  interface OrionUI {
    install(app: App): void
  }
  
  const OrionUI: OrionUI
  export default OrionUI
}
