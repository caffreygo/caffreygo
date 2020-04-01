<template>
  <div class="main-container">
    <el-row :gutter="10">
      <el-col :sm="24" :md="12">
        <FullCalendar :events="events" />
      </el-col>
      <el-col :sm="24" :md="12">
        <el-button type="primary" @click="test">Test</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 组件懒加载
const FullCalendar = () => import('./schedule/FullCalendar')
export default {
  name: 'ScheduleView',
  data () {
    return {
      activeName: 'second',
      events: [
        {
          id: 1,
          title: '出差',
          start: '2020-03-20',
          end: '2020-03-25'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    test () {
      var obj = {
        data: 'hello',
        msg: 'world'
      }
      var data = new FormData()
      data.append('data', obj.data)
      data.append('msg', obj.msg)
      this.axios
        .post('/test', data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      // this.axios
      //   .get('/test')
      //   .then(res => {
      //     if (res.data.success) {
      //       this.$message.success(this.$t('login.successTips'));
      //     } else {
      //       this.$message.error(this.$t('login.failedTips'));
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    }
  },
  components: {
    FullCalendar
  }
}
</script>

<style lang="scss" scoped>
</style>
