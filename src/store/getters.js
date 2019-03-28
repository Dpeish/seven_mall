import { findTarget } from '@/utils/assist';

export default {
  hasGoods: state => (goods) => {
    let storeArr = ['', state.cart.store1, state.cart.store2, state.cart.store3];
    let _arr = storeArr[goods.storeId].goodsList;
    // 判断店铺内是否有相同商品
    return findTarget(_arr, 'goodsId', goods.goodsId);
  }
}