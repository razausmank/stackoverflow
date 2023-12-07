import { createStore } from 'vuex'
import profileViewsModule from './modules/profileViews';

const store = createStore({
    modules: { 
        test: profileViewsModule
    }
});     

export default store ;