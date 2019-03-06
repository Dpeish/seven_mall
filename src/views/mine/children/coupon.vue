<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      优惠券
      <i class="iconfont icon-help"></i>
    </div>
    <div class="wrap">
      <ul class="coupon-item" v-for="(item, index) in couponList" :key="index">
        <li class="coupon-item-cell">
          <p>{{ item.dec }}</p>
          <span>有效期至{{ item.tiem }}</span>
          <div class="coupon-price" :class="{'text-gray': item.status > 0}">{{ item.price }}<small>元</small>
          </div>
        </li>
        <li class="coupon-item-cell-bottom">
          <img class="head-img" :src="notImg" alt="">
          {{ item.storeName }}
        </li>
        <li class="status-badge" v-if="item.status == 1 || item.status == 2">
          <i class="iconfont icon-shoucang1 star-left"></i>
          <i class="iconfont icon-shoucang1 star-center"></i>
          <i class="iconfont icon-shoucang1 star-right"></i>
          <span v-if="item.status == 1">已使用</span>
          <span v-if="item.status == 2">已过期</span>
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
      notImg,
      couponList: [
        // status 0未使用 1已经使用 2已过期
        {
          dec: '下单满300元使用',
          time: '2019-06-18',
          price: 100,
          storeName: '青果食品批发',
          status: 0
        }, {
          dec: '下单满200元使用',
          time: '2019-06-18',
          price: 20,
          storeName: '大西瓜食品批发',
          status: 1
        }, {
          dec: '下单满100元使用',
          time: '2019-06-18',
          price: 10,
          storeName: '全场通用',
          status: 2
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    getStar(val) {
      // console.log(val)
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
  @include border-bottom(#eee);
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
  position: relative;
  margin: .1rem;
  overflow: hidden;
  .coupon-item-cell {
    position: relative;
    padding: .11rem .15rem;
    background: #fff;
    @include coupon-circle;
    p {
      width: 68%;
      margin: .02rem 0;
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
    .text-gray {
      color: #ccc;
    }
  }
  .coupon-item-cell-bottom {
    padding: .11rem .15rem;
    background: #fff;
    font-size: .14rem;
    @include border-top-dotted(#e5e6e5);
    .head-img {
      float: left;
      width: .2rem;
      height: .2rem;
      margin-right: .08rem;
      border-radius: .02rem;
    }
  }
}
</style>

