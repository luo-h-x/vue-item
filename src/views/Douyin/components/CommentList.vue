<template>
    <div class="comment-page">
      <div class="comment-top">
        <span class="comment-count">333条评论</span>
        <span @click.stop="close" class="comment-close">X</span>
      </div>
      <div class="comment-list">
        <Comments  v-for="(item,index) in 7" :key="index"/>
      </div>
      <div class="comment-keep">
        <input class="comment-input" type="text"   placeholder="留下你的精彩评论吧">
        <span class="comment-look">@</span>
        <span class="comment-look">@</span>
      </div>
    </div>
</template>

<script>
import Comments from './Comments'
export default {
  components: { Comments },
  data () {
    return {
      isopen: false
    }
  },
  methods: {
    close () {
      this.$emit('ccomment', this.isopen)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-page {
  .comment-top {
    display: flex;
    align-items: center;
    margin-top: 10px;
    .comment-count {
      flex: 1;
      text-align: center;
    }
    .comment-close {
      color: #ccc;
      margin: 0 10px;
    }
  }
  .comment-keep {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
    .comment-input {
      background:none;
      outline:none;
      border:none;
      flex: 1;
      line-height: 40px;
      margin-left: 10px;
      font-size: 18px;
    }
    .comment-look {
      color: #ccc;
      margin-right: 10px;
    }
  }
  .comment-list {
    max-height: 400px;
    overflow: auto;
  }
}

</style>
