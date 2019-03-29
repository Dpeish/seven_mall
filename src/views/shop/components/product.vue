<template>
  <div class="product">
    <div class="view-left" ref="nav">
      <div class="wrap">
        <recurnav :navlist="menuList" @navData="navData"></recurnav>
      </div>
    </div>
    <div class="view-right">
      <ul class="head-sort">
        <li class="sort-item" @click="openSort">综合排序</li>
        <li class="sort-item" @click="openBrand">品牌筛选</li>
        <li class="sort-search" @click="openSearch">
          <i class="iconfont icon-sousuo"></i>
        </li>
      </ul>
      <div class="product-area" ref="product">
        <div class="wrap">
          <div class="product-title">{{ navName }}</div>
          <ul class="product-view">
            <li class="product-item" v-for="(item, index) in goodsList" :key="index" @click="enterGoods">
              <img :src="item.goodsImg" alt="" class="goods-img">
              <div class="goods-content">
                <p class="goods-info">{{ item.goodsInfo }}</p>
                <p class="goods-weight">规格：{{ item.goodsWeight }}</p>
                <p class="goods-price">{{ item.goodsPrice | formatPrice }}<span class="goods-unit"> /{{ item.unit }}</span></p>
              </div>
              <div class="goods-add" @click.stop="addGoods($event, item)">
                <span class="iconfont icon-jiagou"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <sortpanel v-model="extShow" @input="closeSort" @chooseSort='chooseSort'></sortpanel>
    <brandfilter v-model="brandShow" @input="closeBrand" @chooseBrand='chooseBrand'></brandfilter>
    <x-ball ref="ball"></x-ball>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import recurnav from './recurnav';
