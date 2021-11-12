import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VUi from './components/use'

createApp(App).use(VUi).use(router).mount('#app')
