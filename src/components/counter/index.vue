<template>
  <div>
    <div class="numbox-area">
      <div class="minus-minus">
        <button :disabled="numValue < 2"><i class="iconfont icon-sub" @click="sub"></i></button>
      </div>
      <div class="minus-input">
        <input type="number" oninput="this.value=this.value.replace(/\D/g,'').replace(/^0+(?=\d)/,'')" v-model.number="numValue" @focus="enterNum($event)" @blur="blurNum($event)">
      </div>
      <div class="minus-plus">
        <button :disabled="numValue >= maxValue"><i class="iconfont icon-jia" @click="add"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
    maxValue: {
      type: Number,
      default: Number.MAX_VALUE
    },
    amount: {
      type: Number,
      default: 1
    },
    goodsId: {
      type: Number
    },
    sotreId: {
      type: Number
    }
  },
  data () {
    return {
      numValue: this.amount,
      rawNum: '', // input 聚焦时候获得的数量
    }
  },
  watch: {
    
  },
  methods: {
    add () {
      // 数量加
      if (this.numValue >= this.maxValue) {
        return false;
      } else {
        this.numValue++;
        this.$emit('getCout', this.numValue, this.goodsId, this.storeId);
      }
    },
    sub () {
      // 数量减
      if (this.numValue < 2) {
        return false;
      } else {
        this.numValue--;
        this.$emit('getCout', this.numValue, this.goodsId, this.storeId);
      }
    },
    enterNum (e) {
      this.rawNum = e.target.value;
    },
    blurNum (e) {
      this.$nextTick(() => {
        if (e.target.value > this.maxValue) {
          this.numValue = this.rawNum;
          
        } else if (e.target.value === '') {
          this.numValue = 1;
        }
        this.$emit('getCout', this.numValue, this.goodsId, this.storeId);
      })
    }
  }
}
</script>

<style scoped>
.numbox-area {
  display: flex;
  width: 1.4rem;
  height: .3rem;
  border-radius: 0.03rem;
  border: 0.01rem solid rgba(0, 0, 0, 0.2);
}

.numbox-area .minus-minus {
  flex: 1;
  height: 100%;
}

.numbox-area .minus-minus button {
  width: 100%;
  height: 100%;
}

.numbox-area .minus-plus {
  flex: 1;
  height: 100%;
}

.numbox-area .minus-plus button {
  width: 100%;
  height: 100%;
}

.numbox-area .minus-input {
  min-width: 0;
  flex: 2;
  height: 100%;
}

.numbox-area .minus-input input {
  width: 100%;
  height: 100%;
  font-size: .16rem;
  text-align: center;
}
</style>

