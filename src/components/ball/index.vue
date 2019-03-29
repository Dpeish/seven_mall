<template>
  <div class="ball-container">
    <transition name="drop"
    v-for="(item, index) in balls"
    :key="index"
    @before-enter="beforeDrop"
    @enter="dropping"
    @after-enter="afterDrop">
      <div v-show="item.show" class="ball" v-bind:css="false">
        <div class="inner inner-hook"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ball',
  data() {
    return {
      balls : [
        {
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }, {
          show: false
        }
      ],
      dropBalls: []
    };
},     
methods: {
    drop(el) {
      for(let i = 0; i < this.balls.length; i++) {
        let ball = this.balls[i];
        if(!ball.show) {
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeDrop(el) {
      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if(ball.show) {
          let rect = ball.el.getBoundingClientRect();
          let x = window.innerWidth - rect.right + 100;
          let y = -(window.innerHeight - rect.top - 10);
          el.style.webkitTransform = `translate3d(0,${y}px,0)`;
          el.style.transform =  `translate3d(0,${y}px,0)`;
          let inner = el.getElementsByClassName('inner-hook')[0];
          inner.style.webkitTransform =  `translate3d(${x}px,0,0)`;
          inner.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
    },
    dropping(el) {
      let rf = el.offsetHeight;
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform =  'translate3d(0,0,0)';
        let inner = el.getElementsByClassName('inner-hook')[0];
        inner.style.webkitTransform = 'translate3d(0,0,0)';
        inner.style.transform = 'translate3d(0,0,0)';
      });
    },
    afterDrop(el){
      let ball = this.dropBalls.shift();
      if(ball) {
        ball.show = false;
        el.style.display = 'none';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.ball-container {
  .ball {
    position: fixed;
    right: 33%;
    bottom: .35rem;
    z-index: 200;
    width: .15rem;
    height: .15rem;
    transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
    .inner {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #fa4251;
      transition: all 0.4s linear;
    }
  }
}
  
</style>


