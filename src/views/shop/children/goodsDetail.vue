<template>
  <div>
    <div class="header">
      <span class="left-icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </span>
      <p class="head-name">商品详情</p>
      <span class="right-icon">
        <i class="iconfont icon-cart2"></i>
      </span>
    </div>
    <div class="container">
      <div class="goods-img">
        <img :src="goodsImg" alt="">
      </div>
      <div class="goods-top">
        <h3>德国进口（Eichbaum） 爱士堡小麦黑啤 500ml*24 听</h3>
      </div>
    </div>
  </div>
</template>

<script>
import goodsImg from "@/assets/common/goods.jpg"
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodsImg
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  background: #fcfcfc;
  justify-content: space-between;
  @include border-bottom(#f5f5f5);
  .left-icon, .right-icon {
    width: .44rem;
    height: .44rem;
    text-align: center;
    i {
      font-size: .26rem;
    }
    .icon-left-arrow {
      font-size: .2rem;
      color: #ddd;
    }
  }
  .head-name {
    flex: 1;
    font-size: .18rem;
    text-align: center;
  }
}
.container {
  overflow: hidden;
  width: 100%;
  .goods-img {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .goods-top {
    background: #fff;
    padding: .11rem .15rem;
  }
}
</style>


