<template>
  <div>
    <ul class="order-enter">
      <li class="title">
        全部订单
        <i class="iconfont icon-right-arrow arrow"></i>
      </li>
      <li class="func-item">
        <div v-for="(item, index) in orderFuncList" :key="index">
          <span class="iconfont" :class="item.iconName"></span>
          <p>{{ item.title }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'orderEnter',
  data () {
    return {
      orderFuncList: [
        {
          iconName: 'icon-pay',
          title: '代付款',
          link: '/'
        }, {
          iconName: 'icon-che1',
          title: '待发货',
          link: '/'
        }, {
          iconName: 'icon-dsh',
          title: '待收货',
          link: '/'
        }, {
          iconName: 'icon-daipingjia',
          title: '待评价',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/varibles.scss';
@import '@/styles/mixin.scss';
.order-enter {
  width: 100%;
  height: 0;
  padding-bottom: 1.08rem;
  overflow: hidden;
  background: #fff;
  margin-bottom: .1rem;
  .title {
    position: relative;
    padding: .11rem .15rem;
    font-size: .15rem;
    color: #383838;
    @include border-bottom-posi(#f5f5f5, .15rem);
    .arrow {
      position: absolute;
      top: 50%;
      right: .1rem;
      font-size: .15rem;
      transform: translateY(-50%);
      color: #bbb;
    }
  }
  .func-item {
    display: flex;
    div {
      flex: 1;
      padding: .12rem 0;
      text-align: center;
      color: #887e80;
      span {
        height: .2rem;
        line-height: .2rem;
        font-size: .2rem;
      }
      p {
        height: .21rem;
        line-height: .21rem;
        font-size: .12rem;
      }
    }
  }
}
</style>

