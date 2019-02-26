<template>
  <div class="container">
    <ul class="msg">
      <li>startY: {{startY}}</li>
      <li>endY: {{endY}}</li>
      <li>滑动方向: {{msg}}</li>
    </ul>
    <div class="picker">
        <ul class="picker-data" ref="pickerScorll" style="top: 96px;" @touchstart="touchstarts" @touchmove="touchmover">
          <li v-for="item of list" :key="item.id">{{item.value}}</li>
        </ul>
      <div class="active-picker"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'picker',
  data () {
    return {
      msg: '',
      startY: 0,
      endY: 0,
      list: [
        {
          id: 1,
          value: 'Ai'
        }, {
          id: 2,
          value: 'Vue'
        }, {
          id: 3,
          value: 'React'
        }, {
          id: 4,
          value: 'angular'
        }, {
          id: 5,
          value: 'promise'
        }, {
          id: 6,
          value: 'ES6'
        }, {
          id: 7,
          value: 'Map'
        }, {
          id: 8,
          value: 'Filter'
        }, {
          id: 9,
          value: 'Ajax'
        }, {
          id: 10,
          value: 'axios'
        }, {
          id: 11,
          value: 'wabpack'
        }, {
          id: 12,
          value: 'VueCli3'
        }
      ]
    }
  },
  methods: {
    touchstarts(e) {
      e.preventDefault()
      let disY = e.changedTouches[0].pageY;
      this.startY = disY;
    },
    touchmover(e) {
      e.preventDefault()
      let endY = e.changedTouches[0].pageY;
      this.endY = endY;

      // 获取要滑动元素的位置
      let oEl = this.$refs.pickerScorll;

      console.log(oEl.offsetbottom)

      // 计算滑动距离
      let resultY = this.startY - endY;
      if (resultY < 0) {
        this.msg = '向上滑动' + oEl.style.top;
      } else if (resultY > 0) {
        this.msg = '向下滑动'
      } else {
        this.msg = '没动'
      }
    }
  }
}
</script>

<style scoped>
.msg {
  position: absolute;
  width: 100%;
  top: 0;
  height: 60px;
  text-align: center;
  background: #fff;
}
.container {
  position: fixed;
  z-index: 2046;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .6)
}
.picker {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 230px;
  background: #fff;
}

.active-picker {
  position: absolute;
  width: 100%;
  top: 96px;
  height: 32px;
  line-height: 32px;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
}
.picker-data {
  position: absolute;
  width: 100%;
  height: auto;
  overflow: auto;
}
.picker-data li {
  height: 32px;
  line-height: 32px;
  color: #8d8989;
  text-align: center
}
</style>

