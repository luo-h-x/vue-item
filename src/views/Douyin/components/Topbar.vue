<template>
  <div class="top-content">
    <div class="t-item">直播</div>
    <div class="t-item"></div>
    <div class="t-item active">关注</div>
    <div class="t-item">推荐</div>
    <div class="t-item"></div>
    <div class="t-item">搜索</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-content {
  display: flex;
  // justify-content: center;
  // align-items: center;
  .t-item {
    flex: 1;
    text-align: center;
    line-height: 50px;
    color: #fff;
    position: relative;
    cursor: pointer;
  }
  .active {
      &::after {
      display: block;
      content: '';
      height: 4px;
      background-color: #61baf1;
      width: 50%;
      font-size: 18px;
      //居中
      position: absolute;
      left: 50%;
      bottom: 0;
      transform:translate(-50%);
      // margin:0 auto;
      // margin-top: 10px;
      animation: highLine 0.3s linear forwards;
      }
    }
}
</style>
