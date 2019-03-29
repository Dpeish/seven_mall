<template>
  <div>
    <div class="header">
      <span class="iconfont icon-left-arrow" @click="back"></span>
      我的订单
    </div>
    <div class="tab-container">
      <ul class="tab-item">
        <li 
          class="tab-link" 
          v-for="(item, index) in tabList"
          :key="index"
          :class="{'tab-active':tabIndex === index}"
          @click="tabAction(index)"
        >{{ item.title }}</li>
      </ul>
    </div>
    <div class="wrapper" ref="wrapper">
      <div class="wrap" style="padding: .1rem 0">
         <!-- 刷新提示信息 -->
        <div class="top-tip">
            <span>{{ pulldownMsg }}</span>
        </div>
        <ul class="item-view" v-for="(item, index) in orderAll[tabIndex]" :key="index">
          <li class="item-view-cell">
            <p class="store-name">{{ item.storeName }} <i class="iconfont icon-right-arrow"></i></p>
            <span class="order-status">{{ orderStatusList[item.orderStatus] }}</span>
          </li>
          <li class="item-view-cell">
            <div class="order-info text-hidden">
              <p>单号：{{ item.orderNumber }}</p>
              <p>时间：{{ item.orderTime }}</p>
              <p>数量：{{ item.orderCount }}{{ item.unit }}</p>
              <p>金额：{{ item.orderAmount | formatPrice}}（未付款）</p>
            </div>
            <div class="status-btn" :style="{'background': optionsColor[item.orderStatus]}" v-if="item.orderStatus < 4">{{ optionsList[item.orderStatus] }}</div>
            <div class="status-badge" v-if="item.orderStatus == 4">
              <i class="iconfont icon-shoucang1 star-left"></i>
              <i class="iconfont icon-shoucang1 star-center"></i>
              <i class="iconfont icon-shoucang1 star-right"></i>
              <span>已完成</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
let orderData = [
        {
          storeName: '西瓜超市',
          storeId: 1,
          orderStatus: 0,
          orderNumber: 'DH160321410213323',
          orderTime: '2019-01-24 10:21',
          orderCount: 100,
          unit: '件',
          orderAmount: 3655
        }, {
          storeName: '西瓜超市',
          storeId: 1,
          orderStatus: 0,
          orderNumber: 'DH160321410233388',
          orderTime: '2019-01-24 10:21',
          orderCount: 66,
          unit: '件',
          orderAmount: 2655
        }, {
          storeName: '蓝莓便利店',
          storeId: 2,
          orderStatus: 1,
          orderNumber: 'DH160321410213355',
          orderTime: '2019-01-24 11:21',
          orderCount: 23,
          unit: '件',
          orderAmount: 668
        }, {
          storeName: '枇杷食品店',
          storeId: 3,
          orderStatus: 2,
          orderNumber: 'DH160321410213777',
          orderTime: '2019-01-25 15:26',
          orderCount: 45,
          unit: '件',
          orderAmount: 986
        }, {
          storeName: '雪莲花',
          storeId: 4,
          orderStatus: 3,
          orderNumber: 'DH160321410213325',
          orderTime: '2019-01-23 15:26',
          orderCount: 77,
          unit: '件',
          orderAmount: 1365
        }, {
          storeName: '芭乐餐饮连锁',
          storeId: 5,
          orderStatus: 4,
          orderNumber: 'DH160321410213285',
          orderTime: '2019-01-23 17:26',
          orderCount: 20,
          unit: '件',
          orderAmount: 365
        }
      ]

import BScroll from 'better-scroll';
export default {
  name: 'orderManag',
  data () {
    return {
      scroll: '', // 滚动对象
      tabList: [
        {
          title: '全部'
        }, {
          title: '待付款'
        }, {
          title: '待发货'
        }, {
          title: '待收货'
        }, {
          title: '待评价'
        }, {
          title: '已完成'
        }
      ],
      orderStatusList: ['待付款', '待发货', '待收货', '待评价', '已完成'],
      optionsList: ['去付款', '提醒发货', '确认收获', '去评价', ''],
      optionsColor: ['#FFA037', '#fa4251', '#57B846', '#a0cfff', ''],
      tabIndex: 0,
      pulldownMsg: '下拉刷新',
      orderData: orderData,
      orderAll: []
    }
  },
  methods: {
    back () {
      this.$router.go(-1);
    },
    tabAction(index) {
      
      this.tabIndex = index;
    },
    _initScroll () {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 2
        });
        // 滑动过程中事件
        this.scroll.on('scroll',(pos)=>{
          if(pos.y > 50){
              this.pulldownMsg = '释放立即刷新'
          } else {
            this.pulldownMsg = '下拉刷新'
          }
        });
        // this.scroll.on('touchEnd', (pos) => {
        //   // 下拉动作 可以执行下拉刷新
        //   if (pos.y > 50) {
        //     this.pulldownMsg = '释放立即刷新'
        //     // this.loadData()
        //   } else {
        //     that.pulldownMsg = '下拉刷新'
        //   }
        // })
      } else {
        this.scroll.refresh();
      };
    },
    filterOrder() {
      let paymentList= [], // 待付款
          shipmentsList= [], // 待发货
          receivingList= [], // 待收货
          evaluateList= [], // 待评价
          completedList= []; // 已完成
      this.orderData.forEach((order) => {
        if (order.orderStatus === 0) {
          paymentList.push(order)
        }
        if (order.orderStatus === 1) {
          shipmentsList.push(order)
        }
        if (order.orderStatus === 2) {
          receivingList.push(order)
        }
        if (order.orderStatus === 3) {
          evaluateList.push(order)
        }
        if (order.orderStatus === 4) {
          completedList.push(order)
        }
      });
      this.orderAll = [this.orderData, paymentList, shipmentsList, receivingList, evaluateList, completedList];
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this._initScroll();
    });
    
    if (this.$route.params.tab) {
      const activeTab = this.$route.params.tab;
      this.tabIndex = activeTab;
    }
    this.filterOrder();
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.wrapper {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: .88rem;
  left: 0;
  bottom: 0;
  right: 0;
  .warp {
    height: auto;
  }
}
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
.tab-container {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  .tab-item {
    white-space: nowrap;
    overflow: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    /*解决ios上滑动不流畅*/
    -webkit-overflow-scrolling: touch;
    .tab-link {
      flex: 1;
      padding: 0 .18rem;
      text-align: center;
      background: #fff;
      color: #666;
      font-size: .15rem;
      transform: none;
    }
  }
}

.tab-active {
  color: $pinkText!important;
  border-bottom: .02rem solid $pinkText;
  transform-origin: center center;
  transform: scale3d(0, 1, 0);
  transition: all .5s;
}

.item-view {
  width: 100%;
  margin-bottom: .1rem;
  .item-view-cell {
    position: relative;
    padding: .11rem .15rem;
    background: #fff;
    @include border-bottom-posi(#f5f5f5, .15rem);
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
      color: #888;
      font-size: .13rem;
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
    .status-btn {
      position: absolute;
      right: .1rem;
      bottom: .1rem;
      padding: .06rem .15rem;
      border-radius: .3rem;
      color: #fff;
      font-size: .13rem;
      background: #FFA037;
    }
  }
}

.top-tip {
  position: absolute;
  top: -.3rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  text-align: center;
  color: #555;
  font-size: .14rem;
}

</style>



