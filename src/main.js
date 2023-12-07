import { createApp } from 'vue'
import App from './App.vue'
import ModalComponent from './components/ModalComponent'
import router from './router'
import store from './store/index.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle';


const app = createApp(App);



app.component('modal-component', ModalComponent);   
app.use(store)
app.use(router);
app.mount('#app');
