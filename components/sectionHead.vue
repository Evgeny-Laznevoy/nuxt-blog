<template>
  <div class="section-head">
      <div class="section-head__content">
          <div class="section-head__left">
              <img :src="`${sectionHeadImg}`" class="section-head-img" alt="">
              <div class="section-head__left-text">
                  <h1 class="section-head-title">Заголовок</h1>
                  <h2 class="section-head-subtitle">
                      <p>
                          В этой рубрике найдете подборки материалов, объединенных общей 
                          тематикой: например, посвященных определенному языку 
                          программирования или области IT-сферы.
                      </p>
                  </h2>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import sectionHeadImg from '../static/uploads/blog/1463671797_check.png'

export default {
  head(){
    return{
      title: 'текстовый тайтл',
      meta:[
        {
          hid: 'describtion', name: 'describtion', content: 'head content'
        }
      ]
    }
  },
  data() {
      return {
          sectionHeadImg: sectionHeadImg,
      }
  },
}
</script>

<style lang="scss" scoped>
  .section-head {
    // padding-top: 1px;
    padding: 20px 0;
    background-color: $black;
    // @include container;

    &__content {
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        // padding: 0 20px;
        justify-content: space-between;

        @include container;
    }

    &__left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin: 0;
        }

    &-title {
        color: $header-color-text;
        font-size: 38px;
        line-height: 1.1;
        margin: 0 0 10px;
    }

    &-subtitle {
        color: $dark-bg-gray-color;
        font-size: 18px;
        margin: 0;
        line-height: 1.4;
    }

    &-img {
        width: 64px;
        max-height: 64px;
        margin-left: 15px;
        object-fit: contain;
        order: 1;
    }

  }
</style> 