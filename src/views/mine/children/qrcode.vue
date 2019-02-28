<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的二维码
    </div>
  </div>
</template>

<script>
export default {
  name: 'qrcode',
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
</style>


