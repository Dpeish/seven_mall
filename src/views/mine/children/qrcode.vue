<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的二维码
    </div>
    <div class="x-card">
      <ul class="item-view">
        <li class="item-view-cell">
          <img class="head-img" :src="notImg" alt="">
          <div class="cell-content">
            <p>Dpeish</p>
            <p>A201901</p>
          </div>
        </li>
        <li class="item-view-cell">
          <img class="wechat" :src="wechatQrcode" alt="">
        </li>
        <li class="item-view-cell">
          <p class="text-p">扫一扫二维码进行购物结算</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
import wechatQrcode from '@/assets/common/wechatQrcode.png';
export default {
  name: 'qrcode',
  data () {
    return {
      notImg,
      wechatQrcode
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
  background: $bg;
  color: #fff;
  font-size: .18rem;
  text-align: center;
  @include border-bottom(#f5f5f5);
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .20rem;
    color: #fff;
  }
}
.x-card {
  margin: .15rem .1rem .1rem .1rem;
  .item-view {
    overflow: hidden;
    width: 100%;
    margin-bottom: .1rem;
    .item-view-cell {
      display: flex;
      justify-content:center;
      padding: .11rem .15rem;
      background: #ffffff;
      @include border-divider(#f5f5f5, .15rem, .15rem);
      .head-img {
        width: .42rem;
        height: .42rem;
        margin-right: .1rem;
      }
      .cell-content {
        flex: 1;
        p {
          height: .21rem;
          line-height: .21rem;
          &:nth-child(1) {
            font-size: .14rem;
            color: #383838;
          }
          &:nth-child(2) {
            font-size: .13rem;
            color: #8f8f94;
          }
        }
      }
    }
  }
}
.text-p {
  height: .21rem;
  line-height: .21rem;
  font-size: .14rem;
  color: #8f8f94;
}
.wechat {
  margin: 0 auto;
  width: 2.4rem;
  height: 2.4rem;
  padding: .2rem;
}
</style>


