<template>
  <div id="app">
    <v-app id="inspire">
      <router-view name="header"></router-view>
      <router-view></router-view>
      <router-view name="footer"></router-view>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>
