<template>
  <div class="header">
    <div class="menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#0087c2"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">日程</el-menu-item>
        <el-submenu index="2">
          <template slot="title">预约</template>
          <el-menu-item index="2-1">我的日程</el-menu-item>
          <el-menu-item index="2-2">今日待办</el-menu-item>
          <el-menu-item index="2-3">工作概况</el-menu-item>
          <el-menu-item index="2-4">所有事项</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">资料</el-menu-item>
        <el-menu-item index="4">论坛</el-menu-item>
        <el-menu-item index="5">点餐</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
