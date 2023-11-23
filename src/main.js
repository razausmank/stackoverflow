import { createApp } from 'vue'
import App from './App.vue'
import ModalComponent from './components/ModalComponent'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";





const app = createApp(App);
app.component('modal-component', ModalComponent);   
app.use(router);
app.mount('#app');
