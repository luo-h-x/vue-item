<template>
  <div class="douyin-page">
    <div class="topbar">
      <Topbar/>
    </div>
    <div class="videoList">
      <video-list/>
    </div>
    <div class="bottombar">
      <Bottombar/>
    </div>
  </div>
</template>

<script>
import Bottombar from './components/Bottombar'
import Topbar from './components/Topbar'
import VideoList from './components/VideoList'
export default {
  name: 'dy',
  components: { Bottombar, Topbar, VideoList }
}
</script>

<style lang="scss" scoped>
.douyin-page{
  width: 375px;
  // height: 100%;
  height: 662px;
  margin: 0 auto;
  position: relative;
  //去除底部多余部分
  // font-size: 0;
  .bottombar {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 11;
    // background: #000;
  }
  .topbar {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 11;
  }
  .videoList {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
}
@media screen and (max-width: 750px) {
  .douyin-page {
    width: 100%;
    height: 100%;
    .bottombar {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 10;
      // background: #000;
    }
  }
}
</style>
