<template>
  <div class="zz-carousel">
    <div class="zz-carousel_container">
      <slot></slot>
    </div>
    <div class="zz-carousel_indicators">
      <span class="zz-carousel_indicator" v-for="(item,index) in items" :key="index" :class="{active:index === activeIndex}"
        @click="handleIndicatorClick(index)"
      >
      </span>
    </div>
  </div>
</template>

<script>
import zzCarouselItem from './item'
export default {
  name:'zz-carousel',
  data () {
    return {
      activeIndex:0,
      items: []
    }
  },
  props: {
    initialIndex:{
      type:Number,
      default:0
    }
  },
  watch: {
    activeIndex(val, oldVal) {
      this.resetItemPosition();  // 重置子项的位置
      this.$emit('change', val, oldVal);  // 发送change事件
    }
  },
  components: {
    zzCarouselItem
  },
  created () {
    if (this.initialIndex < this.items.length && this.initialIndex >= 0) {
      // 如果初始化的索引有效，则将当前页设置为初始的索引
      this.activeIndex = this.initialIndex;
    }
    this.$nextTick().then(() => {
      this.updateItems();
      this.resetItemPosition()
    })
  },
  methods: {
    prev () {
      this.setActiveIndex(this.activeIndex - 1)
    },
    next () {
      this.setActiveIndex(this.activeIndex + 1)
    },
    handleIndicatorClick (index) {
      this.setActiveIndex(index)
    },
    updateItems() {
      this.items = this.$children.filter(child => child.$options.name === 'zz-carousel-item');
      // TODO:'offsetWidth' of undefined
      let offsetWidth = this.$root.$el.offsetWidth
      this.items.forEach(item => {
        item.parentWidth = 1180
      });
    },
    resetItemPosition () {
      this.items.forEach((item, index) => {
        item.translateItem(index, this.activeIndex);
      })
    },
    setActiveIndex (index) {
      let length = this.items.length
      if (index < 0) {  // 如果索引小于0，设置当前页为最后一页
        this.activeIndex = length - 1;
      } else if (index >= length) {  // 如果索引大于长度，设置当前页为第一页
        this.activeIndex = 0;
      } else {  // 否则设置为索引页
        this.activeIndex = index;
      }
    }
  }
}
</script>

<style lang="scss">
.zz-carousel{
  position: relative;
  overflow: hidden;
  &_container{
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
  }
  &_left,&_right{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
  }
  &_left{
    left: 0;
  }
  &_right{
    right: 0;
  }
  &_indicators{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
  &_indicator{
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 3px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #333;
    cursor: pointer;
    &.active{
      background-color:orange;
    }
  }
}
</style>
