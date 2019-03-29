<template>
  <div class="badge">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'badge',
  props: {
    title: {
      // badge可选数字和文字
      type: String | Number,
      default: () => {
        return ''
      }
    }
  },
  mounted () {
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.badge {
  position: absolute!important;
  top: 0;
  right: 0;
  z-index: 66;
  display: inline-block;
  padding: 0 0.03rem;
  border-radius: .5rem;
  background: rgba(250, 66, 81, .8);
  color: #fff!important;
  font-size: 0.12rem;
  min-width: 0.18rem;
  min-height: 0.18rem;
  box-sizing: border-box;
  line-height: 0.18rem;
  text-align: center;
}
</style>

