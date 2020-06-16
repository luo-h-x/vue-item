<template>
  <div class="comments">
    <div class="user-pic">
      <img src="../../.././assets/cat.gif" alt="">
    </div>
    <div class="item-info">
      <div class="comment-info">
        <span class="info-name">高度近视</span>
        <span class="info-content">各位把手机倒过来看</span>
        <span class="info-time">6-1</span>
      </div>
      <div class="digg">
        <span class="digg-kin">爱心</span>
        <span class="digg-count">1.1w</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subComment',
  data () {
    return {
      count: [
        { num: 1 },
        { num: 2 },
        { num: 3, children: [4, 5] }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  display: flex;
  .user-pic {
    margin: 10px;
    img {
      width: 33px;
      height: 33px;
      border-radius: 50%;
    }
  }
  .item-info {
    display: flex;
    width: 100%;
    .comment-info {
      flex: 1;
      margin: 10px;
      display: flex;
      flex-direction: column;
      .info-name {
        font-size: 16px;
        line-height: 25px;
        color: rgb(71, 68, 68);
      }
      .info-content {
        line-height: 25px;
        color: black;
        font-size: 18px;
      }
      .info-time {
        line-height: 25px;
        color: #ccc;
        font-size: 16px;
      }
    }
    .digg {
      margin: 10px;
      display: flex;
      flex-direction: column;
      .digg-count {
        color: #ccc;
      }
    }
  }
}

</style>
