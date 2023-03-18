import { createApp } from 'vue'
import App from './App.vue'

import vIcon from './components/core/icon.vue'

import '../src/assets/styles/main.scss'
import '../src/assets/styles/reset.scss'

const app = createApp(App)
app.component('vIcon', vIcon)
app.mount('#app')
