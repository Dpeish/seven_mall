<template>
  <div>
    
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      
    }
  },
  methods: {
   
  },
  mounted () {
    this.$toast.loading('您填写的密码有误，请重新输入')
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.btn-area {
  margin: .4rem;
  .btn {
    width: 100%;
    height: .42rem;
    line-height: .42rem;
    color: #fff;
    font-size: .18rem;
    text-align: center;
    border-radius: .05rem;
    margin-bottom: 15px;
  }
  .info {
    background: #2db7f5;
  }
  .success {
    background: #19be6b;
  }
  .warning {
    background: #ff9900;
  }
  .error {
    background: #ed4014;
  }
  .loading {
    background: #2db7f5;
  }
}
</style>


