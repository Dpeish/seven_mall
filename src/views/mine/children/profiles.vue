<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的账号
    </div>
    <ul class="item-view">
      <li class="item-view-cell clearfix">
        头像
        <span>
          <img :src="notImg" alt="" class="head-img">
        </span>
        <i class="iconfont icon-right-arrow"></i>
      </li>
      <li class="item-view-cell clearfix">
        账号
        <span class="long-text-right">
          A201901
        </span>
      </li>
      <li class="item-view-cell clearfix">
        昵称
        <span class="long-text-right">
          Dpeish
        </span>
        <i class="iconfont icon-right-arrow"></i>
      </li>
      <li class="item-view-cell clearfix">
        手机
        <span class="long-text-right">
          18650801395
        </span>
        <i class="iconfont icon-right-arrow"></i>
      </li>
      <li class="item-view-cell clearfix">
        生日
        <span class="long-text-right">
          1992-09-05
        </span>
        <i class="iconfont icon-right-arrow"></i>
      </li>
    </ul>

    <ul class="item-view">
      <li class="item-view-cell clearfix" @click="goPage">
        我的二维码
        <i class="iconfont icon-right-arrow"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'profiles',
  data() {
    return {
      notImg
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    goPage() {
      this.$router.push('/mine/qrcode');
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
.item-view {
  overflow: hidden;
  width: 100%;
  margin-bottom: .1rem;
  .item-view-cell {
    position: relative;
    background: #fff;
    padding: .11rem .3rem .11rem .15rem;
    font-size: .15rem;
    color: #383838;
    display: flex;
    align-items:center;
    @include border-bottom-posi(#f5f5f5, .15rem);
    span {
      margin-left: auto;
      @include ellipsis;
    }
    .icon-right-arrow {
      position: absolute;
      top: 50%;
      right: .1rem;
      transform: translateY(-50%);
      font-size: .15rem;
      color: #bbb;
    }
  }
}

.head-img {
  width: .42rem;
  height: .42rem;
}

.long-text-right {
  display: inline-block;
  width: 68%;
  text-align: right;
  color: #888;
}
</style>


