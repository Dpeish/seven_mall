<template>
  <div class="cutting">
    <span class="title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
// 分割线 title
export default {
  name: 'Cutting'
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.cutting {
  position: relative;
  margin: .15rem 0;
  text-align: center;
  @include border-cutting(#e5e6e5);
  .title {
    padding: 0 .1rem;
    font-size: .14rem;
    color: #6d6d72;
    background: #f5f5f5;
  }
}
</style>
