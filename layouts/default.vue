<template>
  <div>
    <Header />
    <SectionHead />
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/header'
import SectionHead from '../components/sectionHead'

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
    SectionHead,
  },
  // beforeMount () {
  //   window.addEventListener('scroll', this.onScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.onScroll);
  // }
}
</script>

<style lang="scss">
</style>
