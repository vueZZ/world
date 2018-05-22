<template>
  <div class="components">
    <nuxt-link to="/components/ui" class="components_item">图片取背景色</nuxt-link>
    <nuxt-link to="/components/carousel" class="components_item">carousel</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.components{
  display: flex;
  flex-direction: column;
  &_item{
    padding: 5px;
  }
}
</style>
