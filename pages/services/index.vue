<template>
  <div>
    {{data}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  head() {
    return {
      title: 'Услуги',
      meta: [{ hid: 'description', name: 'description', content: 'Услуги' }],
    }
  },
  layout: 'main',
  async asyncData() {
    const { data } = await axios.get(`http://localhost:3000/api/services/`)
    return { data }
  },
}
</script>

<style lang="scss" scoped></style>
