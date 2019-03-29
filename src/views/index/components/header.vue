<template>
  <div class="header">
    <span class="left-icon">
      <i class="iconfont icon-saomiao"></i>
    </span>
    <p class="store-name" @click="enterStore">{{$store.state.shop.storeName}} <i class="iconfont icon-down-arrow"></i></p>
    <span class="right-icon">
      <i class="iconfont icon-msg"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'indexHeader',
  data() {
    return {
      storeName: '',
      storeId: '',
      fromPage: '' // 获取当前的页面 
    }
  },
  methods: {
    enterStore () {
      this.$router.push({
        name: 'ChooseStore',
        params: {
          fromPage: this.fromPage
        }
      })
    }
  },
  mounted () {
    if (!this.$route) {
      console.log(1)
      this.fromPage = '';
    } else {
      this.fromPage = this.$route.name;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/varibles.scss";
.header {
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  background: $bg;
  color: #fff;
  justify-content: space-between;
  .left-icon, .right-icon {
    width: .44rem;
    height: .44rem;
    text-align: center;
    i {
      font-size: .22rem;
    }
  }
  .store-name {
    flex: 1;
    font-size: .18rem;
    text-align: center;
  }
}
</style>


