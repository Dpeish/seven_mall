<template>
  <div class="hot">
    <div class="hot-title">热销商品</div>
    <ul class="content clearfix">
      <li v-for="(item, index) in value" :key="index" @click="enterGoods">
        <img :src="item.goodsImg" alt="" class="goods-img">
        <div class="goods-content">
          <p class="goods-info">{{ item.goodsInfo }}</p>
          <p class="goods-weight">规格：{{ item.goodsWeight }}</p>
          <p class="goods-price">{{ item.goodsPrice | formatPrice }}<span class="goods-unit"> /{{ item.unit }}</span></p>
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


