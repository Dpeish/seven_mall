<template>
  <div>
    <div class="header">
      购物车
      <span class="manage">
        管理
      </span>
    </div>
    <div class="cart-container">
      <ul class="cart-item">
        <li class="item-cell group">
          <label class="item-checkbox">
            <input type="checkbox" value="">
          </label>
          <div class="item-cell-right">
            <img :src="notImg" alt="" class="head-img">
            <p class="store-name">大西瓜食品 <i class="iconfont icon-right-arrow"></i></p>
            <span class="order-status">去凑单</span>
          </div>
        </li>
        <li class="item-cell sale">
          <span>满减</span>
          <p class="store-name">下单满100元立减30元 <i class="iconfont icon-right-arrow"></i></p>
        </li>
        <li class="item-cell" v-for="(item, index) in 3" :key="index">
          <label class="item-checkbox">
            <input type="checkbox" value="">
          </label>
          <div class="notice">
            <img :src="notImg" alt="" class="goods-img">
            <div class="goods-content">
              <p class="goods-info">茅台镇洞藏老酒53度酱香型白酒低价批发坛装十五年原浆纯粮食酒</p>
              <p class="goods-weight">规格：500ml*6</p>
              <p class="goods-price">￥210<span class="goods-unit"> /箱</span></p>
            </div>
          </div>
          <div class="numbox">
            <x-counter></x-counter>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'cart',
  data () {
    return {
      notImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.header {
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  background: $bg;
  color: #fff;
  font-size: .18rem;
  .manage {
    position: absolute;
    top: 0;
    right: .1rem;
    width: .44rem;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .14rem;
    
  }
}
.cart-container {
  overflow: hidden;
  width: 100%;
  padding-bottom: .54rem;
  .cart-item {
    width: 100%;
    margin-top: .1rem;
    .group {
      @include border-bottom(#f5f5f5);
    }
    .sale {
      display: flex;
      position: relative;
      padding: .11rem .3rem .11rem .15rem;
      color: #666;
      font-size: .14rem;
      background: #f9f9f9!important;
      @include border-bottom(#f5f5f5);
      span {
        display: inline-block;
        box-sizing: border-box;
        border-radius: 0.03rem;
        border: 0.01rem solid #ff5f3d;
        background-color: transparent;
        color: #ff5f3d !important;
        padding: .03rem 0.06rem;
        font-size: .12rem;
        line-height: .12rem;
        margin-right: .05rem;
      }
      i {
        position: absolute;
        right: .15rem;
        top: 50%;
        transform: translateY(-50%);
        font-size: .12rem;
        color: #bbb;
      }
      p {
        flex: 1;
        height: .21rem;
        @include ellipsis;
      }
    }
    .item-cell {
      display: flex;
      background: #fff;
      flex-wrap: wrap;
      .item-checkbox {
        position: relative;
        padding-left: 0.12rem;
        width: .44rem;
        input {
          display: inline-block;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: .18rem;
          height: .18rem;
          border-radius: .18rem;
          border: 1px solid #b2b2b2;
          font-size: .14rem;
        }
        input:checked {
          border: none;
          background: $btn;
          background-image: url('../../../assets/login/check.png');
          background-size: 80% 80%;
          background-position: 50% 50%;
          background-repeat: no-repeat;
        }
      }
      .item-cell-right {
        flex: 1;
        padding: .11rem .15rem .11rem 0;
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
        .order-status {
          position: absolute;
          display: inline-block;
          top: 0;
          right: .1rem;
          height: .44rem;
          line-height: .44rem;
          color: $pinkText;
          font-size: .12rem;
        }
      }
      .notice {
        flex: 1;
        display: flex;
        position: relative;
        padding: .11rem .15rem .11rem 0;
        background: #fff;
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
          min-width: 0;
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
      .numbox {
        width: 100%;
        height: .44rem;
        padding-left: 1.14rem;
        @include border-bottom-posi(#f5f5f5, .15rem);
      }
    }
  }
}
</style>