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
const STAR_ON = 'icon-full'; // 全星
const STAR_HALF = 'icon-half'; // 半星
const STAR_OFF = 'icon-start'; // 空星
export default {
  name: 'rate',
  props: {
    porpScore: {
      type: Number,
      default: 0
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
      // 结果返回一个数组 遍历输出星星
      let result = [];
      // 计算星星的数量
      let score = Math.floor(this.score * 2) / 2;
      console.log(score)
      let hasDecimal = score % 1 !== 0; // 非整数星星判断
      let integer = Math.floor(score); // 整数星星判断
      for (let i = 0; i < integer; i++) { // 整数星星使用on
        result.push(STAR_ON);// 一个整数星星就push一个STAR_ON到数组
      }
      if (hasDecimal) { // 非整数星星使用half
        result.push(STAR_HALF);// 类似
      }
      while (result.length < LENGTH) { // 余下的用无星星补全,使用off
        result.push(STAR_OFF);// 类似
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


