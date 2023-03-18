import { createApp } from 'vue'
import App from './App.vue'

import vIcon from './components/core/icon.vue'
import vButton from './components/core/button.vue'

import '../src/assets/styles/main.scss'
import '../src/assets/styles/reset.scss'

const app = createApp(App)
app.component('vIcon', vIcon).component('vButton', vButton)
app.mount('#app')
