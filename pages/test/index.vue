<template>
  <div>
    <h2>test</h2>
    父组件:{{ data }}
    <button @click="add1">add1</button>
    <place :data.sync="data"></place>
  </div>
</template>

<script>
import place from './place'
export default {
  components: {
    place
  },
  data () {
    return {
      data: {
        // name: '父'
      }
    }
  },
  methods: {
    add1 () {
      this.data.name = `${this.data.name || ''}1`
    }
  }
}
</script>


<style lang="scss">
</style>
