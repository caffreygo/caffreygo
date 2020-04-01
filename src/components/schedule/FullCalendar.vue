<template>
  <FullCalendar
    defaultView="dayGridMonth"
    :plugins="calendarPlugins"
    :header="header"
    @dateClick="handleDateClick"
    :events="events"
    locale="zh-cn"
  />
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar // make the <FullCalendar> tag available
  },
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      calendarPlugins: [dayGridPlugin],
      header: {
        left: 'title',
        right: 'today prev,next'
      }
    }
  },
  methods: {
    handleDateClick (arg) {
      alert(arg.date)
      // if (confirm('您是否要在' + arg.dateStr + '添加一个新的事件?')) {
      //   this.calendarEvents.push({
      //     // add new event data
      //     title: '新的事件',
      //     start: arg.date,
      //     allDay: arg.allDay
      //   });
      // }
    },
    handleEventClick (info) {
      console.log(info)
    }
  }
}
</script>

<style lang="scss">
@import '~@fullcalendar/core/main.css';
// @import '~@fullcalendar/daygrid/main.css';
</style>
