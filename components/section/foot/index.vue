<template>
  <div class="foot">
    <div class="foot_content">
      <div class="foot_word"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .foot{
    position: absolute;
    z-index: 999;
    bottom: 0;
    width: 100%;
    color: #999;
    background: #242424;
    &_content{
      max-width: 1180px;
      margin: 0 auto;
      padding: 20px 0;
    }
    &_word{
      width: 700px;
      height: 40px;
      margin: auto;
      background-image: url('/img/foot.png');
      background-size: 100% 100%;
    }
  }
</style>

