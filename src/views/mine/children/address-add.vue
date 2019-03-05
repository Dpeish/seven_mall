<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      新增收货地址
      <i class="iconfont icon-delete"></i>
    </div>
    <div class="input-group">
      <div class="input-row">
        <label for="">收货人</label>
        <input type="text">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addressAdd',
  data () {
    return {

    }
  },
  methods: {
    back() {
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
  margin-bottom: .1rem;
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
    color: $pinkText;
  }
}

.input-group {
  overflow: hidden;
  width: 100%;
  .input-row {
    display: flex;
    width: 100%;
    height: .44rem;
    background: #fff;
    label {
      width: 35%;
      padding: .14rem .15rem;
      font-size: .15rem;
    }
    input {
      flex: 1;
      padding: .14rem .15rem .14rem 0;
    }
  }
}
</style>


