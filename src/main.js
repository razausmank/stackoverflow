import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import ModalComponent from './components/ModalComponent'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import 'bootstrap/dist/js/bootstrap.bundle';


const app = createApp(App);

const store = createStore({
    state() {
        return { 
            views: 0 
        };
    },
    mutations: { 
        incrementViews(state) { 
            state.views++; 
        }
    },
    getters: { 
        views(state) {
            return state.views ; 
        }
    }
}); 

app.component('modal-component', ModalComponent);   
app.use(store)
app.use(router);
app.mount('#app');
