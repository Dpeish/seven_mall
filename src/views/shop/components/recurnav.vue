<template>
  <div>
    <ul class="view-item">
      <li class="item-cell" :class="{'bg-fff': showNav === item.id }" v-for="(item, index) of navlist" :key="index">
        <span class="item-name" :class="{'cell-active': showNav === item.id }" @click.self="openNav(item)">{{ item.name }}</span>
        <ul class="item-children" :class="{'noChildren': showNav === item.id }" v-if="item.children">
          <li>
            <recurnav :navlist="item.children" @click="childClick(item.children)"></recurnav>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 递归组件生成无限级菜单
  name: 'recurnav',
  props: {
    navlist: Array
  },
  data() {
    return {
      showNav: 1,
      showChildren: ''
    }
  },
  methods: {
    openNav(e) {
      console.log(e)
      if (e.children) {
        this.showNav = e.id;
      } else {
        this.showNav = e.id
      }
    },
    childClick(e) {
      console.log(e)
      if (e) {
        this.showChildren = e.id;
      } else {
        this.showChildren = e.id
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
.view-item {
  width: 100%;
  overflow: hidden;
  .item-cell {
    // height: .44rem;
    font-size: .14rem;
    @include border-bottom(#f5f5f5);
    .item-name {
      display: inline-block;
      width: 100%;
      height: 100%;
      padding: .11rem .1rem;
    }
    .item-children {
      overflow: hidden;
      height: 0;
    }
  }
  .cell-active {
    background: #fff;
    color: $pinkText;
    border-left: 0.03rem solid $pinkText;
  }
  .children-active {
    background: #fff;
    color: $pinkText;
    border-left: 0.03rem solid transparent;
  }
  .bg-fff {
    background: #fff;
  }
}

.noChildren {
  overflow: inherit;
  height: 100%!important;
}


</style>


