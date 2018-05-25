<template>
  <div class="zz-carousel_item"
    :class="{
      'is-active': active,
      'is-animating': animating
    }"
    :style="{
      transform:`translateX(${translate}px)`
    }"
  >
  <slot></slot>
  </div>
</template>

<script>
export default {
  name:'zz-carousel-item',
  data () {
    return {
      active: false,
      animating: false,
      translate: 0,
      parentWidth: 0
    }
  },
  methods: {
    translateItem (index, activeIndex) {
      this.active = index === activeIndex
      this.translate = this.parentWidth * (index - activeIndex)
    }
  }
}
</script>


<style lang="scss">
.zz-carousel_item{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  transition: transform 0.5s ease;
}
</style>
