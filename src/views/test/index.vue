<template>
  <div class="test">
    <div class="btn-area">
      <router-link to="/">
        <div class="btn">首页</div>
      </router-link>
    </div>
    <span>1</span>
    <span class="cls">2</span>
    <span>
      3
      <span>4</span>
    </span>
    <span>5</span>
  </div>
</template>

<script>

export default {
  name: 'test'
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.test {
  padding: .15rem;
}
.btn-area {
  .btn {
    width: 100%;
    height: .42rem;
    line-height: .42rem;
    background: $btn;
    color: #fff;
    font-size: .18rem;
    text-align: center;
    border-radius: .05rem;
    margin-bottom: .15rem;
  }
}

.cls~* {
  border: 1px solid green;
}
</style>


