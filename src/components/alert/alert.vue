<template>
    <transition-group name="top" tag="ul" class="alert">
      <li class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content">
          <i class="iconfont" :class="item.type"></i>
          <span class="alert-content-info">{{ item.content }}</span>
          <span 
            class="close-icon"
            v-if="item.closable" 
            @click="handleClose(item.name)"
          ><i class="iconfont icon-close"></i></span>
        </div>
      </li>
    </transition-group>
</template>

<script>
let seed = 0;
function getUid () {
  return 'alert_' + (seed++);
}

export default {
  name: 'alert',
  data () {
    return {
      notices: []
    }
  },
  methods: {
    add (notice) {
      console.log(notice)
      const name = getUid();
      let _notice = Object.assign({
        name: name
      }, notice);

      this.notices.push(_notice);
      // 定时移除
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name)
      }, duration * 1000);
    },
    remove (name) {
      const notices = this.notices;
      for (var i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    },
    handleClose (name) {
      // 手动关闭弹窗
      this.remove(name)
    }
  }
}
</script>

<style scoped>
  .alert {
    position: fixed;
    z-index: 19920905;
    width: 100%;
    top: 50px;
    text-align: center;
    pointer-events: none;
  }

  .alert-content {
    position: relative;
    display: inline-block;
    padding: 8px 30px 8px 16px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, .2);
    margin-bottom: 8px;
    pointer-events: all;
  }

  .close-icon {
    position: absolute;
    right: 5px;
    top: 7px;
    display: inline-block;
    width: 22px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #999;
    cursor: pointer;
  }
  .close-icon:hover {
    color: #444;
  } 

  .alert-content-info {
    font-size: 14px;
    color: #515a6e;
  }

  .iconfont {
    vertical-align: middle;
  }
  .icon-alert-info {
    color: #2db7f5;
  }
  .icon-alert-success {
    color: #19be6b;
  }
  .icon-alert-warning {
    color: #ff9900;
  }
  .icon-alert-error {
    color: #ed4014;
  }
  .icon-alert-loading {
    color: #2db7f5;
  }
  .icon-alert-loading:before {
    display: inline-block;
    animation: 2s Rotation linear infinite;
  }

  @keyframes Rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .top-enter-active, .top-leave-active {
    transition: opacity .3s
  }
  .top-enter, .top-leave-active {
    opacity: 0
  }
</style>


