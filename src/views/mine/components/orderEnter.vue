<template>
  <div>
    <ul class="order-enter">
      <li class="title" @click="enterAllOrder">
        全部订单
        <i class="iconfont icon-right-arrow arrow"></i>
      </li>
      <li class="func-item">
        <div class="item-cell" v-for="(item, index) in orderFuncList" :key="index" @click="enterOrderTab(item.type)">
          <span class="iconfont" :class="item.iconName"></span>
          <p>{{ item.title }}</p>
          <x-badge v-if="item.number != ''" :title="item.number | badgeNum"></x-badge>
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
          title: '待付款',
          type: 1
        }, {
          iconName: 'icon-che1',
          title: '待发货',
          type: 2
        }, {
          iconName: 'icon-dsh',
          title: '待收货',
          type: 3
        }, {
          iconName: 'icon-daipingjia',
          title: '待评价',
          type: 4
        }
      ],
      badge: [
        {
          type: 1,
          number: 5
        }, {
          type: 2,
          number: 15
        }, {
          type: 3,
          number: 7
        }, {
          type: 4,
          number: 0
        }  
      ]
    }
  },
  filters: {
    badgeNum (val) {
      return val > 0 ? val : '';
    }
  },
  methods: {
    enterAllOrder () {
      // query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示
      
      // url 传参
      // this.$router.push({
      //   path:'/xxx'
      //   query:{
      //     id:id
      //   }
      // })
      // 接收参数:
      // this.$route.query.id  注意:传参是this.$router,接收参数是this.$route,这里千万要看清了！！！



      // params方式传参
      // 注意:params传参，push里面只能是 name:'xxxx',不能是path:'/xxx',因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！
      this.$router.push({
        name: 'orderManag',
        params: {
          tab: 0
        }
      })
    },
    enterOrderTab(type) {
      this.$router.push({
        name: 'orderManag',
        params: {
          tab: type
        }
      })
    },
    initMenu() {
      let _self = this;
      // this.badge 内的数据模拟后台接收的数据。 number为通知数量. 添加到本地this.orderFuncList数组对象中，用来遍历菜单和显示badge图标
      for (let i = 0; i < _self.orderFuncList.length; i++) {
        for (let j = 0; j < _self.badge.length; j++) {
          if (_self.orderFuncList[i].type === _self.badge[j].type) {
            // 给数组对象添加属性时要使用Vue.set
            _self.$set(_self.orderFuncList[i], 'number', _self.badge[j].number);
          }
        }
      }
    }
  },
  mounted() {
    this.initMenu();
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
    .item-cell {
      position: relative;
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

.order-enter /deep/ .badge {
  top: .025rem;
  right: .25rem;
}
</style>

