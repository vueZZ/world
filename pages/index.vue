<template>
  <div>
    <section class="wallpaper">
      <img src="/img/home_bag.jpg" class="wallpaper_bag" alt="">
      <div class="wallpaper_content plate">
        <div class="wallpaper_main" ref="swiper" :data-index="nowBag">
          <div class="wallpaper_main_img" :style="{backgroundImage: 'url('+ imgUrl + bagLists[nowBag].img + ')'}"></div>
          <div class="wallpaper_main_intro">
            <nuxt-link to="/" class="wallpaper_main_intro_title" :title="bagLists[nowBag].title">{{ bagLists[nowBag].title }}</nuxt-link>
            <div class="wallpaper_main_intro_content">
              {{ bagLists[nowBag].intro }}
            </div>
          </div>
        </div>
        <div class="wallpaper_foot">
          <li class="wallpaper_foot_item" v-for="(item,index) in bagLists" :key="index" v-if="index<4" :title="item.title_little" :class="{active:nowBag===index}" :style="{backgroundImage:'url('+imgUrl +item.img_little+')'}" @click="checkBag(index)">
            <div class="wallpaper_foot_item_title">{{ item.title_little }}</div>
            <div class="wallpaper_foot_item_border"></div>
          </li>
        </div>
      </div>
    </section>
    <plate :data="gameLists"></plate>
    <section class="show-more plate">
      <button class="show-more_button" @click="loadContent()" ref="more">加载更多</button>
    </section>
  </div>
</template>


<script>
import plate from '~/components/section/plate/index';
import { mapState } from 'vuex'
export default {
  data () {
    return {
      nowBag: 0,
      bagLists:[
        {
          id:'1001',
          title:'新《战神》评测：光头老爸与小头儿子的练级故事1',
          intro:'伴随着54家游戏媒体打出的平均9.4的高分，以及那一台战神限定版本的ps4 pro，《战神（GOD of WAR）》闪亮登场',
          title_little:'《战神与他的老父亲》在线性感评测',
          img:'bag1.jpg',
          img_little:'bag1_little.jpg'
        },
        {
          id:'1002',
          title:'《救赎之路》评测：这款硬核游戏能打破你对国产的认识',
          intro:'国产硬核游戏，《救赎之路》评测',
          title_little:'国产硬核游戏',
          img:'bag2.jpg',
          img_little:'bag2_little.jpg'
        },
        {
          id:'1003',
          title:'新《战神》评测：光头老爸与小头儿子的练级故事3',
          intro:'伴随着54家游戏媒体打出的平均9.4的高分，以及那一台战神限定版本的ps4 pro，《战神（GOD of WAR）》闪亮登场',
          title_little:'《战神与他的老父亲》在线性感评测',
          img:'bag1.jpg',
          img_little:'bag1_little.jpg'
        },
        {
          id:'1002',
          title:'《救赎之路》评测：这款硬核游戏能打破你对国产的认识',
          intro:'国产硬核游戏，《救赎之路》评测',
          title_little:'国产硬核游戏',
          img:'bag2.jpg',
          img_little:'bag2_little.jpg'
        }
      ],
      gameLists:[
        {
          title:'《荒野行动》飓风评测：持鱼叉下海争当水下蛟龙 扛88式爬管智斗伏楼顶魔',
          review: 5,
          img:'item_bag.jpg'
        },
        {
          title:'《荒野行动》飓风评测：持鱼叉下海争当水下蛟龙 扛88式爬管智斗伏楼顶魔',
          review: 5,
          img:'item_bag.jpg'
        },
        {
          title:'《荒野行动》飓风评测：持鱼叉下海争当水下蛟龙 扛88式爬管智斗伏楼顶魔',
          review: 5,
          img:'item_bag.jpg'
        },
        {
          title:'《荒野行动》飓风评测：持鱼叉下海争当水下蛟龙 扛88式爬管智斗伏楼顶魔',
          review: 4,
          img:'item_bag.jpg'
        }
      ],
      addLists: []
    }
  },
  computed: {
    ...mapState({
      imgUrl:'imgUrl'
    })
  },
  components: {
    plate
  },
  created () {
    this.addLists = this.addLists.concat(this.gameLists)
    this.init(this.initSwiper)
  },
  methods: {
    // TODO:轮播效果
    init (method, time=2000) {
      method.tId = setInterval(function () {
        method()
      }, time)
    },
    initSwiper () {
      let vm = this
      vm.nowBag = vm.nowBag>=3 ? 0 : vm.nowBag+1
    },
    checkBag(n) {
      if (this.initSwiper.hasOwnProperty('tId')) {
        clearInterval(this.initSwiper.tId)
      }
      let vm = this
      this.nowBag = n
      this.$utils.throttle(vm.init(vm.initSwiper), 4000)
    },
    loadContent () {
      this.$message('s')
      // console.log(this)
      // this.$toast('我是弹出消息')
      // let vm = this
      // this.$refs.more.innerHTML = '努力加载中'
      // setTimeout(() => {
      //   vm.gameLists.push(...this.addLists)
      //   // vm.$nextTick(() => { // 移动到新页第一个
      //   //   window.scrollTo(window.pageXOffset, window.pageYOffset + 2500)
      //   // })
      //   vm.$refs.more.innerHTML = '加载更多'
      // }, 1200);
    }
  }
}
</script>

<style lang="scss">
  .wallpaper{
    position: relative;
    &_bag{
      position: absolute;
      z-index: 10;
      width: 100%;
      height: 492px;
    }
    &_content{
      z-index: 20;
      padding-top: 120px;
    }
    &_main{
      display: flex;
      flex-direction: row;
      height: 294px;
      background-color: #2a2a2a;
      &_img{
        flex: 1;
        background: url('/img/bag1.jpg');
        background-size: 100% 100%;
        &.active{
          transition: left 600ms ease;
        }
      }
      &_intro{
        width: 304px;
        padding: 26px 25px 0 35px;
        box-sizing: border-box;
        &_title{
          display: block;
          line-height: 30px;
          font-size: 22px;
          margin-bottom: 5px;
          color: #fff;
        }
        &_content{
          font-size: 12px;
          line-height: 2;
          color: #888;
          max-height: 72px;
          overflow: hidden;
        }
      }
    }
    &_foot{
      display: flex;
      padding: 10px 12px;
      background-color: #2a2a2a;
      &_item{
        position: relative;
        flex: 1;
        height: 96px;
        box-sizing: border-box;
        background: url('/img/bag1_little.jpg');
        background-size: 100% 100%;
        color: #aaaaaa;
        cursor: pointer;
        &.active{
          color: #ea2f2f;
        }
        .active &_border{
          opacity: 1;
          transition: all linear 0.3s;
        }
        &_border{
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          border: 2px #ea2f2f solid;
          opacity: 0;
        }
        &:not(:last-child){
          margin-right: 12px;
        }
        &_title{
          position: absolute;
          z-index: 1;
          bottom: 0;
          left: 0;
          width: 100%;
          box-sizing: border-box;
          padding: 0 10px;
          font-size: 14px;
          overflow: hidden;
          line-height: 30px;
          background-color: rgba(0,0,0,0.85);
        }
      }
    }
  }
  .show-more{
    &_button{
      display: block;
      margin: 0 auto;
      width: 180px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      color: #999;
      text-align: center;
      border: 1px #d0d0d0 solid;
      border-radius: 4px;
      background-color: #fff;
      cursor: pointer;
      &:hover{
        background-color: #e62e2e;
        color: #fff;
      }
    }
  }
</style>


