<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      订单评价
    </div>
    <div class="wrap">
      <div class="title">{{nowNum}}条评价</div>
    </div>
    <ul class="item-view" v-for="(item, index) in commentsList" :key="index">
      <li class="item-view-cell">
        <img class="head-img" :src="notImg" alt="">
        <p class="store-name">{{ item.storeName }} <i class="iconfont icon-right-arrow"></i></p>
      </li>
      <li class="item-view-cell">
        <div class="order-info text-hidden">
          <p>单号：{{ item.orderNumber }}</p>
          <p>时间：{{ item.dec }}</p>
        </div>
      </li>
      <li class="item-view-cell">
        <div class="order-info text-hidden">
          <x-rate :extScore="item.score" disabled></x-rate>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'comments',
  data() {
    return {
      notImg,
      commentsList: [
        {
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 4
        }, {
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 5
        }, {
          storeName: '大西瓜食品批发配送',
          orderNumber: 'DH201608192145594974',
          dec: '老板很会做生意，服务态度好',
          score: 3
        }
      ]
    }
  },
  computed: {
    nowNum () {
      return this.commentsList.length;
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
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

.title {
  margin: .15rem .15rem .05rem .15rem;
  color: #6d6d72;
  font-size: .14rem;
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

