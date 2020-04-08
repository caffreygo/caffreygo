<template>
  <div class="header clearfix">
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="flex-container"
        mode="horizontal"
        :router="true"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="schedule">
          <template slot="title">{{ $t("schedule") }}</template>
          <el-menu-item index="schedul  e/my">
            {{ $t("schedule.my") }}</el-menu-item
          >
          <el-menu-item index="schedule/today">
            {{ $t("schedule.today") }}
          </el-menu-item>
          <el-menu-item index="schedule/overview">
            {{ $t("schedule.overview") }}
          </el-menu-item>
          <el-menu-item index="schedule/all">
            {{ $t("schedule.all") }}
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="reserve">{{ $t("reserve") }}</el-menu-item>
        <el-menu-item index="document">{{ $t("document") }}</el-menu-item>
        <el-menu-item index="forum"> {{ $t("forum") }}</el-menu-item>
        <el-menu-item index="food">{{ $t("food") }}</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data () {
    return {
      activeIndex: 'schedule/my'
    }
  },
  computed: {
    path () {
      return this.$route
    }
  },
  created () {
    console.log(this.path)
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #545c64;
  .menu {
    float: right;
  }
}
</style>
