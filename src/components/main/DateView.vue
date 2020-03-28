<template>
  <div>
    date页面
  </div>
</template>

<script>
export default {
  name: 'DateView',
  data() {
    return {};
  },
  methods: {
    test() {
      this.axios
        .get('/test')
        .then(res => {
          if (res.data.success) {
            this.$message.success(this.$t('login.successTips'));
          } else {
            this.$message.error(this.$t('login.failedTips'));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped></style>
