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

<style lang="scss">
.main{
  overflow: hidden;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>

