export default {
    namespaced: true,
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
    },
    actions: { 
        incrementViews(context) { 
            context.commit('incrementViews'); 
        }
    }

}