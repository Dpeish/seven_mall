<template>
  <div>
    <transition name="fade">
      <div class="backdrop" v-show="show" @click.stop="showBrandDom($event)"></div>
    </transition>
    <transition name="right">
      <ul class="view-item" v-show="show" ref="brand">
        <li class="item-cell border-bottom">
          <div class="title">
            品牌选择
          </div>
        </li>
        <li class="brand-cell">
          <span v-for="(item, index) in brandList" :key="index" @click="brandToggle(index, item)">{{ item.brandName }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'brand',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.value,
      showBrand: 0,
      brandList: [
        {
          brandName: '农夫',
          brandId: 1
        }, {
          brandName: '陶碧华老干妈',
          brandId: 2
        }, {
          brandName: '海天',
          brandId: 3
        }, {
          brandName: '厨邦',
          brandId: 4
        }, {
          brandName: '哇哈哈',
          brandId: 4
        }
      ]
    }
  },
  watch: {
    value (val) {
      this.show = val;
    }
  },
  methods: {
    showBrandDom (e) {
      const el = this.$refs.brand;
      if (!el.contains(e.target)) this.show = false;
      this.$emit('input', this.show);
    },
    brandToggle(i, res) {
      this.showBrand = i;
      this.$emit('chooseBrand', res)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.backdrop {
  position: fixed;
  z-index: 19920999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
}
.view-item {
  position: fixed;
  z-index: 19921999;
  top: 0;
  right: 0;
  width: 2.62rem;
  height: 100%;
  background: #fff;
  color: #888;
  .border-bottom {
    @include border-bottom(#f5f5f5);
  }
  .item-cell {
    display: flex;
    width: 100%;
    .title {
      width: 100%;
      height: .4rem;
      padding: .16rem .15rem 0 .15rem;
      font-size: .13rem;
      @include border-bottom(#f5f5f5);
    }
  }
  .brand-cell {
    position: relative;
    width: 100%;
    padding: .11rem .15rem;
    font-size: .15rem;
    @include border-bottom(#f5f5f5);
    span {
      display: inline-block;
      padding: .06rem;
      color: #666;
      text-align: center;
      margin-right: 0.06rem;
      margin-bottom: 0.06rem;
      font-size: .12rem;
      @include border-1px(#e5e5e5, 0.03rem);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.right-leave-active,.right-enter-active {
  transition: all .35s ease;
}
.right-leave-active,.right-enter{
  right: -2.62rem !important;
}
.right-leave,.right-enter-active{
  right: 0;
}
</style>

