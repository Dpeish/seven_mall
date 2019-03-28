<template>
  <div>
    <div class="header">
      购物车
      <span class="manage" v-if="isAccount" @click="hanldeEdit">
        {{ isEdit? '完成': '管理' }}
      </span>
    </div>
    <div class="cart-container" ref="wrapper">
      <div class="noData" v-if="!isAccount">
        <p class="not-img">
          <span class="iconfont icon-notstore"></span>
        </p>
        <p>购物车竟然是空的</p>
        <p>快去逛逛吧!</p>
      </div>
      <ul class="cart-item" v-for="(item, index) in cartData" :key="index">
        <li class="item-cell group">
          <label class="Nii-checkbox" @click="handleCheck(item)">
            <input type="checkbox" :checked="item.checked">
          </label>
          <div class="item-cell-right">
            <img :src="item.storeImg" alt="" class="head-img">
            <p class="store-name">{{ item.storeName }} <i class="iconfont icon-right-arrow"></i></p>
            <span class="order-status" v-show="false">去凑单</span>
          </div>
        </li>
        <li class="item-cell sale" v-if="item.saleList.length">
          <span>满减</span>
          <p class="store-name">下单满100元立减30元 <i class="iconfont icon-right-arrow"></i></p>
        </li>
        <li class="item-cell" v-for="(goods, ind) in item.goodsList" :key="ind">
          <label class="Nii-checkbox" @click="childCheck(item, goods)">
            <input type="checkbox" :checked="goods.checked">
          </label>
          <div class="notice">
            <img :src="goods.goodsImg" alt="" class="goods-img">
            <div class="goods-content">
              <p class="goods-info">{{ goods.goodsInfo }}</p>
              <p class="goods-weight">规格：{{ goods.goodsWeight }}</p>
              <p class="goods-price">{{ goods.goodsPrice | formatPrice }}<span class="goods-unit"> /{{ goods.unit }}</span></p>
            </div>
          </div>
          <div class="numbox">
            <div class="numbox-area">
              <div class="minus-minus">
                <button :disabled="goods.amount < 2"><i class="iconfont icon-sub" @click="sub($event, goods)"></i></button>
              </div>
              <div class="minus-input">
                <input type="number" oninput="this.value=this.value.replace(/\D/g,'').replace(/^0+(?=\d)/,'')" v-model.number="goods.amount" @focus="enterNum($event, goods)" @blur="blurNum($event, goods)">
              </div>
              <div class="minus-plus">
                <button :disabled="goods.amount >= goods.max"><i class="iconfont icon-jia" @click="add($event, goods)"></i></button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="all-account" ref="account" v-if="isAccount">
      <label class="Nii-checkbox all-checkbox" @click="AllCheck">
        <input type="checkbox" :checked='allChecked'>
      </label>
      <div class="total">
        {{piece}}件/{{kind}}种 <span class="money">{{ totalPrice || '0' | formatPrice }}元</span>
      </div>
      <div class="account" @click="hanldeCommit" v-if="!isEdit">
        结算
      </div>
      <div v-else class="edit" @click="hanldeDelete">
        删除
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import notImg from '@/assets/common/notimg.png';

let cartList = [
  {
    storeName: '青果便利店',
    storeId: 1,
    storeImg: notImg,
    saleList: [
      {
        saleType: 1,
        dec: '下单满100元立减30元'
      }
    ],
    goodsList: [
      {
        goodsId: 1,
        goodsInfo: '茅台镇洞藏老酒53度酱香型白酒低价批发坛装十五年原浆纯粮食酒',
        goodsImg: notImg,
        goodsWeight: '500ml*6',
        goodsPrice: 1,
        unit: '箱',
        amount: 1,
        max: 20
      }, {
        goodsId: 2,
        goodsInfo: '椰树牌椰子汁250ml*24',
        goodsImg: notImg,
        goodsWeight: '250ml*24',
        goodsPrice: 2,
        unit: '箱',
        amount: 1,
        max: 10
      }
    ]
  }, {
    storeName: '西瓜便利店',
    storeId: 2,
    storeImg: notImg,
    saleList: [],
    goodsList: [
      {
        goodsId: 1,
        goodsInfo: '怡泉+C柠檬味汽水500ml*12饮料',
        goodsImg: notImg,
        goodsWeight: '500ml*6',
        goodsPrice: 3,
        unit: '箱',
        amount: 1,
        max: 5
      }, {
        goodsId: 4,
        goodsInfo: '陶华碧老干妈香辣脆油辣椒210g瓶',
        goodsImg: notImg,
        goodsWeight: '500ml',
        goodsPrice: 4,
        unit: '瓶',
        amount: 1,
        max: 20
      }
    ]
  }
]

