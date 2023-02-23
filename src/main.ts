import { createApp } from 'vue'
import { createPinia } from 'pinia'
import mainApp from './main-app.vue'
import router from './router'
import FaIcon from '@/global-components/fa-icon.vue'
import './assets/css/main.css'
import 'highlight.js/styles/atom-one-dark.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import Popper from '@/components/popper.vue'
import Cleave from 'cleave.js'
import Notifications from '@kyvg/vue3-notification'

const pinia = createPinia()
const app = createApp(mainApp)

app.directive('cleave', {
  mounted: (el, binding) => {
    el.cleave = new Cleave(el, binding.value || {})
  },
})

app.use(pinia)
app.use(router)
app.use(hljsVuePlugin)
app.use(Notifications)

// register global component
app.component('Popper', Popper)
app.component('FaIcon', FaIcon)

// mount vue application
app.mount('#app')
