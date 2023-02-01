import { createRouter, createWebHistory } from "vue-router"
import HomeView from '/src/views/HomeView.vue';
import ProductsView from '/src/views/ProductsView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/products', component: ProductsView },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})