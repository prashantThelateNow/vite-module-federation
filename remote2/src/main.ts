import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

const mount = (el: string) => {
    const app = createApp(App)
    app.mount(el)
}

mount('#app');

export { mount }
