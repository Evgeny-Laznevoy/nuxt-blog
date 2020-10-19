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
            <nuxt-link class="menu__list-link" to="/developments">Разработки</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/blog">Блог</nuxt-link>
          </li>
          <li class="menu__list-item">
            <nuxt-link class="menu__list-link" to="/contacts">Контакты</nuxt-link>
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

.header {
  display: flex;
  color: #ffffff;
  background-color: $black;
  height: 60px;
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;

  &__container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @include container;

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

          &:hover {
            color: #c4c4c4;
          }

          &.nuxt-link-exact-active {
            color: #a8a8a8;
          }
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
        color: #df3333;
        cursor: pointer;

        .tel {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
