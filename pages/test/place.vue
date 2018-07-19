<template>
  <div>
    子组件：{{ data }}
    <button @click="add1">add1</button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
    }
  },
  methods: {
    add1 () {
      console.log('add')
      let data = {
        ...this.data,
        name: `${this.data.name}1`
      }
      this.$emit('update:data', data)
    }
  }
  // watch: {
  //   data: {
  //     deep: true,
  //     handler(newValue, oldValue) {
  //       this.place = newValue
  //     }
  //   }
  // },
  // created () {
  //   this.place = data
  // }
}
</script>

