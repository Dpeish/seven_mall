<template>
  <div class="star">
    <ul class="content clearfix">
      <li v-for="(item, index) in goodsList" :key="index">
        <img :src="item.goodsImg" alt="" class="goods-img">
        <div class="goods-content">
          <p class="goods-info">{{ item.info }}</p>
          <p class="goods-weight">{{ item.weight }}</p>
          <p class="goods-price">{{ item.price | formatPrice }}</p>
        </div>
        <div class="goods-add">
          <span class="iconfont icon-add"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import goods from '@/assets/index/goods.jpg'
export default {
  name: 'starsell',
  data () {
    return {
      goods,
      goodsList: [
        {
          id: '001',
          goodsImg: goods,
          info: '陶华碧老干妈香辣脆油辣椒210g瓶',
          weight: '210g',
          price: 7.5
        }, {
          id: '002',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1
        }, {
          id: '003',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1
        }, {
          id: '004',
          goodsImg: goods,
          info: '陶华碧老干妈香辣脆油辣椒210g瓶',
          weight: '210g',
          price: 7.5
        }, {
          id: '005',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1
        }, {
          id: '006',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
@import '@/styles/varibles.scss';
.star {
  width: 100%;
}
.content {
  margin: 0 auto;
  width: 100%;
  margin-bottom: .1rem;
  li {
    float: left;
    width: 33.333%;
    padding: .1rem;
    background: #fff;
    @include border-top(#f5f5f5);
    @include border-right(#f5f5f5);
    .goods-img {
      width: 100%;
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
      margin-top: .12rem;
      .goods-info {
        height: .3rem;
        line-height: 1.2;
        margin-bottom: .1rem;
        overflow: hidden;
        color: #8f8f94;
        font-size: .12rem;
      }
      .goods-weight {
        overflow: hidden;
        height: .15rem;
        font-size: .12rem;
        color: #8f8f94;
      }
      .goods-price {
        overflow: hidden;
        height: .15rem;
        font-size: .13rem;
        color: $pinkText;
      }
    }
  }
}
</style>


