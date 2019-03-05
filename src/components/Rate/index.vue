<template>
  <div class="rating">
    <span 
      v-for="(item, index) in Classes" 
      :key="index"
      :class="item"
      class="iconfont"
      @click.stop="setStar(index, $event)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'rate',
  props: {
    // 外部传入的分值
    extScore: {
      type: Number,
      default: 0
    },
    // 是否禁用 用来显示分数
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      score: '' // 分数
    }
  },
  computed: {
    Classes () {
      const Full = 'icon-full'; // 全星
      const Half = 'icon-half'; // 半星
      const Star = 'icon-star'; // 空星
      // 结果返回一个数组 遍历输出星星
      let result = [];
      // 计算星星的数量
      let score = Math.floor(this.score * 2) / 2;
      // 非整数星星判断
      let decimal = score % 1 !== 0; 
      // 整数星星判断
      let integer = Math.floor(score);
      // 全星
      for (let i = 0; i < integer; i++) {
        result.push(Full);
      }
      // 半星
      if (decimal) {
        result.push(Half);
      }
      // 循环空星
      while (result.length < 5) { 
        result.push(Star);
      }
      // 返回类名集合
      return result;
    }
  },
  methods: {
    setStar(index, e) {
      if (this.disabled) return false;
      this.score = index + 1;
      this.$emit('getStar', this.score);
    }
  },
  mounted () {
    this.score = this.extScore;
  }
}
</script>

<style scoped>
.rating {
  color: #ffa037 !important;
  
}
.rating span {
  margin: 0 0.02rem;
}
</style>


