import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import {
  faList,
  faStar,
  faFilter,
  faUsers,
  faComment,
  faUser,
  faComments,
  faStore
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import router from './router'
library.add(faList, faStar, faFilter, faUsers, faComment, faUser, faComments, faStore)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router).use(VueSplide)

app.mount('#app')
