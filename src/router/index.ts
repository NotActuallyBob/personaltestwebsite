import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

//import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    { path: '/', redirect: '/about' },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact', name: 'Contact', component: ContactView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router