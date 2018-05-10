<template>
  <div>
    <section class="wallpaper">
      <div class="wallpaper_bag">
      </div>
    </section>
    <plate></plate>
  </div>
</template>


<script>
import plate from '~/components/section/plate/index';
export default {
  components: {
    plate
  }
}
</script>

<style lang="scss">
  .wallpaper{
    width: 100%;
    height: 492px;
    margin-bottom: 24px;
    &_bag{
      width: 100%;
      height: 494px;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background: url('~/assets/img/home_bag.jpg');
    }
  }
</style>


