<template>
  <div>
    <index-header></index-header>
    <div class="wrapper" ref="wrapper">
      <div class="wrap">
        <index-banner :list='list'></index-banner>
        <ul class="speedy">
          <li v-for="(item, index) in speedyList" :key="index">
            <span class="iconfont icon-item" :class="item.iconClass"></span>
            <p>{{item.title}}</p>
          </li>
        </ul>
        <Cutting>热销商品</Cutting>
        <index-hot-sell></index-hot-sell>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import indexBanner from './components/banner';
import indexHeader from './components/header';
import Cutting from '@/components/Cutting'; // 分割线
import indexHotSell from './components/hotSell';

import banner1 from '@/assets/index/banner1.png';
import banner2 from '@/assets/index/banner2.png';
import banner3 from '@/assets/index/banner3.png';

export default {
  name: 'index',
  components: {
    indexBanner,
    indexHeader,
    Cutting,
    indexHotSell
  },
  data () {
    return {
      list: [
        {
          "id": "0001",
          "imgUrl": banner1
        }, {
          "id": "0002",
          "imgUrl": banner2
        }, {
          "id": "0003",
          "imgUrl": banner3
        }
      ],
      speedyList: [
        {
          'iconClass': 'icon-tags',
          'title': '促销活动'
        }, {
          'iconClass': 'icon-bag',
          'title': '常订商品'
        }, {
          'iconClass': 'icon-fav',
          'title': '我的收藏'
        }, {
          'iconClass': 'icon-brand',
          'title': '我的积分'
        }
      ]
    }
  },
  methods: {
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 3
        });
        console.log(this.scroll)
      } else {
        this.scroll.refresh();
      };
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this._initScroll();
    });
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.wrapper {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: .44rem;
  left: 0;
  bottom: .58rem;
  right: 0;
  .warp {
    height: auto;
  }
}
.speedy {
  display: flex;
  width: 100%;
  padding: .15rem 0;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    .icon-item {
      display: inline-block;
      width: .4rem;
      height: .4rem;
      line-height: .4rem;
      border-radius: .4rem;
      color: #fff;
      font-size: 22px;
    }
    p {
      height: .21rem;
      margin-top: .04rem;
      color: #9e9698;
      font-size: .12rem;
    }
  }
}

.icon-tags {
  background: #67c56e;
}

.icon-bag {
  background: #ffd043;
}

.icon-fav {
  background: #fb6672;
}

.icon-brand {
  background: #a59bec;
}

</style>


