const store = {
  state: {
    storeName: '青果便利店',
    storeId: 1
  },
  mutations: {
    chooseStore: (state, res) => {
      state.storeName = res.storeName;
      state.storeId = res.storeId;
    }
  },  
  actions: {
    chooseStoreAsync: (context, res) => {
      context.commit('chooseStore', res)
    }
  }
}

export default store;