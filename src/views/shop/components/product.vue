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
                <p class="goods-info">{{ item.info }}</p>
                <p class="goods-weight">规格：{{ item.weight }}</p>
                <p class="goods-price">{{ item.price | formatPrice }}<span class="goods-unit"> /{{ item.unit }}</span></p>
              </div>
              <div class="goods-add">
                <span class="iconfont icon-jiagou"></span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <sortpanel v-model="extShow" @input="closeSort" @chooseSort='chooseSort'></sortpanel>
    <brandfilter v-model="brandShow" @input="closeBrand" @chooseBrand='chooseBrand'></brandfilter>
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


