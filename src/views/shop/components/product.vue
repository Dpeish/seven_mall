<template>
  <div class="product">
    <div class="view-left">
      <recurnav :navlist="menuList"></recurnav>
    </div>
    <div class="view-right">
      <ul class="head-sort">
        <li class="sort-item">综合排序</li>
        <li class="sort-item">品牌筛选</li>
        <li class="sort-search">
          <i class="iconfont icon-sousuo"></i>
        </li>
      </ul>
      <div class="product-area" ref="product">
        <div class="wrap">
          <div class="product-title">全部商品</div>
          <ul class="product-view">
            <li class="product-item" v-for="(item, index) in goodsList" :key="index">
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
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import recurnav from './recurnav';
import goods from '@/assets/index/goods.jpg';
export default {
  name: 'product',
  components: {
    recurnav
  },
  data () {
    return {
      productScroll: '', // 商品滚动条
      menuList: [
        {
          name: '全部商品',
          id: 1
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
          id: 4
        }, {
          name: '调味品',
          id: 5
        }, {
          name: '酒',
          id: 6
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

.product {
  width: 100%;
  height: calc(100vh - 0.98rem);
  overflow: hidden;
  display: flex;
  .view-left {
    width: .94rem;
    height: 100%;
    background: #f5f5f5;
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


