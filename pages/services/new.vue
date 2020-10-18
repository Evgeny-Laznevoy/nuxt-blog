<template>
  <div class="line">
    <input type="text" v-model="h1">
    <input type="text" v-model="title">
    <input type="text" v-model="description">
    <input type="text" v-model="url">
    <input type="text" v-model="content">

    <button @click.prevent="newServices"></button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: 'Создать Услугу',
      meta: [{ hid: 'description', name: 'description', content: 'Создать Услугу' }],
    }
  },
  layout: "main",
  data() {
    return {
      h1: "",
      title: "",
      description: "",
      url: "",
      content: "",
    }
  },
  methods: {
    newServices(){
      
    }
  }
}
</script>

<style lang="scss" scoped></style>
