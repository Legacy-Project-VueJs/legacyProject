import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

createApp(App)
  .use(router)
  .use(store)
  .use(Vuetify)
  .mount('#app')