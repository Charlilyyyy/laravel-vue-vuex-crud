// import * as Vue from 'vue';
// import * as Vuex from 'vuex';
import { createStore } from 'vuex';

import getters from './getters';
import mutations from './mutations';
import * as actions from './actions';

// Vue.use(Vuex);

export const store = createStore({
    modules:{

    },
    state:{
        tableDat: [],
    },
    mutations,
    actions,
    getters
})