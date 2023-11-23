import { createRouter, createWebHistory } from 'vue-router'

import QuestionList from './components/QuestionList'
import MyProfile from './components/MyProfile'
import HelloWorld from './components/HelloWorld'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/questions'},
        { path: '/profile', component: MyProfile },
        { path: '/questions', component: QuestionList },
        { path: '/profile/:profileId', component: HelloWorld , props:true},

        { path: '/:notFound(.*)', redirect: '/profile'}
    ],
    linkActiveClass: 'active'
});

export default router; 