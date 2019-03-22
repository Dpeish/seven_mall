<template>
  <div>
    <transition name="fade">
      <div class="backdrop" v-show="show" @click.stop="showTickDom($event)"></div>
    </transition>
    <transition name="right">
      <ul class="view-item" v-show="show" ref="sortpanel">
        <li class="item-cell border-bottom">
          <div class="title">
            排序方式
          </div>
        </li>
        <li class="sort-cell" v-for="(item, index) in sortList" :key="index" @click="tickToggle(index, item)">
          {{ item.sortName }}
          <span v-if="showTick == index" class="iconfont icon-tick"></span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'sortpanel',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.value,
      showTick: 0,
      sortList: [
        {
          sortName: '综合排序',
          sortId: 1
        }, {
          sortName: '销量排序',
          sortId: 2
        }, {
          sortName: '新品排序',
          sortId: 3
        }, {
          sortName: '价格排序',
          sortId: 4
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
    showTickDom (e) {
      const el = this.$refs.sortpanel;
      if (!el.contains(e.target)) this.show = false;
      this.$emit('input', this.show);
    },
    tickToggle(i, res) {
      this.showTick = i;
      this.$emit('chooseSort', res)
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
  .sort-cell {
    position: relative;
    width: 100%;
    height: .44rem;
    padding: .11rem .15rem;
    font-size: .15rem;
    @include border-bottom(#f5f5f5);
    .icon-tick {
      position: absolute;
      right: 15%;
      top: 50%;
      transform: translateY(-50%);
      color: #67C23A;
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

