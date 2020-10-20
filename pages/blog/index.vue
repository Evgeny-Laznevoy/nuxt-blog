<template>
  <div class="main">
    <div class="main__page">
      <div class="main-columns">
        <div class="content" v-for="(post,i) in posts" :key="i">
          <div class="content__main">
            <article class="post-id">
              <nuxt-link class="article-link" to="/"></nuxt-link>
              <div class="post-text">
                <div class="post-title">
                  <h2 class="entry-title">
                    Разбираем CSS в новом дизайне 
                    Facebook: легаси, неочевидные решения и ответы разработчиков
                  </h2>
                </div>
                <div class="entry-container">
                  <div class="entry-content">
                    <p>
                      Недавно Facebook обновил дизайн. Ahmad Shadeed, UX/UI-дизайнер 
                      и фронтенд-разработчик, разобрал CSS-файл сайта и поделился своими 
                      находками. При этом некоторые решения команды разработчиков FB оказались 
                      для него неочевидны, и он спросил их напрямую.
                    </p>
                    <div class="post-tool-block">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="entry-icon">
                <img :src="`${sectionPostImg}`" class="section-post-img" alt="">
              </div>
            </article>
          </div>
        </div>
      </div>
      <aside class="sideBar">
        <div class="sideBar__inner">
          <WidgetText />
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import sectionPostImg from '../../static/uploads/blog/iconfinder-css-news-cover-icon.png'
import WidgetText from '../../components/widgetText'

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
    WidgetText
  },
  data() {
    return {
      sectionPostImg: sectionPostImg,
      posts: 6,
    }
  },
}
</script>

<style lang="scss" scoped>
  .main {
    background-color: $black;
    width: 100%;
    &__page {
      display: flex;
      padding-top: 10px;
      // flex-wrap: wrap;
      align-items: flex-start;

      @include container;

      .content {
        max-width: 900px;
        flex-grow: 1;

        &__main {
          display: flex;
          align-items: stretch;
          flex-direction: row;
          flex-wrap: wrap;
          flex-grow: row wrap;
          align-content: flex-end;

          .post-id {
            position: relative;
            cursor: pointer;
            display: flex;
            margin-right: 20px;
            margin-bottom: 20px;
            width: 100%;
            z-index: 1;
            @include box;

            .article-link {
              cursor: pointer;
              height: 100%;
              width: 100%;
              position: absolute;
              z-index: 3;
            }

            .post-text {
              width: 100%;
                .post-title {
                  word-break: break-word;
                  padding: 25px 50px 0;
                  display: block;
                  margin: 0;

                  .entry-title {
                    font-size: 22px;
                    margin: 0;
                    display: block;
                    word-break: break-word;
                  }
                }

                .entry-container {
                  font-size: 17px;
                  .entry-content {
                    padding: 15px 50px 25px;

                    .post-tool-block {
                      margin: 15px -5px 0;
                      height: 31px;
                      min-height: 31px;
                      align-items: center;
                      z-index: 10;
                      width: calc(100% + 10px);
                      display: flex;
                      justify-content: space-between;
                    }
                  }
                }
            }

            .entry-icon {
              display: flex;
              min-width: 280px;
              margin: 0;
              align-items: center;
              justify-content: center;
              border-bottom-right-radius: 4px;
              border-top-right-radius: 4px;
              background-color: #CAAAA5;
            }
          }
        }
      }

      .sideBar { 
        width: 370px;
        margin: 0;
        display: block;
        position: relative;
        overflow: visible;
        min-height: 1px;
        box-sizing: border-box;

          &__inner {
            position: relative;
            transform: none;
            position: static;
          }
      }
    }
    
  }
</style> 