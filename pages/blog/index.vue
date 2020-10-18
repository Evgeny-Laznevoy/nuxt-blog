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
  }
}
</script>

<style lang="scss" scoped>
  .blog {
    @include container;
  }
</style> 