<template>
  <div class="hot">
    <ul class="content clearfix">
      <li v-for="(item, index) in 20" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hotsell'
}
</script>

<style lang="scss" scoped>
.hot {
  width: 100%;
}
.content {
  width: 100%;
  li {
    float: left;
    width: 33.333%;
    height: 1.5rem;
    background: #fff;
  }
}
</style>


