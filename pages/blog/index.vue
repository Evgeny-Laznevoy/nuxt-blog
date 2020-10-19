<template>
  <div class="blog">
    <p>
        Блог
    </p>
  </div>
</template>

<script>
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

  }
}
</script>

<style lang="scss" scoped>
  .blog {
    background-color: $black;
    // @include container;
  }
</style> 