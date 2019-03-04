<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的积分
    </div>
    <div class="grade-container">
      <p class="title">七里猫累计积分</p>
      <h3 class="grade">3567</h3>
      <span>打败了 <b class="stress">91.1%</b> 的七里猫用户</span>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrap" style="padding: .1rem 0">
        <ul class="grade-item">
          <li class="grade-item-cell" v-for="(item, index) in gradeLog" :key="index">
            {{ item.dec }}
            <p class="time">{{ item.time }}</p>
            <p class="log-grade text-pink" v-if="item.type == 1">+ {{ item.grade }}</p>
            <p class="log-grade text-green" v-else>- {{ item.grade }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name: 'integral',
  data () {
    return {
      scroll: '', // 滚动对象
      gradeLog: [
        // type 0 扣分 1加分
        {
          dec: '积分兑换',
          time: '2019-01-25',
          grade: 160,
          type: 0
        }, {
          dec: '订购商品',
          time: '2019-01-23',
          grade: 50,
          type: 1
        }, {
          dec: '订购商品',
          time: '2019-01-23',
          grade: 50,
          type: 1
        }, {
          dec: '积分兑换',
          time: '2019-01-25',
          grade: 100,
          type: 0
        }, {
          dec: '订购商品',
          time: '2019-01-23',
          grade: 50,
          type: 1
        }, {
          dec: '订购商品',
          time: '2019-01-23',
          grade: 50,
          type: 1
        }, {
          dec: '订购商品',
          time: '2019-01-23',
          grade: 50,
          type: 1
        }, {
          dec: '完善个人资料',
          time: '2019-01-23',
          grade: 10,
          type: 1
        }, {
          dec: '注册帐号',
          time: '2019-01-23',
          grade: 10,
          type: 1
        }
      ]
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 2
        });
      } else {
        this.scroll.refresh();
      };
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this._initScroll();
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.wrapper {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 1.68rem;
  left: 0;
  bottom: 0;
  right: 0;
  .warp {
    height: auto;
  }
}
.header {
  position: relative;
  height: .44rem;
  line-height: .44rem;
  background: #fcfcfc;
  font-size: .18rem;
  text-align: center;
  span {
    position: absolute;
    left: 0;
    top: 0;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .20rem;
    color: #ccc;
  }
}

.grade-container {
  overflow: hidden;
  padding: .2rem .15rem;
  background: #fff;
  text-align: center;
  color: #9e9698;
  .title {
    font-size: .13rem;
    margin-bottom: .04rem;
  }
  .grade {
    color: $pinkText;
    font-size: .4rem;
    font-weight: bold;
    margin-bottom: .16rem;
  }
  .stress {
    color: $pinkText;
    font-size: .2rem;
  }
}

.grade-item {
  overflow: hidden;
  width: 100%;
  .grade-item-cell {
    position: relative;
    background: #fff;
    padding: .11rem .15rem;
    @include border-bottom-posi(#f5f5f5, .11rem);
  }
  .time {
    line-height: .21rem;
    font-size: .14rem;
    color: #8f8f94;
  }
  .log-grade {
    position: absolute;
    right: .15rem;
    bottom: .12rem;
  }
  .text-pink {
    color: $pinkText;
  }
  .text-green {
    color: #57b846;
  }
}
</style>

