import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import ModalComponent from './components/ModalComponent'
import QuestionList from './components/QuestionList'
import MyProfile from './components/MyProfile'
import HelloWorld from './components/HelloWorld'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


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


const app = createApp(App);
app.component('modal-component', ModalComponent);   
app.use(router);
app.mount('#app');
