<template>
  <div id="app">
    <SideBar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view />
  </div>
</template>

<script>
import '@/common/style/common.scss'
import '@/common/style/custom.scss'
import HelloWorld from 'components/HelloWorld.vue'
import SideBar from 'components/SideBar.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SideBar
  }
}
</script>

<style>
</style>
