<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      新增收货地址
      <i class="iconfont icon-delete"></i>
    </div>
    <div class="input-group">
      <div class="input-row">
        <label class="input-lable" for="">收货人：</label>
        <input class="input-cell" type="text" placeholder="请输入收货人姓名">
      </div>
      <div class="input-row">
        <label class="input-lable" for="">手机号码：</label>
        <input class="input-cell" type="text" placeholder="请输入收货人手机号码">
      </div>
      <div class="input-row">
        <label class="input-lable" for="">所在地区：</label>
        <input class="input-cell" type="text">
      </div>
      <div class="input-row">
        <label class="input-lable" for="">详细地址：</label>
        <input class="input-cell" type="text" placeholder="小区、楼牌号等">
      </div>
    </div>
    <div class="input-group">
      <div class="input-row">
        <label class="input-lable" for="">设为默认：</label>
        <span class="switch-container">
            <input id="switch" type="checkbox" class="switch" />
            <label for="switch"></label>
        </span>
      </div>
    </div>
    <div class="btn-area">
      <div class="btn">保存</div>
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
    color: $pinkText;
  }
}

.input-group {
  overflow: hidden;
  width: 100%;
  margin-bottom: .1rem;
  .input-row {
    position: relative;
    display: flex;
    width: 100%;
    height: .44rem;
    background: #fff;
    .input-lable {
      width: 35%;
      line-height: .15rem;
      padding: .14rem .15rem;
      font-size: .15rem;
    }
    .input-cell {
      flex: 1;
      line-height: .15rem;
      font-size: .15rem;
      padding: .14rem .15rem .14rem 0;
    }
  }
}
.switch-container {
  position: absolute;
  right: .18rem;
  top: 50%;
  transform: translateY(-50%);
}
.btn-area {
  margin: .15rem;
  .btn {
    width: 100%;
    height: .42rem;
    line-height: .42rem;
    background: $btn;
    color: #fff;
    font-size: .18rem;
    text-align: center;
    border-radius: .05rem;
  }
}
</style>


