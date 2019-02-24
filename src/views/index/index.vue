<template>
  <div>
    <!-- <p v-if="show" ref="node">内容</p> -->
    <button @click="handleShow">按钮</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      arr: ['a', 'b', 'c']
    }
  },
  methods: {
    handleShow () {
      this.$Alert.error({
        content: '出错啦.请注意',
        closable: true,
        position: 'bottom'
      })
    }
  },
  mounted () {
    this.$Alert.loading('您填写的密码有误，请重新输入')
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
</style>


