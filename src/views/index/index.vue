<template>
  <div>
    <index-header></index-header>
    <div class="wrapper" ref="wrapper">
      <div class="wrap">
        <index-banner :list='list'></index-banner>
        <ul class="speedy">
          <li v-for="(item, index) in speedyList" :key="index" @click="enterPage(item.link)">
            <span class="iconfont icon-item" :class="item.iconClass"></span>
            <p>{{item.title}}</p>
          </li>
        </ul>
        <Cutting>明星商品</Cutting>
        <index-star-sell v-model="goodsList"></index-star-sell>
        <index-hot-sell v-model="goodsList"></index-hot-sell>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import indexBanner from './components/banner';
import indexHeader from './components/header';
import Cutting from '@/components/Cutting'; // 分割线
import indexStarSell from './components/starSell';
import indexHotSell from './components/hotSell';

import banner1 from '@/assets/index/banner1.png';
import banner2 from '@/assets/index/banner2.png';
import banner3 from '@/assets/index/banner3.png';

import goodsData from '@/json/goodsData'

export default {
  name: 'index',
  components: {
    indexBanner,
    indexHeader,
    Cutting,
    indexStarSell,
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
          iconClass: 'icon-sale',
          title: '促销活动',
          link: '/'
        }, {
          iconClass: 'icon-bags',
          title: '常订商品',
          link: '/'
        }, {
          iconClass: 'icon-fav',
          title: '我的收藏',
          link: '/mine/collect'
        }, {
          iconClass: 'icon-jifen',
          title: '我的积分',
          link: '/mine/integral'
        }
      ],
      goodsList: []
    }
  },
  created () {
    this.goodsList = goodsData.goodsList;
  },
  methods: {
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 3
        });
      } else {
        this.scroll.refresh();
      };
    },
    enterPage (link) {
      this.$router.push(link);
    },
    getGoodsData () {
      this.$axios.get('/static/json/goodsData.json').then((res) => {
        if (res.data.returnCode === 0) {
          this.goodsList = res.data.goodsList;
        }
      })
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this._initScroll();
      // this.getGoodsData();
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
  bottom: .5rem;
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

.icon-sale {
  background: #67c56e;
}

.icon-bags {
  background: #ffd043;
}

.icon-fav {
  background: #fb6672;
}

.icon-jifen {
  background: #a59bec;
}

</style>


