import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../src/page/HomePage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			name: 'homepage',
			component: HomePage
		}
	]
});

export default router;
