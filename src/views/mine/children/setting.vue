<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      系统设置
    </div>
    <ul class="view-item">
      <li class="title">
        修改密码
        <i class="iconfont icon-right-arrow arrow"></i>
      </li>
      <li class="title">
        其他说明
        <i class="iconfont icon-right-arrow arrow"></i>
      </li>
    </ul>
    <div class="btn-area">
      <div class="btn" @click="outSys">退出登录</div>
    </div>
    <div class="msg-tips" @click="gotest">
      <p>@ Power by Dpeish 2019 All right reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting',
  data() {
    return {
      testNum: 0
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    outSys () {
      localStorage.removeItem('welcome');
      this.$router.replace('/login');
    },
    gotest () {
      this.testNum++;
      if (this.testNum === 6) {
        this.$router.push('/test');
        this.testNum = 0;
      }
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
}

.view-item {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-bottom: .1rem;
  .title {
    position: relative;
    padding: .11rem .15rem;
    font-size: .15rem;
    color: #383838;
    @include border-bottom-posi(#f5f5f5, .15rem);
    .arrow {
      position: absolute;
      top: 50%;
      right: .1rem;
      font-size: .15rem;
      transform: translateY(-50%);
      color: #bbb;
    }
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
.msg-tips {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: .1rem;
  p {
    width: 100%;
    text-align: center;
    font-size: .12rem;
    color: #8f8f94;
  }
}
</style>

