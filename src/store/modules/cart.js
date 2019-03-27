const cart = {
  state: {
    sotre1: {
      storeId: 1,
      goodsList: []
    },
    sotre2: {
      storeId: 2,
      goodsList: []
    },
    sotre3: {
      storeId: 3,
      goodsList: []
    }
  },
  mutations: {
    addGoods: (state, item) => {
      console.log(item)
      state.sotre1.goodsList.push(item);
      console.log(state.sotre1)
    }
  },
  actions: {
    addGoodsAsync: (context, item) => {
      context.commit('addGoods', item)
    }
  }
}

export default cart;