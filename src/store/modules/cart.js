const cart = {
  state: {
    store1: {
      storeName: '青果便利店',
      storeId: 1,
      storeImg: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
      checked: false,
      saleList: [
        {
          saleType: 1,
          dec: '下单满100元立减30元'
        }
      ],
      goodsList: []
    },
    store2: {
      storeName: '西瓜小商品',
      storeId: 2,
      storeImg: 'http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_200x200_9c5b5a22.jpg',
      checked: false,
      saleList: [],
      goodsList: []
    },
    store3: {
      storeName: '柿子小卖部',
      storeId: 3,
      storeImg: 'http://img1.qunarzz.com/sight/p0/1505/fd/fde9e7a6d88c2d68.water.jpg_200x200_363462e5.jpg',
      checked: false,
      saleList: [
        {
          saleType: 1,
          dec: '下单满166元就送汰渍1kg洗衣粉一包'
        }
      ],
      storeId: 3,
      goodsList: []
    }
  },
  mutations: {
    addGoods: (state, item) => {
      let storeArr = ['', state.store1, state.store2, state.store3];
      storeArr[item.storeId].goodsList.push(item);
    },
    addNum: (state, item) => {
      // 商品数量+1
      let storeArr = ['', state.store1, state.store2, state.store3];
      let _arr = storeArr[item.storeId].goodsList;
      for (let i = 0; i < _arr.length; i++) {
        if (_arr[i].goodsId == item.goodsId) {
          _arr[i].amount++
        }
      }
    },
    delGoods: (state, item) => {
      let storeArr = ['', state.store1, state.store2, state.store3];
      let _arr = storeArr[item];
      if (_arr.checked) {
        _arr.goodsList = [];
        _arr.checked = false;
      } else {
        _arr.goodsList.forEach((items, indexs) => {
          if (items.checked) {
            _arr.goodsList.splice(indexs, 1);
          }
        })
      }
    }
  },
  actions: {
    addGoodsAsync: (context, item) => {
      context.commit('addGoods', item)
    },
    addNumAsync: (context, item) => {
      context.commit('addNum', item)
    },
    delGoodsAsync: (context, item) => {
      context.commit('delGoods', item)
    }
  }
}

export default cart;