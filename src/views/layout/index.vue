<template>
  <div>
    <router-view/>
    <ul class="footer">
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
  methods: {
    tabAction(index) {
      this.isActiveName = this.navList[index].activeName;
      this.$router.push(this.navList[index].link);
    }
  },
  mounted () {
    this.isActiveName = this.$route.name;
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
</style>