export default {
  name: 'cart',
  data () {
    return {
      notImg,
      xscroll: '',
      cartData: [], // 购车列表
      allChecked: false, // 总计全选
      piece: 0, // 小计 /件
      kind: 0, // 小计 种类
      totalPrice: 0, // 合计价格
      isEdit: false, // 是否编辑
      rawNum: '' // input focus时获取的数值
    }
  },
  watch: {
    cartData: {
      handler(val) {
        // console.log(val)
        // 如果购物车被清空全选按钮不打勾
        if (!val.length) {
          // console.log(val)
          return false;
        }

        // 监听购物车数据 确认用户是否全部选中
        let _self = this;
        for (let i = 0; i < val.length; i++) {
          if (!val[i].checked) {
            _self.allChecked = false;
            // 如果有一个没选中就不是全选，跳出循环
            break;
          } else {
            // 全选中了
            _self.allChecked = true;
          }
        }
        // console.log(val)
      },
      deep: true
    }
  },
  computed: {
    isAllCheck () {
      return this.cartData.every((val) => {
        // console.log(val)
        // 如果购物车列表中每一条数据的checked都为true 那位证明用户全部选择了，否则返回flase
        return val.checked;
      })
    },
    isAccount () {
      return this.cartData.length;
    }
  },
  methods: {
    add (e, res) {
      // 数量加
      if (res.amount >= res.max){
        return false;
      } else {
        res.amount++
      }
      if (res.checked) {
        // 选中了才算价格
        this.handleTotal();
      } 
    },
    sub (e, res) {
      // 数量减
      if (res.amount < 2) {
        return false;
      } else {
        res.amount--;
      }
      if (res.checked) {
        // 选中了才算价格
        this.handleTotal();
      } 
    },
    enterNum (e, res) {
      this.rawNum = e.target.value;
      if (res.checked) {
        // 选中了才算价格
        this.handleTotal();
      }
    },
    blurNum (e, res) {
      this.$nextTick(() => {
        if (e.target.value > res.max) {
          res.amount = this.rawNum;
        } else if (e.target.value === '') {
          res.amount = 1;
        }
      });
      if (res.checked) {
        // 选中了才算价格
        this.handleTotal();
      }
    },
    AllCheck () {
      // 总计/全选 全不选
      let _self = this;

      _self.$nextTick(() => {
        _self.allChecked = !_self.allChecked;

        if (_self.allChecked) {
          _self.cartData.forEach(item => {
            item.checked = true;
            item.goodsList.forEach(items => {
              items.checked = true;
            })
          })
        } else {
          _self.cartData.forEach(item => {
            item.checked = false;
            item.goodsList.forEach(items => {
              items.checked = false;
            })
          })
        }
        _self.handleTotal();
      })
      
    },
    handleCheck(res) {
      // 店铺选中
      let _self = this;
      _self.$nextTick(() => {
        res.checked = !res.checked;
        if(res.checked) {
          res.goodsList.forEach(item => {
            item.checked = true;
          })
        } else {
          res.goodsList.forEach(item => {
            item.checked = false;
          })
        }
        _self.handleTotal();

      });
    },
    childCheck (parent, child) {
      let _self = this;
      // 商品选中
      _self.$nextTick(() => {
        child.checked = !child.checked;

        let _check = []; // 选中的商品

        parent.goodsList.forEach(item => {
          if (item.checked) {
            _check.push(item);
          }
        });

        // 选中的商品只要大于等于购物车的种类,那么就说明该店铺内的商品为全选
        if (_check.length >= parent.goodsList.length) {
          parent.checked = true;
        } else {
          parent.checked = false;
        }

        _self.handleTotal();
      })
    },
    handleTotal () {
      // 计算总价\件数\品类
      let _self = this;
      _self.totalPrice = 0;
      _self.piece = 0;
      _self.kind = 0;
      let _kind = [];
      _self.cartData.forEach(item => {
        item.goodsList.forEach((items, index) => {
          if (items.checked) {
            _self.totalPrice += items.goodsPrice * items.amount;
            _kind.push(items);
            _self.kind = _kind.length
            _self.piece += items.amount - 0;
          }
        })
      })
    },
    hanldeCommit () {
      // 提交
      let _self = this;
      console.log(_self.cartData)
    },
    hanldeDelete () {
      let _self = this;
      // console.log(_self.cartData)
      // _self.cartData = _self.cartData.filter(item => {
      //   // console.log(item)
      //   // _self.$store.dispatch('delGoodsAsync', item);
      //   // return !item.checked;
      // })
      _self.cartData.forEach((item, index) => {
        item.goodsList.forEach((items, indexs) => {
          if (items.checked) {
            // item.goodsList.splice(indexs, 1);
            _self.$store.dispatch('delGoodsAsync', items.storeId);
          }
        })
      });
      
      _self.handleTotal();
      _self.getCartData();
    },
    hanldeEdit () {
      this.isEdit = !this.isEdit;
    },
    getCartData () {
      let _self = this;
      let arr = [];

      for (let o in _self.$store.state.cart) {
        let x = _self.$store.state.cart[o];
        if (x.goodsList.length > 0) {
          arr.push(x);
        }
      };
      
      _self.cartData = arr;
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.cartData.forEach(item => {
      //   this.$set(item, 'checked', false);
      //   item.goodsList.forEach(items => {
      //     this.$set(items, 'checked', false);
      //   })
      // });
      this.getCartData();
      
      this.cartData.forEach(item => {
        if (item.checked) {
          this.handleTotal()
        };
        item.goodsList.forEach(items => {
          if (items.checked) {
            this.handleTotal()
          }
        })
      });

      

    });

  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.noData {
  padding-top: 1.5rem;
  text-align: center;
  .not-img {
    padding-bottom: .2rem;
    .icon-notstore {
      color: #ccc;
      font-size: 2rem;
    }
  }
  p {
    font-size: .14rem;
    color: #666;
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .44rem;
  z-index: 1;
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
  padding-top: .44rem;
  padding-bottom: .96rem;
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
        .numbox-area {
          display: flex;
          width: 1.4rem;
          height: .3rem;
          border-radius: 0.03rem;
          border: 0.01rem solid rgba(0, 0, 0, 0.2);
        }

        .numbox-area .minus-minus {
          flex: 1;
          height: 100%;
        }

        .numbox-area .minus-minus button {
          width: 100%;
          height: 100%;
        }

        .numbox-area .minus-plus {
          flex: 1;
          height: 100%;
        }

        .numbox-area .minus-plus button {
          width: 100%;
          height: 100%;
        }

        .numbox-area .minus-input {
          min-width: 0;
          flex: 2;
          height: 100%;
        }

        .numbox-area .minus-input input {
          width: 100%;
          height: 100%;
          font-size: .16rem;
          text-align: center;
        }
      }
    }
  }
}

.all-account {
  @include border-top(#f5f5f5);
  display: flex;
  position: fixed;
  left: 0;
  bottom: .5rem;
  z-index: 2;
  width: 100%;
  height: .4rem;
  background: #fcfcfc;
  .all-checkbox {
    width: .44rem;
    height: .4rem;
  }
  .total {
    flex: 1;
    text-align: center;
    line-height: .4rem;
    font-size: .15rem;
    color: #383838;
    .money {
      color: $pinkText;
    }
  }
  .account {
    box-sizing: border-box;
    width: .92rem;
    height: .4rem;
    line-height: .4rem;
    background: #FFA037;
    color: #fff;
    font-size: .15rem;
    text-align: center;
  }
  .edit {
    box-sizing: border-box;
    width: .92rem;
    height: .4rem;
    line-height: .4rem;
    background: $pinkText;
    color: #fff;
    font-size: .15rem;
    text-align: center;
  }
}

.Nii-checkbox {
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
</style>