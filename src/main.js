import { createApp } from 'vue'
import App from './App.vue'

import vIcon from './components/core/icon.vue'
import vButton from './components/core/button.vue'
import vInput from './components/core/input.vue'
import vRadio from './components/core/radio-button.vue'
import vCheckbox from './components/core/checkbox.vue'
import vTextarea from './components/core/textarea.vue'
import vMultiInput from './components/core/multi-input.vue'
import vSelect from './components/core/select.vue'
import vSlider from './components/core/slider.vue'
import vSwitch from './components/core/switch.vue'

import '../src/assets/styles/main.scss'
import '../src/assets/styles/reset.scss'

const app = createApp(App)
app
  .component('vIcon', vIcon)
  .component('vButton', vButton)
  .component('vInput', vInput)
  .component('vRadio', vRadio)
  .component('vCheckbox', vCheckbox)
  .component('vTextarea', vTextarea)
  .component('vMultiInput', vMultiInput)
  .component('vSelect', vSelect)
  .component('vSlider', vSlider)
  .component('vSwitch', vSwitch)
app.mount('#app')
