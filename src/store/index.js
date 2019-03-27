import Vue from 'vue';
import Vuex from 'Vuex';
import cart from './modules/cart';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart
  },
  getters
})

export default store