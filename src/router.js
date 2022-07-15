import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/HomeComponent.vue"
import Movie from '@/components/movies/Movie.vue'
import Actor from './components/actors/Actor.vue';
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
      {
        path: '/actors',
        name: 'actor',
        component: Actor,
        meta:{
          title: 'Actor'
        }
      },
      {
        path: "/movie/:id",
        name: "movie",
        component: Movie,
        meta:{
          title: 'Movie'
        }
      },
    ]
  })
  
  router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | Movie-Website`;
    next();
  });
  
  
  export default router
  