<template>
  <div class="nav-menu">
    <div class="nav-menu_content">
      <div class="nav-menu_icon"></div>
      <ul class="nav-menu_items">
        <nuxt-link to="/" class="nav-menu_item">首页</nuxt-link>
        <nuxt-link to="/article" class="nav-menu_item">文章</nuxt-link>
        <nuxt-link to="/demo" class="nav-menu_item">demo</nuxt-link>
      </ul>
      <!-- <nuxt-link to="/about" class="iconfont icon-weixin nav-menu_me"></nuxt-link> -->
      <div class="nav-menu_search">
        <input type="text" class="nav-menu_search_input" placeholder="请输入关键词" ref="search">
        <i class="iconfont icon-suosou nav-menu_search_icon" @click="handleSearch()"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSearch () {
      let q = this.$refs.search.value
      if (q) {
        this.$router.push(`/search/${q}`)
      } else {
        alert('请输入值')
      }
    }
  }
}
</script>


<style lang="scss">
.nav-menu{
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;
  background: #242424;
  &_content{
    max-width: 1180px;
    height: 60px;
    margin: 0 auto;
  }
  &_icon{
    float: left;
    width: 100px;
    height: 30px;
    margin: 15px 0;
    background: url('~/assets/img/logo.png');
    background-size: 100% 100%;
  }
  &_items{
    float: left;
    line-height: 60px;
    margin-left: 30px;
  }
  &_item{
    display: inline-block;
    padding: 0 12px;
    color: #ccc;
    &:hover{
      background-color: #161616;
      color: red;
    }
  }
  &_search{
    position: relative;
    float:right;
    margin-top: 15px;
    height: 30px;
    margin-right: 30px;
    &_input{
      font-size: 14px;
      width: 230px;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      background-color: #161616;
      color: #888;
      border: none;
      padding: 3px 30px 3px 10px;
    }
    &_icon{
      position: absolute;
      right: 0;
      top: 0;
      font-size: 24px;
      line-height: 30px;
      color: #e62e2e;
      cursor: pointer;
    }
  }
  &_me{
    float:right;
    width: 60px;
    height: 60px;
    font-size: 30px;
    color: #797979;
    line-height: 60px;
    text-align: center;
    &:hover{
      background: #373737;
    }
  }
}
</style>
