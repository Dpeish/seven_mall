<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的优惠券
      <i class="iconfont icon-help"></i>
    </div>
    <div class="wrap">
      <ul class="coupon-item">
        <li class="coupon-item-cell">
          <p>下单满5000元使用</p>
          <span>有效期至2016-08-10 10:34</span>
          <div class="coupon-price">100<small>元</small>
          </div>
        </li>
        <li class="coupon-item-cell-bottom">
          <img class="head-img" :src="notImg" alt="">
          大西瓜食品批发
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'coupon',
  data () {
    return {
      notImg
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  position: relative;
  height: .44rem;
  line-height: .44rem;
  background: #fcfcfc;
  font-size: .18rem;
  text-align: center;
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .20rem;
    color: #ccc;
  }
  i {
    position: absolute;
    right: 0;
    top: 0;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .20rem;
    color: #666;
  }
}

.coupon-item {
  margin: .1rem;
  overflow: hidden;
  .coupon-item-cell {
    position: relative;
    padding: .11rem .15rem;
    background: #fff;
    @include coupon-circle;
    p {
      width: 68%;
      font-size: .15rem;
    }
    span {
      font-size: .12rem;
      color: #8f8f94;
    }
    .coupon-price {
      position: absolute;
      top: .1rem;
      right: .1rem;
      font-size: .28rem;
      font-weight: bold;
      color: #ffa037;
      small {
        font-size: .14rem;
      }
    }
  }
  .coupon-item-cell-bottom {
    padding: .11rem .15rem;
    background: #fff;
    .head-img {
      display: inline-block;
      width: .2rem;
      height: .2rem;
      margin-right: .08rem;
    }
  }
}
</style>

