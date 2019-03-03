<template>
  <div>
    <index-header></index-header>
  </div>
</template>

<script>
import indexHeader from '@/views/index/components/header';
export default {
  name: 'shop',
  components: {
    indexHeader
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
</style>