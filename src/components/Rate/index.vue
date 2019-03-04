<template>
  <div class="rateing">
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
const LENGTH = 5;
const CLS_ON = 'icon-full'; // 全星
const CLS_HALF = 'icon-half'; // 半星
const CLS_OFF = 'icon-start'; // 空星
export default {
  name: 'rate',
  props: {
    porpScore: {
      default: 3.5
    },
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
      let result = []; // 返回的是一个数组,用来遍历输出星星
      let score = Math.floor(this.score * 2) / 2; // 计算所有星星的数量
      let hasDecimal = score % 1 !== 0; // 非整数星星判断
      let integer = Math.floor(score); // 整数星星判断
      for (let i = 0; i < integer; i++) { // 整数星星使用on
        result.push(CLS_ON);// 一个整数星星就push一个CLS_ON到数组
      }
      if (hasDecimal) { // 非整数星星使用half
        result.push(CLS_HALF);// 类似
      }
      while (result.length < LENGTH) { // 余下的用无星星补全,使用off
        result.push(CLS_OFF);// 类似
      }
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
    this.score = this.porpScore;
  }
}
</script>

<style scoped>

</style>


