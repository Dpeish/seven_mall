<template>
  <div class="mine">
    <div class="header">
      我的
      <span class="notices">
        <i class="iconfont icon-msg"></i>
      </span>
    </div>
    <!-- 账号信息 -->
    <div class="account" @click="enterProfiles">
      <img :src="notImg" alt="" class="account-head-img">
      <div class="account-info">
        <p class="account-name">Dpeish</p>
        <p class="account-id">账号：A201901</p>
      </div>
      <i class="iconfont icon-right-arrow arrow"></i>
    </div>
    <!-- 订单区域入口 -->
    <order-enter></order-enter>
    <!-- 各种功能功能入口 -->
    <xlist></xlist>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
import orderEnter from '../components/orderEnter'; // 订单入口区域
import xlist from '../components/xlist'; // 各种功能入库口
export default {
  name: 'mineMy',
  components: {
    orderEnter,
    xlist
  },
  data () {
    return {
      notImg
    }
  },
  methods: {
    enterProfiles () {
      this.$router.push('/mine/profiles');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/varibles.scss";
@import "@/styles/mixin.scss";
.header {
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  background: $bg;
  color: #fff;
  font-size: .18rem;
  .notices {
    position: absolute;
    top: 0;
    right: 0;
    width: .44rem;
    height: .44rem;
    i {
      font-size: .22rem;
    }
  }
}
.account {
  position: relative;
  padding: .2rem .3rem .2rem .15rem;
  background: $bg;
  display: flex;
  .account-head-img {
    width: .42rem;
    height: .42rem;
    margin-right: .15rem;
    border-radius: .42rem;
  }
  .arrow {
    position: absolute;
    top: 50%;
    right: .1rem;
    font-size: .15rem;
    transform: translateY(-50%);
    color: #eee;
  }
  .account-info {
    flex: 1;
    min-width: 0;
    p {
      height: .21rem;
      line-height: .21rem;
    }
    .account-name {
      color: #fff;
      font-size: .15rem;
      font-weight: 300;
      @include ellipsis;
    }
    .account-id {
      color: #eee;
      font-size: .14rem;
      @include ellipsis;
    }
  }
}
</style>