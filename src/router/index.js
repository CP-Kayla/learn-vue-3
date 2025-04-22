import { createRouter, createWebHistory } from 'vue-router'

import About from '@/views/About.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import Home from '@/views/Home.vue'

// Crate a router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name:'home', component: Home},
        {path: '/blogPosts', name:'blogPosts', component: BlogPosts},
        {path: '/about', name:'about', component: About}
    ]
})

// Export the router instance
export default router