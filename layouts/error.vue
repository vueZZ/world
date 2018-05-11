<template>
  <div class="page_404">
    <nuxt-link to="/" class="page_404_img">
      <img src="~/assets/img/page404_ym.jpg" alt="">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty',
}
</script>

<style lang="scss" scoped>
.page_404{
  position: relative;
  width: 100vw;
  height: 100vh;
  &_img{
    display: block;
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
