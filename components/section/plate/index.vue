<template>
  <div class="plate">
    <div class="plate_head">
      <div class="plate_title">游戏评测</div>
      <div class="plate_keyword">
        <li class="plate_keyword_item" v-for="n in 4" :key="n">
          <nuxt-link to="/" class="plate_keyword_item">新游资讯</nuxt-link>
        </li>
      </div>
      <nuxt-link to="/" class="plate_more">更多+</nuxt-link>
    </div>
    <div class="plate_content">
      <nuxt-link to="/" class="plate_content_item" v-for="(item,index) in data" :key="index" :style="{backgroundImage: 'url('+ '/img/' + item.img + ')'}">
        <b class="mark-review-5" :class="`mark-review-${item.review}`"></b>
        <div class="plate_content_item_intro">
          {{ item.title }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data:{
      type:Array,
      default () {
        return []
      }
    }
  }
}
</script>


<style lang="scss">
.plate{
  &_head{
    position: relative;
    overflow: hidden;
    line-height: 30px;
    margin-bottom: 28px;
  }
  &_title{
    float: left;
    border-left: 4px #ea2f2f solid;
    padding-left: 10px;
    margin-right: 20px;
    color: #333;
    font-weight: bold;
    font-size: 24px;
  }
  &_keyword{
    float: left;
    display: flex;
    &_item{
      color: #888;
      &:not(:last-child)::after{
        content: '|';
        display: inline-block;
        width: 20px;
        text-align: center;
      }
    }
  }
  &_more{
    float: right;
    font-size: 14px;
    display: block;
    color: #888;
    &::before{
      content: '';
      position: absolute;
      border-top:1px solid #ccc;
      width: 430px;
      right: 50px;
      top: 50%;
    }
  }
  &_content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    &_item{
      position: relative;
      width: 22%;
      height: 360px;
      color: #fff;
      background: url('/img/item_bag.jpg');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      &::after{
        content: '';
        display: block;
        width: 100%;
        height: 4px;
        background: #ea2f2f;
        position: absolute;
        bottom: 0;
        z-index: 20;
        transition: all linear 0.4s;
        left: -100%;
      }
      &:hover::after{
        left: 0;
      }
      &:not(:nth-child(4n)){
        margin-right: 4%;
        margin-bottom: 20px;
      }
      &_intro{
        position: absolute;
        z-index: 10;
        bottom: 0;
        width: 100%;
        padding: 15px 18px 10px;
        box-sizing: border-box;
        background-image: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0,0,0,0.15)), to(rgba(0,0,0,1)));
      }
    }
  }
}
</style>

