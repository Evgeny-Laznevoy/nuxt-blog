<template>
  <div class="widget">   
    <div class="widget__main">
        <img :src="`${widgetImg}`" class="widget__img" alt="image widget">
        <p class="widget__text">
            Хотите рассказать о своём проекте или интересном опыте? 
            Опубликуйте материал на нашем сайте
        </p>
        <nuxt-link class="widget-button" to="/">Хочу попробовать</nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import widgetImg from '../static/uploads/blog/1463671797_check.png'

export default {
  head() {
    return {
      title: '',
      meta: [{ hid: 'description', name: 'description', content: 'Виджет' }],
    }
  },
  data() {
      return {
          widgetImg: widgetImg,
          persentage: 0,
      }
  },
  props: {
      maxHeight: {
          type: Number,
          default: () => {
              return 0
          }
      }
  },
  async asyncData() {
    const { data } = await axios.get(`http://localhost:3000/api/services/`)
    return { data }
  },
}
</script>

<style lang="scss" scoped>
    .widget {
        padding: 15px;
        margin-bottom: 20px;
        position: relative;
        @include box;

        &__main {
            justify-content: center;
            // margin: 0 auto;
        }

        &__img {
                max-height: 90px;
                min-height: 90px;
                opacity: 1;
                width: 100%;
                object-fit: contain;
                margin-bottom: 10px;
            }

            &__text {
                text-align: center;
                font-size: 16px;
                line-height: 1.6;
            }

            p {
                margin: 0 0 10px;
            }

            &-button {
                text-align: center;
                display: block;
                font-size: 16px;
                margin: 15px -15px -15px;
                padding: 12px 15px 15px;
                line-height: 1.6;
                color: #333;
                font-weight: 500;
                background: #eee;
                border-bottom-right-radius: 4px;
                border-bottom-left-radius: 4px;
            }
    }
</style>
