import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router.js"
import {store} from "./store/store.js"
import{components,plugins} from "./plugins/elementPlus.js"
const app = createApp(App)


components.forEach(component => {
  app.component(component.name, component)
})
plugins.forEach(plugin => {
  app.use(plugin)
})


app.use(router)
.use(store)
.mount('#app')