import sortpanel from './sortpanel'; // 排序面板
import brandfilter from './brandfilter'; // 品牌筛选
import goods from '@/assets/index/goods.jpg';
export default {
  name: 'product',
  components: {
    recurnav,
    sortpanel,
    brandfilter
  },
  data () {
    return {
      productScroll: '', // 商品滚动条
      navScroll: '', // 导航条滚动区
      navName: '全部商品', // 导航名称 默认全部商品
      extShow: false, // 展示筛选面板
      brandShow: false, // 品牌筛选
      searchKey: '', // 搜索内容
      storeId: 1, // 测试
      menuList: [
        {
          name: '全部商品',
          id: 1,
          children: []
        }, {
          name: '休闲食品',
          id: 2,
          children: [
            {
              name: '饼干糕点',
              id: 21
            }, {
              name: '水果罐头',
              id: 22
            }, {
              name: '糖果',
              id: 23
            }, {
              name: '肉类/豆干/辣条',
              id: 24
            }, {
              name: '蜜饯果干',
              id: 25
            }, {
              name: '膨化食品',
              id: 26
            }, {
              name: '巧克力',
              id: 27
            }, {
              name: '果冻',
              id: 28
            }
          ]
        }, {
          name: '粮油食品',
          id: 3,
          children: [
            {
              name: '米',
              id: 31
            }, {
              name: '面/粉',
              id: 32
            }
          ]
        }, {
          name: '饮料冲调',
          id: 4,
          children: []
        }, {
          name: '调味品',
          id: 5,
          children: []
        }, {
          name: '酒',
          id: 6,
          children: []
        }
      ],
      goods,
      goodsList: [
        {
          goodsId: 1,
          goodsInfo: '怡泉+C柠檬味汽水500ml饮料',
          goodsImg: 'https://gw2.alicdn.com/bao/uploaded/i1/2628735924/TB2Z9LMmFXXXXXUXpXXXXXXXXXX_!!2628735924.png_210x210.jpg',
          goodsWeight: '500ml*1',
          goodsPrice: 6,
          unit: '箱',
          amount: 1,
          checked: false,
          max: 20
        }, {
          goodsId: 2,
          goodsInfo: '椰树牌椰子汁250ml',
          goodsImg: 'https://gw1.alicdn.com/bao/uploaded/i2/1629644923/TB2HapSu9VmpuFjSZFFXXcZApXa_!!1629644923.jpg_210x210.jpg',
          goodsWeight: '250ml*1',
          goodsPrice: 3.5,
          unit: '盒',
          amount: 1,
          checked: false,
          max: 20
        }, {
          goodsId: 3,
          goodsInfo: '陶华碧老干妈香辣脆油辣椒210g瓶',
          goodsImg: 'https://img.alicdn.com/img/i1/179490136/O1CN011CsKKo2gqC2EMMF_!!0-saturn_solar.jpg_210x210.jpg',
          goodsWeight: '250ml*1',
          goodsPrice: 3.5,
          unit: '盒',
          amount: 1,
          checked: false,
          max: 20
        }, {
          goodsId: 4,
          goodsInfo: '乐事薯片春季限定新品零食樱花味大礼包',
          goodsImg: 'https://img.alicdn.com/img/i2/51324050/O1CN0115HV8w1fmwZRAmcbf_!!0-saturn_solar.jpg_210x210.jpg',
          goodsWeight: '104g*3',
          goodsPrice: 18.9,
          unit: '包',
          amount: 1,
          checked: false,
          max: 20
        }, {
          goodsId: 5,
          goodsInfo: '费列罗巧克力礼盒装送女友创意礼物费力罗',
          goodsImg: 'https://img.alicdn.com/img/i3/44988994/O1CN01BEj2Ry2GJIhBDh754_!!0-saturn_solar.jpg_210x210.jpg',
          goodsWeight: '800g*1',
          goodsPrice: 108,
          unit: '包',
          amount: 1,
          checked: false,
          max: 20
        }, {
          goodsId: 6,
          goodsInfo: 'Akoko曲奇饼干正品好吃的休闲零食小吃礼盒',
          goodsImg: 'https://img.alicdn.com/img/i4/125598270/O1CN018EW6k12AxhyRU1tdn_!!0-saturn_solar.jpg_210x210.jpg',
          goodsWeight: '560*1',
          goodsPrice: 188,
          unit: '盒子',
          amount: 1,
          checked: false,
          max: 20
        }
      ]
    }
  },
  watch: {
    searchKey (val) {
      if (val) {
        this.$toast.info(val)
      }
    }
  },
  methods: {
    _initScroll () {
      if (!this.productScroll) {
        this.productScroll = new BScroll(this.$refs.product, {
          click: true,
          probeType: 2,
          pullUpLoad: {
            threshold: -30
          }
        });
        
        this.productScroll.on('pullingUp', () => {
          console.log(1)
          document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
          // this.scrollDown();
        })
        // console.log(this.productScroll)
      } else {
        this.productScroll.refresh();
      };

      if (!this.navScroll) {
        this.navScroll = new BScroll(this.$refs.nav, {
          click: true,
          probeType: 2
        })
      }
    },
    navData (res) {
      // 获取子级传过来的nav标题名称
      this.navName = res.name;
    },
    openSort () {
      // 打开筛选面板
      this.extShow = !this.extShow;
    },
    closeSort (data) {
      // 关闭筛选面板
      this.extShow = data;
    },
    chooseSort (res) {
      this.extShow = false;
      this.$toast.info(res.sortName)
    },
    openBrand () {
      // 打开筛选面板
      this.brandShow = !this.brandShow;
    },
    closeBrand (data) {
      // 关闭筛选面板
      this.brandShow = data;
    },
    chooseBrand (res) {
      this.brandShow = false;
      this.$toast.info(res.brandName)
    },
    openSearch () {
      // 前往商品搜索界面
      this.$router.push('./shopsearch');
    },
    enterGoods () {
      // 进入商品详情
      this.$router.push('/goodsDetail')
    },
    addGoods (e, res) {
      // 添加商品 目前模拟添加至vuex
      // console.log(res)
      // res.storeId = this.storeId;

      this.$set(res, 'storeId', this.$store.state.shop.storeId);

      this.$refs.ball.drop(e.target);
      
      let flag = this.$store.getters.hasGoods(res);
      if (!flag) {
        this.$store.dispatch('addGoodsAsync', res)
      } else {
        this.$store.dispatch('addNumAsync', res)      
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this._initScroll();
    });

    if (this.$route.params.searchKey) {
      this.searchKey = this.$route.params.searchKey;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';

.product {
  width: 100%;
  height: calc(100vh - 0.98rem);
  overflow: hidden;
  display: flex;
  .view-left {
    overflow: hidden;
    width: .94rem;
    height: 100%;
    background: #f5f5f5;
    .wrap {
      height: auto;
    }
  }
  .view-right {
    flex: 1;
    height: 100%;
    background: #fff;
  }
}


.head-sort {
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: #888;
  font-size: .14rem;
  @include border-left(#f5f5f5);
  @include border-bottom(#f5f5f5);
  .sort-item {
    flex: 1;
    @include border-divider-tb(#f5f5f5, 20%, 20%);
  }
  .sort-search {
    width: .6rem;
    i {
      font-size: .18rem;
    }
  }
}

// 商品内容列表
.product-area {
  overflow: hidden;
  width: 100%;
  height: calc(100% - .44rem);
  @include border-left(#f5f5f5);
  .wrap {
    height: auto;
  }
  .product-title {
    padding: .06rem .15rem;
    font-size: .14rem;
    color: #888;
    @include border-bottom(#f5f5f5);
  }
  .product-view {
    overflow: hidden;
    width: 100%;
    .product-item {
      position: relative;
      padding: .11rem .15rem; 
      background: #fff;
      display: flex;
      @include border-bottom-posi(#f5f5f5, .15rem);
      .goods-img {
        width: .6rem;
        height: .6rem;
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
          width: 100%;
          height: .38rem;
          margin-bottom: .06rem;
          color: #383838;
          font-size: .13rem;
          overflow: hidden;
          // white-space: nowrap;
          // text-overflow: ellipsis;
          // line-clamp: 2;
        }
        .goods-weight {
          overflow: hidden;
          height: .18rem;
          font-size: .12rem;
          color: #8f8f94;
        }
        .goods-price {
          overflow: hidden;
          height: .18rem;
          font-size: .12rem;
          color: $pinkText;
        }
        .goods-unit {
          color: #8f8f94;
        }
      }
    }
  }
}
</style>


