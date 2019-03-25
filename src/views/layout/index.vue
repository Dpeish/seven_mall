<template>
  <div>
    <transition :name="tarnsitionName">
      <router-view/>
    </transition>
    <ul class="footer" v-show="navShow" ref="footer">
      <li 
        v-for="(item, index) of navList" 
        :key="index"
        :class="isActiveName === item.activeName? 'active' : ''" 
        @click="tabAction(index)"
      >
        <span class="svg-nav">
          <svg-icon :icon-class="isActiveName === item.activeName? item.svg_active : item.svg" />
        </span>
        <p>{{item.title}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'layout',
  data() {
    return {
      tarnsitionName: 'vux-pop-in', // 路由切换动画
      navList: [
        {
          title: '首页',
          svg: 'index-cat',
          svg_active: 'index-cat-open',
          activeName: 'index',
          link: '/'
        }, {
          title: '商品',
          svg: 'index-shop',
          svg_active: 'index-shop-open',
          activeName: 'shop',
          link: '/shop'
        }, {
          title: '购物车',
          svg: 'index-cart',
          svg_active: 'index-cart-open',
          activeName: 'cart',
          link: '/cart'
        }, {
          title: '我的',
          svg: 'index-my',
          svg_active: 'index-my-open',
          activeName: 'mine',
          link: '/mine'
        }
      ],
      isActiveName: 'index'
    }
  },
  watch: {
    $route (to, form) {
      // 监听路由动向。设置路由切换动画 meta中的id比较
      if (to.meta.id > form.meta.id) {
        this.tarnsitionName = 'vux-pop-in';
      } else {
        this.tarnsitionName = 'vux-pop-out';
      }
    }
  },
  computed: {
    navShow() {
      // 检查是否显示nav导航
      return this.$route.meta.navShow;
    }
  },
  methods: {
    tabAction(index) {
      this.isActiveName = this.navList[index].activeName;
      this.$router.push(this.navList[index].link);
    }
  },
  mounted () {
    this.isActiveName = this.$route.name;

    // // 屏幕高度被软键盘占用的时候隐藏footer
    // let h = document.body.clientHeight;
    // window.onresize = () => {
    //   if (document.body.clientHeight < h) {
    //     this.$nextTick(() => {
    //       // this.$refs.footer.style.bottom = "-.54rem";
    //       this.$refs.footer.style.position = "static";
    //     })
    //   } else {
    //     this.$nextTick(() => {
    //       // this.$refs.footer.style.bottom = "0";
    //       this.$refs.footer.style.position = "fixed";
    //     })
    //   }
    // }
  },
  updated () {
    this.isActiveName = this.$route.name;
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.footer {
  @include border-top(#eee);
  position: fixed;
  z-index: 19920905;
  display: flex;
  bottom: 0;
  left: 0;
  height: .5rem;
  width: 100%;
  padding-top: .06rem;
  background: #fff;
  li {
    flex: 1;
    text-align: center;
    color: #9e9698;
    font-size: .12rem;
    .svg-nav {
      font-size: .22rem;
    }
  }
}
.active {
  color: $pinkText!important;
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 300ms;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
  transform: translateZ(0);
}

.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}

.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>

