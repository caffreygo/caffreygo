<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import '@/common/style/common.css';
import '@/common/style/custom.scss';

export default {
  name: 'App'
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
