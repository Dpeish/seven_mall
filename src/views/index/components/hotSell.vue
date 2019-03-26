<template>
  <div class="hot">
    <div class="hot-title">热销商品</div>
    <ul class="content clearfix">
      <li v-for="(item, index) in goodsList" :key="index">
        <img :src="item.goodsImg" alt="" class="goods-img">
        <div class="goods-content">
          <p class="goods-info">{{ item.info }}</p>
          <p class="goods-weight">规格：{{ item.weight }}</p>
          <p class="goods-price">{{ item.price | formatPrice }}<span class="goods-unit"> /{{ item.unit }}</span></p>
        </div>
        <div class="goods-add">
          <span class="iconfont icon-jiagou"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import goods from '@/assets/index/goods.jpg'
export default {
  name: 'hotsell',
  data () {
    return {
      goods,
      goodsList: [
        {
          id: '001',
          goodsImg: goods,
          info: '茅台镇洞藏老酒53度酱香型白酒低价批发坛装十五年原浆纯粮食酒',
          weight: '210g',
          price: 7.5,
          unit: '件'
        }, {
          id: '002',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1,
          unit: '件'
        }, {
          id: '003',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1,
          unit: '箱'
        }, {
          id: '004',
          goodsImg: goods,
          info: '陶华碧老干妈香辣脆油辣椒210g瓶',
          weight: '210g',
          price: 7.5,
          unit: '箱'
        }, {
          id: '005',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1,
          unit: '件'
        }, {
          id: '006',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1,
          unit: '箱'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/varibles.scss';
.hot {
  overflow: hidden;
  width: 100%;
}
.hot-title {
  padding: .11rem .15rem;
  background: #fff;
  font-size: .15rem;
  color: #383838;
}
.content {
  margin: 0 auto;
  width: 100%;
  margin-bottom: .1rem;
  li {
    position: relative;
    padding: .11rem .15rem; 
    background: #fff;
    display: flex;
    @include border-top-posi(#f5f5f5, .15rem);
    .goods-img {
      width: .9rem;
      height: .9rem;
      margin-right: .1rem;
    }
    .goods-add {
      position: absolute;
      right: 0;
      bottom: 0;
      width: .44rem;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      span {
        color: $pinkText;
        font-size: .22rem;
      }
    }
    .goods-content {
      flex: 1;
      .goods-info {
        overflow: hidden;
        height: .42rem;
        margin-bottom: .1rem;
        color: #383838;
        font-size: .14rem;
      }
      .goods-weight {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: #8f8f94;
      }
      .goods-price {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: $pinkText;
      }
      .goods-unit {
        color: #8f8f94;
      }
    }
  }
}
</style>


