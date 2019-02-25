<template>
  <button class="o-button" :class="classes" @click="handleClick">
    <slot>按钮</slot>
  </button>
</template>

<script>
import { oneOf } from '@/utils/assist.js';
export default {
  data () {
    return {
      
    }
  },
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'dashed', 'info', 'success', 'warning', 'error'])
      },
      default: 'default'
    },
    long: {
      type: Boolean,
      default: false
    },
    size: {
      validator (value) {
        return oneOf(value, ['default','medium', 'small', 'mini'])
      },
      default: 'default'
    }
  },
  computed: {
    classes() {
      return [
        `o-btn-${this.type}`,
        `o-btn-size-${this.size}`,
        {
          [`o-btn-long`]: this.long
        }
      ]
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  },
  mounted () {
    console.log(this.size)
  }
}
</script>

<style scoped>
button {
  border: 0;
  background: transparent;
  outline: none;
}
.o-button {
  display: inline-block;
  width: 140px;
  height: 40px;
  border-radius: 4px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #fff;
  border: 1px solid #dcdfe6;
  font-size: 14px;
  margin-bottom: 10px;
  color: #666;
}

.o-btn-primary {
  background: #409EFF;
  color: #fff;
}
.o-btn-info {
  border: 1px solid #dcdfe6;
  background: #2db7f5;
  color: #fff;
}
.o-btn-success {
  background: #19be6b;
  color: #fff;
}
.o-btn-warning {
  background: #ff9900;
  color: #fff;
}
.o-btn-error {
  background: #ed4014;
  color: #fff;
}
.o-btn-long {
  width: 100%;
}

.o-btn-size-default {
  height: 40px;
  line-height: 40px;
}
.o-btn-size-medium {
  height: 36px;
  line-height: 36px;
}
.o-btn-size-small {
  height: 32px;
  line-height: 32px;
}
.o-btn-size-mini {
  height: 28px;
  line-height: 28px;
}

</style>

