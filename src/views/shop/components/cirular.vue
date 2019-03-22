<template>
  <div>
    <div class="view-item" @click="openSale">
      <i class="iconfont icon-laba"></i>
      <div class="msg-area">
        <ul class="msg-list" :class="{ rollTitle_top:num }" :style="{ top: -num + 'rem'}">
          <li v-for="(item, index) in msgList" :key="index">{{ item.msg }}</li>
        </ul>
      </div>
      <i class="iconfont icon-right-arrow"></i>
    </div>
    <salepanel v-model="saleShow" @input="closeSale" ></salepanel>
  </div>
</template>

<script>
import salepanel from './salepanel'; // 促销面板

export default {
  name: 'circlar',
  components: {
    salepanel
  },
  data () {
    return {
      num: 0,
      saleShow: false, // 促销活动面板
      msgList: [
        {
          msg: '购买总数量>=20箱，赠送可口可乐怡泉+C柠檬味碳酸饮料500ml 12瓶整箱1箱',
          id: 1
        }, {
          msg: '购买德国进口（Eichbaum） 爱士堡小麦黑啤 500ml*24 听统一订货价将至80元/箱',
          id: 2
        }, {
          msg: '起送价不包括香烟，送货上门的商品先付款后发货，所有鲜果都属当天出品，无任何添加剂、配送时间早上8点至晚上10点半！',
          id: 3
        }
      ]
    }
  },
  methods: {
    RollTitle (num) {
      let _self = this;
      let _num = 0;
      if (_self.msgList.length < 2) {
        // 如果通知消息不足两条不滚动
        return;
      }
      _self.msgList.push(_self.msgList[0]);
      let max = _self.msgList.length;
      setInterval(() => {
        _num++;
        if (_num >= max) {
          _num = 0;
        }
        _self.num = _num * 0.21;
      }, 3600)
    },
    openSale () {
      // 打开促销面板
      this.saleShow = !this.saleShow;
    },
    closeSale (data) {
      // 关闭促销面板
      this.saleShow = data;
    },
    chooseSale (res) {
      this.saleShow = false;
    }
  },
  mounted() {
    this.RollTitle();
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.view-item {
  display: flex;
  width: 100%;
  padding: .11rem .07rem .11rem .11rem;
  background: #fff;
  overflow: hidden;
  @include border-bottom(#f5f5f5);
  .icon-laba {
    width: .21rem;
    height: .21rem;
    font-size: .18rem;
    line-height: .21rem;
    text-align: center;
    color: #ffa037;
  }
  .msg-area {
    position: relative;
    flex: 1;
    min-width: 0;
    height: .21rem;
    overflow: hidden;
    .rollTitle_top {
      transition: top 0.5s;
    }
    .msg-list {
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      line-height: .21rem;
      color: #666;
      li {
        padding: 0 .02rem;
        font-size: .14rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
  .icon-right-arrow {
    width: .21rem;
    height: .21rem;
    font-size: .13rem;
    line-height: .21rem;
    text-align: center;
    color: #bbb;
  }
}

</style>


