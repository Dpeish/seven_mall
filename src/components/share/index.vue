<template>
  <div>
    <transition name="fade">
      <div class="backdrop" v-show="show" @click.stop="showShare($event)"></div>
    </transition>
    <transition name="up">
      <ul class="view-item" v-show="show" :class="{'item-pop': show}" ref="share">
        <li class="item-cell border-bottom">
          <div class="title">
            分享给好友
          </div>
        </li>
        <li class="item-cell">
          <div class="share-item" v-for="(item, index) in shareList" :key="index">
            <span class="iconfont icon-item" :class="item.iconClass"></span>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'share',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.value,
      shareList: [
        {
          'iconClass': 'icon-wechat',
          'title': '微信好友'
        }, {
          'iconClass': 'icon-pengyouquan',
          'title': '朋友圈'
        }, {
          'iconClass': 'icon-qq',
          'title': 'QQ好友'
        }, {
          'iconClass': 'icon-weibo',
          'title': '微博'
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
    showShare (e) {
      const el = this.$refs.share;
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
    display: flex;
    width: 100%;
    background: #fff;
    .title {
      width: 100%;
      height: .44rem;
      line-height: .44rem;
      text-align: center;
    }
    .share-item {
      flex: 1;
      padding: .15rem 0;
      text-align: center;
      .icon-item {
        display: inline-block;
        width: .4rem;
        height: .4rem;
        line-height: .4rem;
        border-radius: .4rem;
        color: #fff;
        font-size: 22px;
      }
      p {
        height: .21rem;
        margin-top: .04rem;
        color: #9e9698;
        font-size: .12rem;
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
  bottom: -1.4rem !important;
}
.up-leave,.up-enter-active{
  bottom: 0;
}
</style>

