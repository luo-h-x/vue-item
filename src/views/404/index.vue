<template>
  <div>
    <div class="app-container">
      <el-row :gutter="20">
        <el-col :span="12">
          <img src="../../assets/gif_404.gif" alt="404" class="img-style">
        </el-col>
        <el-col :span="12">
          <div >
            <h1 class="color-main">OOPS!</h1>
            <h2 style="color: #606266">很抱歉，页面它不小心迷路了！</h2>
            <div style="color:#909399;font-size: 14px">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
            <el-button style="margin-top: 20px" type="primary" round @click="handleGoMain">返回首页</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    handleGoMain () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  .img-style {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  @media screen and (min-width: 320px) {
    .app-container {
      width: 90%;
      margin: 0 auto;
    }
    .el-col {
      width: 100%;
    }
  }
  @media screen and (min-width: 1048px) {
    .app-container {
      width: 90%;
      padding: 100px 0;
    }
    .el-col {
      width: 50%;
    }
  }
</style>
