<template>
  <div>
    <header class="header">
      <span class="svg-container" @click="back">
        <svg-icon icon-class="back" />
      </span>
      注册
    </header>
    <div class="container">
      <div class="input-row line">
        <span class="svg-step">
          <svg-icon icon-class="phone" />
        </span>
        <input type="text" placeholder="手机号">
      </div>
      <div class="input-row line">
        <span class="svg-step">
          <svg-icon icon-class="code" />
        </span>
        <input type="text" class="code-input" placeholder="输入验证码">
        <div class="get-code">获取验证码</div>
      </div>
      <div class="input-row">
        <span class="svg-step">
          <svg-icon icon-class="password" />
        </span>
        <input type="password" placeholder="密码为6-12为数字、字母或符号">
      </div>
      <div class="protocol">
        <input type="checkbox" id="agree" value="" v-model="value">
        <label for="agree" class="agree-label">
          我已阅读并同意
          <router-link to="/agreement">
            《用户使用协议》
          </router-link>
        </label>
      </div>
      <div class="btn-area">
        <div class="btn">立即注册</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      value: 0
    }
  },
  methods: {
    back () {
      this.$router.push('/login');
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
  text-align: center;
  color: #fff;
  background: $bg;
  font-size: .17rem;
  .svg-container {
    position: absolute;
    left: 0;
    color: #fff;
    vertical-align: middle;
    width: .44rem;
    line-height: .44rem;
    display: inline-block;
    font-size: .2rem;
  }
}

.title {
  line-height: .21rem;
  margin: .2rem .15rem .05rem;
  color: #6d6d72;
  font-size: .14rem;
}
.svg-step {
  width: .44rem;
  line-height: .44rem;
  color: #9ba098;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  font-size: .2rem;
}
.line {
  @include border-bottom-posi(#eee, .26rem);
}
.input-row {
  overflow: hidden;
  background: #fff;
  height: .44rem;
  padding: 0 .15rem;
  input {
    width: calc(100% - .5rem);
    line-height: .24rem;
  }
  .code-input {
    width: calc(100% - 1.4rem);
  }
  .get-code {
    float: right;
    width: .8rem;
    height: .44rem;
    line-height: .44rem;
    padding-left: .15rem;
    font-size: .12rem;
    color: #666;
    text-align: center;
    @include border-left(#eee);
  }
}

.protocol {
  padding: .2rem .15rem 0.1rem;
  font-size: .12rem;
  color: #383838;
  .agree-label {
    a {
      color: $pinkText;
    }
  }
  input {
    width: .18rem;
    height: .18rem;
    margin-right: .05rem;
    vertical-align: -0.05rem;
    border-radius: .18rem;
    border: 1px solid #b2b2b2;
  }
  input:checked {
    border: none;
    background: $btn;
    background-image: url('../../assets/login/check.png');
    background-size: 80% 80%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
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
