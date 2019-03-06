<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      使用反馈
    </div>
    <div class="title">问题和意见</div>
    <div class="text-area">
      <textarea class="question" name="" id="" placeholder="请详细描述你的问题和意见..."></textarea>
    </div>
    <div class="btn-area">
      <div class="btn">提 交</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'feedback',
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

.title {
  margin: .15rem .15rem .05rem .15rem;
  color: #6d6d72;
  font-size: .14rem;
}

.text-area {
  width: 100%;
  background: #fff;
  .question {
    box-sizing: border-box;
    width: 100%;
    height: 1.4rem;
    padding: .1rem .15rem 0 .15rem;
    font-size: .15rem;
    color: #6d6d72;
    font-family: sans-serif;
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

