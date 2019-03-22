<template>
  <div>
    <div class="header">
      <span class="left-icon" @click="goback">
        <i class="iconfont icon-left-arrow"></i>
      </span>
      <div class="search-bar">
        <div class="search-bg" v-show="!isSearch" @click="toggleSearch">
          <span class="iconfont icon-sousuo bg-search"></span>
          查找商品
        </div>
        <div class="search-input" v-show="isSearch">
          <span class="iconfont icon-sousuo input-search"></span>
          <input type="text" v-model="inputValue" ref="searchInput" @blur="toggleSearch">
        </div>
      </div>
      <span class="right-icon" @click="handleSearch">
        搜索
      </span>
    </div>
    <ul class="item-view">
      <li class="item-title">
        热门搜索
      </li>
      <li class="item-cell clearfix">
        <div class="search-list" v-for="(item, index) in hotList" :key="index" @click="clickSearch(item)">
          {{ item.name }}
        </div>
      </li>
      <li class="item-title" v-if="hasHistory">
        搜索历史
      </li>
      <li class="item-cell clearfix" v-if="hasHistory">
        <div class="search-list" v-for="(item, index) in history" :key="index" @click="clickSearch(item)">
          {{ item.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'shopsearch',
  data () {
    return {
      isSearch: false,
      inputValue: '',
      hotList: [
        {
          name: '农夫山泉'
        }, {
          name: '陶华碧老干妈'
        }, {
          name: '海天'
        }, {
          name: '厨邦'
        }, {
          name: '哇哈哈'
        }, {
          name: '统一'
        }
      ],
      history: [
        {
          name: '哇哈哈'
        }
      ]
    }
  },
  computed: {
    hasHistory() {
      return this.history.length;
    } 
  },
  methods: {
    goback () {
      this.$router.go(-1);
    },
    toggleSearch () {
      // 切换搜索框样式
      if (!this.inputValue) {
        this.isSearch = !this.isSearch;
        this.$nextTick(() => {
          if (this.isSearch) {
            this.$refs.searchInput.focus();
          }
        })
      }
    },
    handleSearch () {
      if (this.inputValue && this.inputValue.length > 0) {
        // 搜索框内容存在进行搜索
        this.$router.push({
          name: 'shop',
          params: {
            searchKey: this.inputValue
          }
        })
      } else {
        this.$toast.error('请输入要查找的商品');
        this.isSearch = !this.isSearch;
        this.$nextTick(() => {
          if (this.isSearch) {
            this.$refs.searchInput.focus();
          }
        })
      }
    },
    clickSearch (val) {
      this.$router.push({
        name: 'shop',
        params: {
          searchKey: val.name
        }
      });
    }
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
      color: #f6f5f5;
    }
  }
  .search-bar {
    flex: 1;
    padding: 0.06rem .18rem;
    .search-bg {
      width: 100%;
      height: .32rem;
      line-height: .32rem;
      text-align: center;
      border-radius: .18rem;
      background: rgba(0, 0, 0, .1);
      font-size: .14rem;
      color: rgba(255, 255, 255, .5);
      .bg-search {
        position: relative;
        top: .02rem;
      }
    }
    .search-input {
      position: relative;
      width: 100%;
      height: .32rem;
      line-height: .32rem;
      border-radius: .18rem;
      background: rgba(0, 0, 0, .1);
      font-size: .14rem;
      color: rgba(255, 255, 255, .5);
      .input-search {
        position: absolute;
        left: .1rem;
        top: 52%;
        transform: translateY(-50%);
        color: #fff;
      }
      input {
        width: 100%;
        height: 100%;
        color: #fff;
        padding: .06rem .1rem .06rem .32rem;
      }
    }
  }
}

.item-view {
  overflow: hidden;
  .item-title {
    height: .44rem;
    line-height: .44rem;
    padding: 0 .15rem;
    font-size: .14rem;
    color: #666;
    background: #fff;
    @include border-bottom-posi(#e5e5e5, .15rem);
  }
  .item-cell {
    padding: .11rem .15rem 0 .15rem;
    margin-bottom: .1rem;
    background: #fff;
    .search-list {
      float: left;
      width: calc((100% - .13rem*2) / 3);
      font-size: .12rem;
      padding: 0.06rem;
      text-align: center;
      color: #666;
      margin-right: .13rem;
      margin-bottom: .12rem;
      @include border-1px(#e5e5e5, 0.03rem);
      &:nth-child(3n+0) {
        margin-right: 0;
      }
    }
  }
}
</style>
