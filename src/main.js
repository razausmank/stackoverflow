import { createApp } from 'vue'
import App from './App.vue'
import ModalComponent from './components/ModalComponent'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App); 
app.component('modal-component',ModalComponent); 
app.mount('#app');
