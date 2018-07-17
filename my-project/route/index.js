import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../src/components/HomePage.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'homepage',
            component: HomePage,
        },
    ]
})

export default router