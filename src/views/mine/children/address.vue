<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      收货地址
    </div>
    <ul class="view-item">
      <li class="view-tem-cell" v-for="(item, index) in addressList" :key="index" @click="enterAdd">
        <p>{{ item.name }}<span class="mar-left10">{{ item.phone | formatPhone}}</span></p>
        <p class="text-gray">{{ item.street }}</p>
        <p class="text-gray">{{ item.address }}</p>
        <span class="iconfont icon-right-arrow"></span>
        <span class="default-add" v-if="item.type == 1">默认</span>
      </li>
    </ul>
    <div class="add-address" @click="enterAdd">
      <i class="iconfont icon-jia"></i> 新增收货地址
    </div>
  </div>
</template>

<script>
export default {
  name: 'address',
  data() {
    return {
      addressList: [
        // type 1 默认 0 其他地址
        {
          name: '韩朵朵',
          phone: 18650801395,
          street: '福建省 厦门市 海沧区 嵩屿街道',
          address: '海景南二路21号210',
          type: 1
        }, {
          name: '阿丽塔',
          phone: 18650801395,
          street: '福建省 厦门市 海沧区 嵩屿街道',
          address: '海景南二路21号210',
          type: 0
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    },
    enterAdd() {
      this.$router.push('/mine/address-add')
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

.view-item {
  width: 100%;
  overflow: hidden;
  .view-tem-cell {
    position: relative;
    padding: .11rem .15rem;
    background: #fff;
    font-size: .14rem;
    @include border-bottom-posi(#f5f5f5, .15rem);
    p {
      width: 80%;
      @include ellipsis;
    }
    .icon-right-arrow {
      position: absolute;
      top: 50%;
      right: .15rem;
      color: #bbb;
      transform: translateY(-50%); 
    }
    .default-add {
      position: absolute;
      top: 50%;
      right: .4rem;
      width: .38rem;
      height: .2rem;
      line-height: .18rem;
      text-align: center;
      color: $pinkText;
      transform: translateY(-50%);
      border: .01rem solid $pinkText;
      border-radius: .03rem;
      font-size: .12rem;
    }
  }
}

.add-address {
  position: fixed;
  z-index: 3;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .44rem;
  background: #fff;
  color: $pinkText;
  line-height: .44rem;
  text-align: center;
  span {
    font-size: .24rem;
  }
}
</style>


