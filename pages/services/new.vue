<template>
  <div class="line">
    <form action="">
      <input type="text" placeholder="h1" v-model="h1" />
      <input type="text" placeholder="title" v-model="title" />
      <input type="text" placeholder="description" v-model="description" />
      <input type="text" placeholder="url" v-model="url" />
      <input type="text" placeholder="content" v-model="content" />

      <button @click.prevent="newServices">Опубликовать</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: 'Создать Услугу',
      meta: [
        { hid: 'description', name: 'description', content: 'Создать Услугу' }
      ]
    }
  },
  layout: 'main',
  data() {
    return {
      h1: '',
      title: '',
      description: '',
      url: '',
      content: ''
    }
  },
  methods: {
    newServices() {
      let fornData = {
        h1: this.h1,
        title: this.title,
        description: this.description,
        url: this.url,
        content: this.content
      }
      axios.post('http://localhost:3000/api/services', fornData)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  border: 1px solid gray;
}
</style>
