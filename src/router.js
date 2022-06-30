import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/HomeComponent.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
        meta:{
          title: 'Home'
        }
      },
    ]
  })
  
  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Movie-Website`;
    next();
  });
  
  
  export default router
  