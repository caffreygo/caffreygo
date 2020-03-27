<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import '@/common/style/common.css'
import '@/common/style/custom.scss'
import Header from 'components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">

#app {
  height: 100%;
}
</style>
