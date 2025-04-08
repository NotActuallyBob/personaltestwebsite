import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'

import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const routes = [
    { path: '/', redirect: '/about' },
    { path: '/about', name: 'About', component: AboutView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/projects', name: 'Project', component: ProjectsView },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router