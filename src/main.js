import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router.js"
import "@/assets/css/styles.css"


const app = createApp(App);
app.config.productionTip = false

if (app) {
    app.use(router);
    app.mount("#app");
}