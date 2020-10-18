<template>
  <div class="header">
    <div class="header__container container">
      <nav class="menu">
        <ul class="menu__list">
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/">Главная</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/services">Услуги</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/developments"
              >Разработки</nuxt-link
            >
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/blog">Блог</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/contacts"
              >Контакты</nuxt-link
            >
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/wiki">Wiki</nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="contacts">
        <div class="contacts__name">Evgeny Laznevoy</div>
        <div class="contacts__communication">
          <span class="tel">+79825547064</span>
          <span class="mail">laznevoy@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'текстовый тайтл',
      meta: [
        {
          hid: 'describtion',
          name: 'describtion',
          content: 'text disc',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding: 0 10px;
  margin: 0 auto;
}

.header {
  display: flex;
  color: #ffffff;
  background-color: #2b2a29;
  height: 60px;
  line-height: 1.5;

  &__container {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

    .menu {
      display: flex;
      height: 100%;
      align-items: center;
      color: #ffffff;
      &__list {
        display: flex;
        height: 100%;
        align-items: center;

        &-item {
            padding: 10px;
        }

        &-link {
            text-decoration: none;
            color: #ffffff;
        }
      }
    }

    .contacts {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      box-sizing: border-box;

      &__name {
        display: flex;
        justify-content: center;
        // margin: auto auto;
      }
      &__communication {
        display: flex;
        margin: auto;
        justify-content: space-between;

        .tel {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
