<template>
  <div>
    <index-header></index-header>
    <!-- 店铺信息 -->
    <div class="store">
      <img :src="notImg" alt="" class="store-head-img">
      <div class="store-info">
        <p class="store-name">起送¥ 15 | 配送¥ 0</p>
        <div class="store-id">
          <x-rate :extScore="4.5" disabled></x-rate>
          4.5
        </div>
      </div>
      <i class="iconfont icon-right-arrow arrow"></i>
    </div>
    <!-- 滚动通知 -->
    <circular></circular>
    <!-- 商品 -->
    <product></product>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
import indexHeader from '@/views/index/components/header';
import circular from '@/components/circular'; // 活动通知
import product from '../components/product'; // 商品

export default {
  name: 'shop',
  components: {
    indexHeader,
    circular,
    product
  },
  data () {
    return {
      notImg
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.store /deep/ .rating {
  color: rgba(255, 255, 255, 0.8);
  .iconfont {
    font-size: .12rem;
  }
}
.store {
  position: relative;
  padding: .11rem .3rem .11rem .15rem;
  background: $bg;
  display: flex;
  .store-head-img {
    width: .42rem;
    height: .42rem;
    margin-right: .15rem;
    border-radius: .42rem;
  }
  .arrow {
    position: absolute;
    top: 50%;
    right: .1rem;
    font-size: .15rem;
    transform: translateY(-50%);
    color: #eee;
  }
  .store-info {
    flex: 1;
    min-width: 0;
    p {
      height: .21rem;
      line-height: .21rem;
    }
    .store-name {
      color: rgba(255, 255, 255, 0.8);
      font-size: .13rem;
      font-weight: 300;
      @include ellipsis;
    }
    .store-id {
      color: rgba(255, 255, 255, 0.8);
      font-size: .13rem;
      @include ellipsis;
    }
  }
}
</style>