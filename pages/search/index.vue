<template>
  <div>
    <nuxt-link to="/" class="ad">
      <img src="~/assets/img/search_bag.jpg" alt="">
    </nuxt-link>
    <div class="search plate">
      <section class="search_main">
        <div class="search_title">为你找到了 <b>444</b> 条“{{ q }}”相关内容</div>
        <div class="search_lists">
          <li class="search_item" v-for="item in data" :key="item.id" >
            <nuxt-link to="/" class="search_item_img" :style="{backgroundImage: 'url('+ '/img/' + item.img + ')'}"></nuxt-link>
            <h3 class="search_item_title">
              <nuxt-link to="/">{{ item.title }}</nuxt-link>
            </h3>
            <p class="search_item_subtitle">
              {{ item.author }} 发表于 {{ item.date }}
            </p>
            <p class="search_item_intro">
              {{ item.intro }}
            </p>
          </li>
        </div>
      </section>
      <section class="search_aside"></section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      q: '',
      data:[
        {
          title:'《神域召唤》联动Fate／stay night  “金闪闪”BOSS降临',
          author: 'Yzzi',
          date:'2017-12-19 11:23',
          img:'fate.jpg',
          intro: '今日，官方提前曝光此次联动的游戏截图，赶紧来先睹为快吧！'
        },
        {
          title:'Fate正版手游曝光 B站独家代理Fate/Grand Order',
          author: 'Yzzi',
          date:'2015-11-20 11:22',
          img:'FGO-20151120-t.jpg',
          intro: 'Fate系正版手游终于要登陆国服啦！《Fate/Grand Order》由bilibili独家代理，将于明年第一季度上线，喜欢Fate的话就继续留意我们的后续报道吧！'
        }
      ]
    }
  },
  asyncData ({ params, error }) {
    return { q: params.q }
  }
}
</script>


<style lang="scss" scoped>
.ad{
  position: absolute;
  left: 0;
}
.search{
  margin-top: 120px;
  overflow: hidden;
  background: #fff;
  padding: 30px;
  min-height: 700px;
  &_main{
    float: left;
    max-width: 870px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding-right: 29px;
    margin-right: 290px;
    border-right: 1px #dddddd solid;
  }
  &_aside{
    float: right;
  }
  &_title{
    font-size: 24px;
    color: #170a14;
    line-height: 1.5;
    font-weight: bold;
    b{
      font-style: normal;
      color: #e11313;
    }
  }
  &_lists{
    overflow: hidden;
    border-top: 1px solid #ddd;
    margin-top: 24px;
  }
  &_item{
    overflow: hidden;
    padding: 25px 0;
    border-bottom: 1px #eee solid;
    &_img{
      display: block;
      float: left;
      width: 220px;
      height: 130px;
      margin-right: 15px;
      background-image: url('/img/fate.jpg');
      background-size: 100% 100%;
    }
    &_title{
      font-size: 20px;
      font-weight: bold;
      transition: color 0.2s linear;
      line-height: 1.8;
      color: #333;
      max-height: 36px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap
    }
    &_subtitle{
      padding: 2px 0 12px;
      margin-bottom: 8px;
      font-size: 12px;
      line-height: 2;
      color: #999;
    }
    &_intro{
      font-size: 14px;
      line-height: 1.7;
      color: #7e7e7e;
      max-height: 46px;
      overflow: hidden;
    }
  }
}
</style>

