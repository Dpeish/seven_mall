<template>
  <div class="login">
    <header class="header">
      <img :src="logo" alt="">
    </header>
    <div class="login-area">
      <div class="input-area input-user">
        <label class="svg-container" for="user">
          <svg-icon icon-class="user" />
        </label>
        <input 
          type="text" 
          id="user" 
          placeholder="帐号/手机号" 
          v-model="loginForm.userName"
          v-validate="'required|email'" 
          name="email"
          data-vv-as="邮箱"
        />
        <span 
          class="svg-close" 
          v-show="loginForm.userName" 
          @click="clearUserName"
        >
          <svg-icon icon-class="close" />
        </span>
        <span class="tips" v-show="errors.first('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="input-area input-pwd">
        <label class="svg-container" for="password">
          <svg-icon icon-class="password" />
        </label>
        <input 
          type='password' 
          id="password" 
          placeholder="密码" 
          v-model="loginForm.password"
        />
        <span 
          class="svg-close" 
          v-show="loginForm.password"
          @click="clearPassword"
        >
          <svg-icon icon-class="close" />
        </span>
        <span class="tips" v-show="!loginForm.password">请输入密码</span>
      </div>
      <div 
        class="login-btn"
        @click="login"
      >
        登 录
      </div>
    </div>
    <div class="footer">
      <div class="forget">
        <router-link to="/ResetPassword">
          忘记密码
        </router-link>
      </div>
      <div class="register">
        <router-link to="/register">
          注册帐号
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/assets/login/logo.png';
export default {
  name: 'login',
  beforeCreate () {
    window.document.body.style.backgroundColor = '#fff';
  },
  beforeDestroy () {
    window.document.body.style.backgroundColor = '';
  },
  data() {
    return {
      logo,
      loginForm: {
        userName: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  watch: {

  },
  methods: {
    clearUserName() {
      this.loginForm.userName = '';
    },
    clearPassword() {
      this.loginForm.password = '';
    },
    login () {
      this.$validator.validate().then((result) => {
        if(result) {
          alert('验证成功')
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  padding: .5rem .3rem;
  img {
    display: block;
    margin: 0 auto;
    width: 1.42rem;
    height: 1.42rem;
  }
}
.login-area {
  padding: 0 .2rem;
  .input-area {
    position: relative;
    padding: .1rem 0;
    height: .44rem;
    .tips {
      position: absolute;
      right: .2rem;
      bottom: .02rem;
      font-size: .1rem;
      color: #f56c6c;
    }
    .svg-close {
      position: absolute;
      right: 0;
      font-size: .2rem;
      color: #9ba098;
    }
    .svg-container {
      color: #9ba098;
      vertical-align: middle;
      width: .44rem;
      display: inline-block;
      font-size: .2rem;
      padding-left: .13rem;
    }
    input {
      width: calc(100% - .57rem);
      height: .24rem;
      line-height: .24rem;
      font-size: .14rem;
      color: #333;
    }
  }
  .input-user {
    @include border-top(#eee);
  }
  .input-pwd {
    @include border-top-bottom(#eee);
    margin-bottom: .4rem;
  }
  .login-btn {
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

.footer {
  display: flex;
  flex: 1;
  padding: 0 .2rem;
  width: 100%;
  height: .44rem;
  font-size: .12rem;
  background: #fff;
  .forget {
    flex: 1;
    line-height: .44rem;
    text-align: left;
    a {
      color: #888988;
    }
  }
  .register {
    flex: 1;
    line-height: .44rem;
    text-align: right;
    a {
      color: $pinkText;
    }
  }
}
</style>
