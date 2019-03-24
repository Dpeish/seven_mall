<template>
  <div>
    <div class="header">
      <span class="left-icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </span>
      <p class="head-name">商品详情</p>
      <span class="right-icon">
        <i class="iconfont icon-cart2"></i>
      </span>
    </div>
    <div class="container" ref="wrapper">
      <div class="wrap">
        <div class="goods-img">
          <img :src="goodsImg" alt="">
        </div>
        <div class="goods-top">
          <h3>德国进口（Eichbaum） 爱士堡小麦黑啤 500ml*24 听</h3>
          <div class="goods-barcode">货品号： 8993823234122</div>
          <div class="goods-price">
            <small>￥</small>36500
            <span class="unit">/箱</span>
            <span class="deal">成交：18箱</span>
          </div>
        </div>
        <ul class="item-view">
          <li class="item-cell">
            <p>规格：500ml*24</p>
            <p>类别：啤酒</p>
            <p>品牌：爱士堡</p>
          </li>
        </ul>
        <ul class="item-view">
          <li class="shop-info">
            <img :src="notImg" alt="" class="shop-img">
            <div class="info-right">
              <p class="shop-name">青果便利店</p>
              <p class="fans">粉丝数 2679</p>
            </div>
          </li>
          <li class="shop-evaluate">
            <div class="vertical-area">
              <p>829</p>
              <p>全部商品</p>
            </div>
            <div class="vertical-area">
              <p>29</p>
              <p>全部品牌</p>
            </div>
            <div class="right-area">
              <p>描述相符：4.9</p>
              <p>发货速度：4.5</p>
              <p>服务态度：5.0</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <div class="collect" @click="handleCollect">
        <span class="iconfont" :class="[isCollect? 'icon-full': 'icon-star']"></span>
      </div>
      <div class="options">立即订购</div>
      <div class="options">加入购物车</div>
    </div>
  </div>
</template>

<script>
import goodsImg from "@/assets/common/goods.jpg";
import notImg from '@/assets/common/notimg.png';
import BScroll from 'better-scroll';
export default {
  name: 'goodsDetail',
  data () {
    return {
      goodsImg,
      notImg,
      xScorll: '',
      isCollect: false // 是否收藏
    }
  },
  methods: {
    _initScroll () {
      if (!this.xScorll) {
        this.xScorll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 2
        })
      }
    },
    goback () {
      this.$router.go(-1)
    },
    handleCollect () {
      this.isCollect = !this.isCollect;
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
@import '@/styles/index.scss';
.header {
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  background: #fcfcfc;
  justify-content: space-between;
  @include border-bottom(#f5f5f5);
  .left-icon, .right-icon {
    width: .44rem;
    height: .44rem;
    text-align: center;
    i {
      font-size: .26rem;
    }
    .icon-left-arrow {
      font-size: .2rem;
      color: #ddd;
    }
  }
  .head-name {
    flex: 1;
    font-size: .18rem;
    text-align: center;
  }
}
.container {
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  top: .44rem;
  left: 0;
  right: 0;
  bottom: .44rem;
  .wrap {
    height: auto;
    padding-bottom: .001rem;
  }
  .goods-img {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background: #fff;
    img {
      width: 100%;
    }
  }
  .goods-top {
    background: #fff;
    padding: .11rem .15rem;
    margin-bottom: .1rem;
    h3 {
      margin-bottom: .1rem;
    }
    .goods-barcode {
      font-size: .14rem;
      color: #888;
    }
    .goods-price {
      position: relative;
      color: $pinkText;
      font-size: .18rem;
      .unit {
        font-size: .14rem;
        color: #888;
      }
      .deal {
        position: absolute;
        right: .1rem;
        top: 50%;
        color: #888;
        font-size: .14rem;
        transform: translateY(-50%);
      }
    }
  }
  .item-view {
    overflow: hidden;
    width: 100%;
    background: #fff;
    margin-bottom: .1rem;
    .item-cell {
      padding: .11rem .15rem;
      color: #888;
      font-size: .14rem;
    }
    .shop-info {
      display: flex;
      background: #fff;
      padding: .11rem .15rem;
      @include border-bottom-posi(#f5f5f5, .15rem);
      .shop-img {
        width: .42rem;
        height: .42rem;
      }
      .info-right {
        flex: 1;
        padding: 0.02rem .1rem;
        .shop-name {
          font-size: .14rem;
          color: #383838;
        }
        .fans {
          font-size: .12rem;
          color: #8f8f94;
        }
      }
    }
    .shop-evaluate {
      display: flex;
      background: #fff;
      padding: .11rem .15rem;
      text-align: center;
      color: #888;
      font-size: .14rem;
      .vertical-area {
        width: .9rem;
        padding-top: .1rem;
        p {
          @include border-right(#f5f5f5);
        }
      }
      .right-area {
        flex: 1;
      }
    }
  }
}

.footer {
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  background: #fcfcfc;
  color: $pinkText;
  .collect {
    flex: 1;
  }
  .options {
    flex: 2;
    @include border-left(#f5f5f5);
  }
}
</style>


