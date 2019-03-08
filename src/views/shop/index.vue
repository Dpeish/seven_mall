<template>
  <div class="shop">
    <!-- 子页面入口 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'shop'
}
</script>

<style lang="scss" scoped>
.shop /deep/ .header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
}
.shop {
  padding-top: .44rem;
  padding-bottom: .54rem;
}
</style>