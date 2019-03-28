import Vue from 'vue';
import Vuex from 'Vuex';
import cart from './modules/cart';
import shop from './modules/shop';
import getters from './getters'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    cart,
    shop
  },
  getters
})

export default store