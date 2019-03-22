<template>
  <div>
    <transition name="fade">
      <div class="backdrop" v-show="show" @click.stop="showSale($event)"></div>
    </transition>
    <transition name="up">
      <ul class="view-item" v-show="show" ref="sales">
        <li class="item-cell border-bottom">
          <div class="title">
            促销活动
          </div>
        </li>
        <li class="item-cell">
          <div class="sale-item" v-for="(item, index) in saleList" :key="index">
            <p><span class="sale-type" :style="{'background': saleColor[item.type] }">{{ saleType[item.type] }}</span>{{item.msg}}</p>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'salepanel',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.value,
      saleType: ['', '满减', '满赠', '首单', '折扣', '特价'],
      saleColor: ['', '#fe3e64', '#60cdca', '#67c56e', '#f67883', '#f8a152'],
      saleList: [
        {
          msg: '购买总数量>=20箱，赠送可口可乐怡泉+C柠檬味碳酸饮料500ml 12瓶整箱1箱',
          type: 2
        }, {
          msg: '购买德国进口（Eichbaum） 爱士堡小麦黑啤 500ml*24 听统一订货价将至80元/箱',
          type: 1
        }, {
          msg: '起送价不包括香烟，送货上门的商品先付款后发货，所有鲜果都属当天出品，无任何添加剂、配送时间早上8点至晚上10点半！',
          type: 3
        }
      ]
    }
  },
  watch: {
    value (val) {
      this.show = val;
    }
  },
  methods: {
    showSale (e) {
      const el = this.$refs.sales;
      if (!el.contains(e.target)) this.show = false;
      this.$emit('input', this.show);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.backdrop {
  position: fixed;
  z-index: 19920999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.35);
}
.view-item {
  position: fixed;
  z-index: 19921999;
  bottom: 0;
  left: 0;
  width: 100%;
  .border-bottom {
    @include border-bottom(#e5e5e5);
  }
  .item-cell {
    width: 100%;
    background: #fff;
    .title {
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
    }
    .sale-item {
      padding: .04rem .15rem;
      p {
        color: #9e9698;
        font-size: .12rem;
        .sale-type {
          display: inline-block;
          padding: 0 0.03rem;
          margin-right: .05rem;
          color: #fff;
          font-size: .1rem;
          line-height: .16rem;
          background: #67c56e;
        }
      }
    }
  }
}

.icon-wechat {
  background: #67c56e;
}

.icon-pengyouquan {
  background: #67c56e;
}

.icon-qq {
  background: #3dafff;
}

.icon-weibo {
  background: #fb6672;
  font-size: .25rem;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.up-leave-active,.up-enter-active {
  transition: all .35s ease;
}
.up-leave-active,.up-enter{
  bottom: -50% !important;
}
.up-leave,.up-enter-active{
  bottom: 0;
}
</style>

