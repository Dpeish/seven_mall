<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      选择店铺
    </div>
    <div class="wrap">
      <div class="title">
        店铺列表
      </div>
      <ul class="item-view">
        <li class="item-cell" v-for="(item, index) in storeList" :key="index" @click="chooseStore(item)">
          <img :src="item.storeImg" alt="" class="shop-img">
          <div class="shop-content">
            <p class="shop-name">{{ item.storeName }}</p>
            <p class="shop-opening">营业时间：07:00 - 23:00</p>
            <p class="shop-address">地址：{{ item.address }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'chooseSotre',
  data() {
    return {
      notImg,
      storeList: [
        {
          storeName: '青果便利店',
          storeId: 1,
          storeImg: 'http://img1.qunarzz.com/sight/p0/1506/f6/f6b727f036fe5d6d.water.jpg_250x250_d22ecf6b.jpg',
          address: '国际商务城绿地大道189号鑫苑小区'
        }, {
          storeName: '西瓜小商品',
          storeId: 2,
          storeImg: 'http://img1.qunarzz.com/sight/p0/1706/e5/e563e6454d1771c2a3.img.jpg_200x200_9c5b5a22.jpg',
          address: '海沧大道绿苑新城22号楼1楼'
        }, {
          storeName: '柿子小卖部',
          storeId: 3,
          storeImg: 'http://img1.qunarzz.com/sight/p0/1505/fd/fde9e7a6d88c2d68.water.jpg_200x200_363462e5.jpg',
          address: '莲前西路紫薇花园'
        }
      ]
    }
  },
  watch: {
    $route(to, from) {
      console.log(to)
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    chooseStore(res) {
      this.$store.dispatch('chooseStoreAsync', res)
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
  background: $bg;
  color: #fff;
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
    color: #fff;
  }
}
.wrap {
  .title {
    margin: .15rem .15rem .05rem .15rem;
    color: #6d6d72;
    font-size: .14rem;
  }
  .item-cell {
    position: relative;
    padding: .11rem .15rem; 
    background: #fff;
    display: flex;
    @include border-top-posi(#f5f5f5, .15rem);
    .shop-img {
      width: .42rem;
      height: .42rem;
      margin-right: .1rem;
    }
    .shop-content {
      flex: 1;
      .shop-name {
        overflow: hidden;
        color: #383838;
        font-size: .14rem;
      }
      .shop-opening {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: #8f8f94;
      }
      .shop-address {
        overflow: hidden;
        height: .21rem;
        font-size: .13rem;
        color: #8f8f94;
      }
    }
  }
}
</style>


