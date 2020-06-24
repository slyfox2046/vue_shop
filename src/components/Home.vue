<template>
  <div>

    <el-button type="info" @click="logout">
      退出
    </el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },

  methods: {
    logout() {
      window.localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped></style>
