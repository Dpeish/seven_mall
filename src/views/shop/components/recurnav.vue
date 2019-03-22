<template>
  <div>
    <ul class="view-item">
      <li class="item-cell" :class="{'bg-fff': showNav === item.id }" v-for="(item, index) of navlist" :key="index">
        <span class="item-name" :class="{'cell-active': showNav === item.id }" @click.self="openNav(index, item)">{{ item.name }}</span>
        <div class="item-children" :class="{'noChildren': showNav === item.id }">
          <li class="item-cell" v-for="(child, ind) of item.children" :key="ind">
            <span class="item-name" :class="{'children-active': showChild === child.id }" @click.self="childToggle(child)">{{ child.name }}</span>
          </li>
        </div>
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
      showChild: ''
    }
  },
  methods: {
    openNav(index, e) {
      this.showNav = e.id;
      this.showChild = '';
      this.$emit('navData', e);
    },
    childToggle (e) {
      this.showChild = e.id;
      this.$emit('navData', e);
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
      border-left: 0.03rem solid transparent;
    }
    .item-children {
      display: none;
      overflow: hidden;
      height: 100%;
      transition: all 0.8s ease;
    }
    .noChildren {
      display: block;
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
  }
  .bg-fff {
    background: #fff;
  }
}




</style>


