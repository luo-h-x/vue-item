<template>
  <div class="comment-page">
    <div class="comment-top">
      <span class="comment-count">333条评论</span>
      <i class="comment-close">X</i>
    </div>
    <div class="comment-list">
      <Comments/>
    </div>
    <div class="comment-keep">
      <input class="comment-input" type="text"   placeholder="留下你的精彩评论吧">
      <i class="comment-look">@</i>
    </div>
  </div>
</template>

<script>
import Comments from './Comments'
export default {
  components: { Comments }
}
</script>

<style lang="scss" scoped>
.comment-page {
  height: 100%;
  width: 100%;
  .comment-top {
    display: flex;
    align-items: center;
    .comment-count {
      flex: 1;
      text-align: center;
    }
    .comment-close {
      color: #ccc;
      margin-right: 10px;
    }
  }
  .comment-keep {
    // height: 40px;
    // width: 100%;
    display: flex;
    align-items: center;
    .comment-input {
      background:none;
      outline:none;
      border:none;
      flex: 1;
    }
    .comment-look {
      color: #ccc;
      margin-right: 10px;
    }
  }
}

</style>
