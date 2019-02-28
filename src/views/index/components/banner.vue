<template>
  <div class="banner">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="(item, index) in list" :key="index">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'indexBanner',
  props: {
    list: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          // 用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: false
        },
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length;
    }
  }
}
</script>

<style lang="scss" scoped>
// sass 使用 /deep/ 其他预处理或者原生css 使用 >>> 做样式穿透
.banner /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.banner {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 33.3%;
  background: url('../../../assets/common/notbanner.png') no-repeat;
  background-size: contain;
  .swiper-img {
    width: 100%;
  }
}
</style>


