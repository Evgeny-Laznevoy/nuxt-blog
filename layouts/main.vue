<template>
  <div>
    <Header />
    <Nuxt />
    777777777777777777777777777
  </div>
</template>

<script>
import Header from '../components/header'

export default {
  head(){
    return{
      title: 'текстовый тайтл',
      meta:[
        {
          hid: 'describtion', name: 'describtion', content: 'text disc'
        }
      ]
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="scss">
</style>
