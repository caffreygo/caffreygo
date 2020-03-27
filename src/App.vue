<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import '@/common/style/common.scss'
import '@/common/style/custom.scss'
import SideBar from 'components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>

<style lang="scss" scoped>

#app {
  height: 100%;
  width: 64px;
  background-color: $menu-bg;
}
</style>
