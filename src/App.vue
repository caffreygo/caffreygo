<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import "@/static/style/common.css";
import "@/static/style/custom.scss";

export default {
  name: "App"
};
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
