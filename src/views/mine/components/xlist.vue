<template>
  <div>
    <ul class="x-list clearfix">
      <li v-for="(item, index) in xlistOne" :key="index">
        <span class="iconfont icons" :class="item.iconName"></span>
        <p>{{ item.title }}</p>
      </li>
    </ul>
    <ul class="x-list clearfix">
      <li v-for="(item, index) in xlistTwo" :key="index">
        <a :href="item.tel">
          <span class="iconfont icons" :class="item.iconName"></span>
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'xlist',
  data () {
    return {
      xlistOne: [
        {
          iconName: 'icon-jifen',
          title: '积分',
          link: '/'
        }, {
          iconName: 'icon-coupon',
          title: '优惠券',
          link: '/'
        }, {
          iconName: 'icon-evaluate',
          title: '评价',
          link: '/'
        }, {
          iconName: 'icon-fav',
          title: '收藏',
          link: '/'
        }, {
          iconName: 'icon-dizhi',
          title: '收获地址',
          link: '/'
        }, {
          iconName: 'icon-share',
          title: '分享',
          link: '/'
        }
      ], 
      xlistTwo: [
        {
          iconName: 'icon-zixun',
          title: '客服咨询',
          tel: 'tel: 186050801395',
          link: '/'
        }, {
          iconName: 'icon-feedback',
          title: '使用反馈',
          tel: false,
          link: '/'
        }, {
          iconName: 'icon-setting',
          title: '设置',
          tel: false,
          link: '/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.x-list {
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  margin-bottom: .1rem;
  li {
    float: left;
    width: 33.33333%;
    padding: .21rem .15rem;
    background: #fff;
    text-align: center;
    @include border-top(#f5f5f5);
    @include border-right(#f5f5f5);
    .icons {
      display: inline-block;
      width: .27rem;
      height: .27rem;
      font-size: .27rem;
      color: #887e80;
      margin-bottom: .12rem;
    }
    p {
      height: .15rem;
      line-height: .15rem;
      color: #887e80;
      font-size: .12rem;
    }
  }
}
</style>


