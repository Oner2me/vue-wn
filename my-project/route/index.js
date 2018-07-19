import Vue from 'vue';
import VueRouter from 'vue-router';

import HomePage from '../src/page/HomePage.vue';
import UserPage from '../src/page/UserPage.vue';

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
		},
		{
			path: '/user',
			name: 'userpage',
			component: UserPage,
		},
	]
});

export default router;
