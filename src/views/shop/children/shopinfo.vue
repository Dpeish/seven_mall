<template>
  <div>
    <div class="header">
      <span class="left-icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </span>
      <p class="store-name">店铺信息</p>
      <span class="right-icon" @click="handleCollect">
        <i class="iconfont" :class="[isCollect? 'icon-shoucang': 'icon-shoucang1']"></i>
      </span>
    </div>
    <div class="container" ref="wrapper">
      <div class="wrap">
        <div class="shop-info">
          <img :src="notImg" alt="" class="shop-img">
          <div class="info-right">
            <p class="shop-name">青果便利店</p>
            <p class="fans">粉丝数 2679</p>
          </div>
        </div>
        <!-- 交易评价 -->
        <ul class="deal-evaluate">
          <li class="deal-title">
            交易评价
            <span>1350 人评价</span>
          </li>
          <li class="deal-cell">
            <p>描述相符 <x-rate :extScore="4.5" disabled></x-rate> 4.5</p>
            <p>到货速度 <x-rate :extScore="4.5" disabled></x-rate> 4.5</p>
            <p>服务态度 <x-rate :extScore="5" disabled></x-rate> 5</p>
          </li>
        </ul>
        <!-- 店铺经营类别等 -->
        <ul class="shop-manage">
          <li class="manage-cell">
            <div class="x-label">
              经营类别
            </div>
            <span>酒、乳制品、粮油副食、饮料冲调、休闲食品、调味品</span>
          </li>
          <li class="manage-cell">
            <div class="x-label">
              代理品牌
            </div>
            <span>海天、厨邦、景田百岁山</span>
          </li>
          <li class="manage-cell">
            <div class="x-label">
              经营地址
            </div>
            <span>福建省厦门市思明区莲前街道莲前东路129号</span>
          </li>
          <li class="manage-cell no-border">
            <div class="x-label">
              配送范围
            </div>
            <span>海沧区、湖里区、思明区</span>
          </li>
        </ul>
        <!-- 联系人 -->
        <ul class="shop-manage">
          <li class="manage-cell">
            <div class="x-label">
              联系人
            </div>
            <span>青果</span>
          </li>
          <li class="manage-cell">
            <div class="x-label">
              联系电话
            </div>
            <span>
              <a class="pohone" href="tel: 18650801395">18650801395</a>
              <span class="iconfont icon-call"></span>
            </span>
          </li>
        </ul>
        <!-- 资质 -->
        <ul class="shop-manage">
          <li class="manage-cell">
            <div class="x-label">
              资质认证
            </div>
            <span class="text-green">已通过企业实名认证</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import notImg from '@/assets/common/notimg.png';
export default {
  name: 'shopinfo',
  data () {
    return {
      notImg,
      isCollect: false,
      xScorll: ''
    }
  },
  methods: {
    _initScroll () {
      if (!this.xScorll) {
        this.xScorll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: 2
        })
      }
    },
    goback() {
      this.$router.go(-1);
    },
    handleCollect () {
      this.isCollect = !this.isCollect;
    }
  },
  mounted () {
    this.$nextTick(()=>{
      this._initScroll();
    });
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.header {
  display: flex;
  width: 100%;
  height: .44rem;
  line-height: .44rem;
  background: $bg;
  color: #fff;
  justify-content: space-between;
  .left-icon, .right-icon {
    width: .44rem;
    height: .44rem;
    text-align: center;
    i {
      font-size: .2rem;
    }
    .icon-left-arrow {
      color: rgba(255, 255, 255, .7);
    }
  }
  .store-name {
    flex: 1;
    font-size: .18rem;
    text-align: center;
  }
}

.container {
  position: absolute;
  width: 100%;
  overflow: hidden;
  z-index: 1;
  top: .44rem;
  left: 0;
  right: 0;
  bottom: 0;
  .wrap {
    height: auto;
  }
  .shop-info {
    display: flex;
    padding: .11rem .15rem;
    background: #fff;
    margin-bottom: .1rem;
    .shop-img {
      width: .42rem;
      height: .42rem;
    }
    .info-right {
      flex: 1;
      padding: 0.02rem .1rem;
      .shop-name {
        font-size: .14rem;
        color: #383838;
      }
      .fans {
        font-size: .12rem;
        color: #8f8f94;
      }
    }
  }
  .deal-evaluate {
    background: #fff;
    margin-bottom: .1rem;
    .deal-title {
      position: relative;
      padding: .11rem .15rem;
      font-size: .15rem;
      @include border-bottom-posi(#f5f5f5, .15rem);
      span {
        position: absolute;
        right: .15rem;
        top: 50%;
        font-size: .12rem;
        color: #888;
        transform: translateY(-50%);
      }
    }
    .deal-cell {
      padding: .11rem .15rem;
      p {
        font-size: .14rem;
        color: #888;
      }
    }
    .deal-cell /deep/ {
      .rating {
        .iconfont {
          margin: 0 .05rem;
          font-size: .13rem;
        }
      }
    }
  }

  .shop-manage {
    background: #fff;
    margin-bottom: .1rem;
    .manage-cell {
      display: flex;
      padding: .11rem .15rem;
      font-size: .15rem;
      @include border-bottom-posi(#f5f5f5, .15rem);
      .x-label {
        width: 1rem;
      }
      span {
        display: inline-block;
        flex: 1;
        color: #888;
        .pohone {
          color: #888;
        }
        .icon-call {
          color: #57b846;
        }
      }
      .text-green {
        color: #57b846;
      }
    }
    .no-border {
      @include border-none;
    }
  }
}

</style>

