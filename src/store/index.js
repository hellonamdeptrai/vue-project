import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import product from './modules/product'
import bill from './modules/bill'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    modules: {
      home,
      product,
      bill
    }
})

export default store