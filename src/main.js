import { createApp } from 'vue'
import App from './App.vue'

import CoreIcon from './components/core/icon.vue'
import CoreButton from './components/core/button.vue'
import CoreInput from './components/core/input.vue'
import CoreRadio from './components/core/radio-button.vue'
import CoreCheckbox from './components/core/checkbox.vue'
import CoreTextarea from './components/core/textarea.vue'
import CoreMultiInput from './components/core/multi-input.vue'
import CoreSelect from './components/core/select.vue'
import CoreSlider from './components/core/slider.vue'
import CoreSwitch from './components/core/switch.vue'
import CoreProgressCircle from './components/core/progress-circle.vue'
import CoreCustomCursor from './components/core/cursor.vue'

import '../src/assets/styles/main.scss'
import '../src/assets/styles/reset.scss'

const app = createApp(App)
app
  .component('CoreIcon', CoreIcon)
  .component('CoreButton', CoreButton)
  .component('CoreInput', CoreInput)
  .component('CoreRadio', CoreRadio)
  .component('CoreCheckbox', CoreCheckbox)
  .component('CoreTextarea', CoreTextarea)
  .component('CoreMultiInput', CoreMultiInput)
  .component('CoreSelect', CoreSelect)
  .component('CoreSlider', CoreSlider)
  .component('CoreSwitch', CoreSwitch)
  .component('CoreProgressCircle', CoreProgressCircle)
  .component('CoreCustomCursor', CoreCustomCursor)
app.mount('#app')
