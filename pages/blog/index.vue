<template>
  <div class="main">
    <div class="main__page">
      <div class="content">
        <div class="content__main-columns">
          <article class="post-id">
            <nuxt-link class="article-link" to="/"></nuxt-link>
            <div class="post-text">
              <div class="post-title">
                <h2 class="entry-title">Заголовок поста</h2>
              </div>
              <div class="entry-container">
                <div class="entry-content">
                  <p>Краткий текст поста информация</p>
                  <div class="post-tool-block">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="entry-icon">
              icon
            </div>
          </article>
        </div>
      </div>
      <aside class="side-bar"></aside>
    </div>
    <!-- <p>
        Блог
    </p> -->
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
  .main {
    background-color: $black;
    width: 100%;
    &__page {
      display: flex;
      padding-top: 10px;
      flex-wrap: wrap;
      align-items: flex-start;

      @include container;

      .content {
        max-width: 900px;
        flex-grow: 1;

        &__main-columns {
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
          }
        }
      }
    }
    
  }
</style> 