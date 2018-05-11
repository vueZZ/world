<template>
  <div>
    <nav-menu></nav-menu>
    <nuxt class="main"></nuxt>
    <foot></foot>
  </div>
</template>

<script>
import navMenu from '~/components/section/navMenu/index';
import foot from '~/components/section/foot/index';
export default {
  components: {
    navMenu,foot
  }
}
</script>

<style lang="scss" scoped>
.main{
  min-height: 100vh;
  overflow: hidden;
  padding-top: 60px;
  padding-bottom: 100px;
  box-sizing: border-box;
}
</style>

