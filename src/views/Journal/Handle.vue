<template>
  <div class="handle-page">
    <div class="header">
      <router-link :to="{ path: '/Journal/Home', query: { time: this.$route.query.time }}">返回</router-link>
      <span class="title">日志管理</span>
    </div>
    <div class="content">
      <span>日志标题：</span>
      <input type="text" class="text" v-model="text">
      <span>日志内容：</span>
      <textarea class="textarea" v-model="textarea"></textarea>
      <div class="edit">
        <a class="submit" @click="addContent" v-if="!this.$route.query.id">新增</a>
        <a class="submit" @click="deleteContent" v-else-if="this.$route.query.id">删除</a>
        <a class="submit" @click="editContent" v-show="this.$route.query.id">修改</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: null,
      textarea: null
    }
  },
  created () {
    let id = this.$route.query.id
    let time = this.$route.query.time
    if (id) {
      this.loadInfo(time, id)
    }
  },
  methods: {
    addContent () {
      let time = this.$route.query.time
      this.$message({
        message: '添加成功',
        type: 'success',
        duration: 500
      })
      this.$router.push({ path: '/Journal/Home', query: { time: time } })
      this.setLocalInfo(time, this.text, this.textarea)
    },
    deleteContent () {
      let time = this.$route.query.time
      let id = this.$route.query.id
      this.$message({
        message: '删除成功',
        type: 'success',
        duration: 500
      })
      this.$router.push({ path: '/Journal/Home', query: { time: time } })
      this.deleteLocalInfo(time, id)
    },
    editContent () {
      let id = this.$route.query.id
      let time = this.$route.query.time
      this.editLocalInfo(time, id)
      this.$message({
        message: '修改成功',
        type: 'success',
        duration: 500
      })
      this.$router.push({ path: '/Journal/Home', query: { time: time } })
    },
    setLocalInfo (time, title, content) {
      let data = JSON.parse(localStorage.getItem('record') || '{}')
      let key = Object.keys(data)
      if (!key.includes(time.toString())) {
        data[time] = []
      }
      let arr = data[time]
      arr.push({
        id: arr.length === 0 ? 1 : parseInt((arr[arr.length - 1].id) + 1),
        title: title,
        content: content,
        time: this.getMinutes()
      })
      localStorage.setItem('record', JSON.stringify(data))
    },
    getMinutes () {
      let date = new Date()
      let h = date.getHours()
      let m = date.getMinutes()
      return `${h}:${m}`
    },
    deleteLocalInfo (time, id) {
      let data = JSON.parse(localStorage.getItem('record') || '{}')
      let key = Object.keys(data)
      if (!key.includes(time.toString())) return false
      let arr = data[time]
      arr = arr.filter(item => {
        return parseInt(item.id) !== parseInt(id)
      })
      data[time] = arr
      localStorage.setItem('record', JSON.stringify(data))
    },
    editLocalInfo (time, id) {
      let data = JSON.parse(localStorage.getItem('record') || '{}')
      data[time].forEach(item => {
        if (parseInt(item.id) === parseInt(id)) {
          item.title = this.text
          item.content = this.textarea
        }
      })
      localStorage.setItem('record', JSON.stringify(data))
    },
    loadInfo (time, id) {
      let data = JSON.parse(localStorage.getItem('record') || '{}')
      data = data[time].find(item => {
        return parseInt(item.id) === parseInt(id)
      })
      this.text = data.title
      this.textarea = data.content
    }
  }
}
</script>

<style lang="scss" scoped>
.handle-page {
  width: 375px;
  // height: 100%;
  height: 662px;
  margin: 0 auto;
  background: #f9f9f9;
  .header {
    position: relative;
    height: 1rem;
    line-height: 1rem;
    color: #fff;
    background: #0fc37c;
    a {
      color: #fff;
    }
    .title {
      position: absolute;
      left: 50%;
      transform: translate(-50%);
    }
  }
  .content {
    padding: 0.3rem;
    span {
      line-height: 1rem;
    }
    .text {
      box-sizing: border-box;
      padding: 0 .1rem;
      width: 100%;
      height: .6rem;
      line-height: .6rem;
      border: .02rem solid #ddd;
    }
    .textarea {
      box-sizing: border-box;
      padding: 0 .1rem;
      width: 100%;
      height: 1.6rem;
      line-height: .6rem;
      border: .02rem solid #ddd;
    }
    .submit {
      display: block;
      width: 20%;
      height: .6rem;
      line-height: .6rem;
      text-align: center;
      font-size: .32rem;
      color: #fff;
      background: #0fc37c;
      cursor: pointer;
      margin: 0.2rem 0;
    }
  }
}
@media screen and (max-width: 750px) {
  .handle-page {
    width: 100%;
    height: 100%;
  }
}
</style>
