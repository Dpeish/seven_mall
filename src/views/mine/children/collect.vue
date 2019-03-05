<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的收藏
    </div>
    <ul class="tab-bar">
      <li @click="actIndex = 0" :class="{active: actIndex == 0}">商品<span>(5)</span></li>
      <li @click="actIndex = 1" :class="{active: actIndex == 1}">商家<span>(3)</span></li>
    </ul>
    <ul class="container">
      <li v-show="actIndex == 0">
        <div class="wrapper" ref="wrapper">
          <div class="wrap" style="padding: .1rem 0">
            <ul class="content clearfix">
              <li v-for="(item, index) in goodsList" :key="index">
                <img :src="item.goodsImg" alt="" class="goods-img">
                <div class="goods-content">
                  <p class="goods-info">{{ item.info }}</p>
                  <p class="goods-weight">规格：{{ item.weight }}</p>
                  <p class="goods-price">{{ item.price | formatPrice }}<span class="goods-unit"> /{{ item.unit }}</span></p>
                </div>
                <div class="goods-add">
                  <span class="iconfont icon-add"></span>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </li>
      <li v-show="actIndex == 1">
        <div class="wrapper" ref="wrapper2">
          <div class="wrap" style="padding: .1rem 0">
            <ul class="item-view" v-for="(item, index) in commentsList" :key="index">
              <li class="item-view-cell">
                <img class="head-img" :src="notImg" alt="">
                <p class="store-name">{{ item.storeName }} <i class="iconfont icon-right-arrow"></i></p>
              </li>
              <li class="item-view-cell">
                <div class="order-info text-hidden">
                  <x-rate :extScore="item.score" disabled></x-rate>
                </div>
              </li>
            </ul>
          </div>
        </div> 
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import goods from '@/assets/index/goods.jpg';
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'collect',
  data() {
    return {
      actIndex: 0,
      goods,
      notImg,
      scroll: '', // tab1 滚动
      scroll2: '', // tab2 滚动
      goodsList: [
        {
          id: '001',
          goodsImg: goods,
          info: '茅台镇洞藏老酒53度酱香型白酒低价批发坛装十五年原浆纯粮食酒',
          weight: '210g',
          price: 7.5,
          unit: '件'
        }, {
          id: '002',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1,
          unit: '件'
        }, {
          id: '003',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1,
          unit: '箱'
        }, {
          id: '004',
          goodsImg: goods,
          info: '陶华碧老干妈香辣脆油辣椒210g瓶',
          weight: '210g',
          price: 7.5,
          unit: '箱'
        }, {
          id: '005',
          goodsImg: goods,
          info: '怡泉+C柠檬味汽水500ml*12饮料',
          weight: '500ml',
          price: 3.1,
          unit: '件'
        }, {
          id: '006',
          goodsImg: goods,
          info: '椰树牌椰子汁250ml*24',
          weight: '250ml',
          price: 3.1,
          unit: '箱'
        }
      ],
      commentsList: [
        {
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594966',
          dec: '老板很会做生意，服务态度好',
          score: 4
        }, {
          storeName: '青果食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 5
        }, {
          storeName: '枇杷食品',
          orderNumber: 'DH201608192145534974',
          dec: '老板很会做生意，服务态度好',
          score: 3
        },{
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594966',
          dec: '老板很会做生意，服务态度好',
          score: 4
        }, {
          storeName: '青果食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 5
        }, {
          storeName: '枇杷食品',
          orderNumber: 'DH201608192145534974',
          dec: '老板很会做生意，服务态度好',
          score: 3
        },{
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594966',
          dec: '老板很会做生意，服务态度好',
          score: 4
        }, {
          storeName: '青果食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 5
        }, {
          storeName: '枇杷食品',
          orderNumber: 'DH201608192145534974',
          dec: '老板很会做生意，服务态度好',
          score: 3
        }
      ]
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
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
    },
    _initScroll2 () {
      if (!this.scroll2) {
        this.scroll2 = new BScroll(this.$refs.wrapper2, {
          click: true,
          probeType: 2
        });
      } else {
        this.scroll2.refresh();
      };
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this._initScroll();
      this._initScroll2();
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
  top: .88rem;
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
  @include border-bottom(#f5f5f5);
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

.tab-bar {
  display: flex;
  overflow: hidden;
  li {
    flex: 1;
    height: .44rem;
    line-height: .44rem;
    background: #fff;
    text-align: center;
    span {
      font-size: .14rem;
    }
  }
  .active {
    position: relative;
    color: $pinkText;
    &:after {
      position: absolute;
      right: 25%;
      bottom: 0;
      left: 25%;
      height: .03rem;
      background: $bg;
      content: '';
    }
  }
}

.content {
  margin: 0 auto;
  width: 100%;
  margin-bottom: .1rem;
  li {
    position: relative;
    padding: .11rem .15rem; 
    background: #fff;
    display: flex;
    @include border-top-posi(#f5f5f5, .15rem);
    .goods-img {
      width: .9rem;
      height: .9rem;
      margin-right: .1rem;
    }
    .goods-add {
      position: absolute;
      right: 0;
      bottom: 0;
      width: .44rem;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
      span {
        color: $pinkText;
        font-size: .22rem;
      }
    }
    .goods-content {
      flex: 1;
      .goods-info {
        overflow: hidden;
        height: .42rem;
        margin-bottom: .1rem;
        color: #383838;
        font-size: .14rem;
      }
      .goods-weight {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: #8f8f94;
      }
      .goods-price {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: $pinkText;
      }
      .goods-unit {
        color: #8f8f94;
      }
    }
  }
}

.item-view {
  width: 100%;
  margin-bottom: .1rem;
  .item-view-cell {
    position: relative;
    padding: .11rem .15rem;
    background: #fff;
    @include border-bottom-posi(#f5f5f5, .15rem);
    .head-img {
      float: left;
      width: .2rem;
      height: .2rem;
      margin-right: .08rem;
      border-radius: .02rem;
    }
    .store-name {
      padding-right: 1rem;
      color: #383838;
      font-size: .15rem;
      i {
        color: #999;
        font-size: .12rem;
      }
    }
    .order-info {
      padding-right: 1rem;
      p {
        height: .21rem;
        line-height: .21rem;
        font-size: .13rem;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>


