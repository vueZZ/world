<template>
  <div class="zz-carousel">
    <div class="zz-carousel_container" :style="containerStyle">
      <li>
        <img :src="imgLists[imgLists.length - 1].img" alt="" class="zz-carousel_item">
      </li>
      <li v-for="(item,index) in imgLists" :key="index">
        <img :src="item.img" alt="" class="zz-carousel_item">
      </li>
      <li>
        <img :src="imgLists[0].img" alt="" class="zz-carousel_item">
      </li>
    </div>
    <div class="zz-carousel_indicators">
      <span class="zz-carousel_indicator" v-for="n in imgLists.length" :key="n" :class="{active:currentIndex === n}"></span>
    </div>
    <button class="zz-carousel_left" @click="prev">上一个</button>
    <button class="zz-carousel_right" @click="next">下一个</button>
  </div>
</template>

<script>
export default {
  name:'zz-carousel',
  data () {
    return {
      imgLists:[
        {img:'http://www.appgame.com/wp-content/uploads/2018/05/201805151240441_gaitubao_com_876x293.jpg'},
        {img:'http://www.appgame.com/wp-content/uploads/2018/05/876x294-2.jpg'},
        {img:'http://www.appgame.com/wp-content/uploads/2018/05/876x294-2.jpg'},
        {img:'http://www.appgame.com/wp-content/uploads/2018/05/876x294-2.jpg'},
        {img:'http://www.appgame.com/wp-content/uploads/2018/05/876x294-2.jpg'},
      ],
      // width:600,
      distance:-600,
      currentIndex:1
    }
  },
  mounted() {
    // this.init()
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  methods: {
    prev () {
      this.move(600, 1)
    },
    next () {
      this.move(600, -1)
    },
    move(offset, direction) {
      this.currentIndex = this.currentIndex - direction
      this.distance = this.distance + offset * direction
      if (this.distance < -3000) this.distance = -600
      if (this.distance > -600) this.distance = -3000
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5
    }
  }
}
</script>

<style lang="scss">
.zz-carousel{
  position: relative;
  width: 600px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
  &_container{
    position: absolute;
    display: flex;
    animation: move 5s linear infinite;
  }
  &_item{
    display: inline-block;
    width: 600px;
    height: 400px;
    background: cyan;
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
  @keyframes move {
    0%{
      transform: translate(0px,0);
    }
    100% {
      transform: translate(-600px,0);
    }
  }
}
</style>
