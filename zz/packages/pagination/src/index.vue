<template>
  <div class="zz-pagination">
    <button @click="prev()" class="zz-pagination_button">上一页</button>
    <ul class="zz-pagination_paper">
      <li v-for="n in 10" :key="n" @click="changePage" class="zz-pagination_num">{{ n }}</li>
    </ul>
    <button @click="next()" class="zz-pagination_button">下一页</button>
  </div>
</template>

<script>
export default {
  name:'zz-pagination',
  methods: {
    prev () {
      console.log('上一页')
    },
    next () {
      console.log('下一页')   
    },
    changePage (e) {
      let newPage = Number(e.target.textContent)
      console.log('改变'+ newPage)
    }
  }
}
</script>

<style lang="scss" scoped>
  .zz-pagination{
    height: 30px;
    line-height: 30px;
    &_button{
      height: inherit;
      margin: 0 5px;
      padding: 0 4px;
      border: none;
      background-color: #fff;
    }
    &_paper{
      display: inline-block;
      height: inherit;
    }
    &_num{
      display: inline-block;
      height: inherit;
      margin: 0 5px;
      padding: 0 4px;
      background-color: #fff;
      cursor: pointer;
    }
  }
</style>


