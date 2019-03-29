<template>
  <div class="star">
    <ul class="content clearfix">
      <li v-for="(item, index) in goodsList" :key="index" @click="enterGoods">
        <img :src="item.goodsImg" alt="" class="goods-img">
        <div class="goods-content">
          <p class="goods-info">{{ item.goodsInfo }}</p>
          <p class="goods-weight">{{ item.goodsWeight }}</p>
          <p class="goods-price">{{ item.goodsPrice | formatPrice }}</p>
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
  name: 'starsell',
  props: {
    value: {
      type: Array
    }
  },
  data () {
    return {
      goods,
      goodsList: []
    }
  },
  methods: {
    enterGoods () {
      // 进入商品详情
      this.$router.push('/goodsDetail')
    }
  },
  mounted() {
    this.goodsList = this.value;
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
      width: 1.05rem;
      height: 1.05rem;
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
        height: .28rem;
        line-height: 1.2;
        margin-bottom: .1rem;
        overflow: hidden;
        color: #8f8f94;
        font-size: .12rem;
      }
      .goods-weight {
        overflow: hidden;
        height: .18rem;
        line-height: .21rem;
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


