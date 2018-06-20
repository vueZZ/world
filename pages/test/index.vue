<template>
  <div>
    <h2>test</h2>
    {{ data }}
    <button @click="getData">getData</button>
  </div>
</template>

<script>
import { getData } from '~/api/index.js'
export default {
  data () {
    return {
      data: ''
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      getData ().then(a => {
        this.data = a
      })
    }
  }
}
</script>


<style lang="scss">
</style>
