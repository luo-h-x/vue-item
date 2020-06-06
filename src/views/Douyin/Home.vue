<template>
  <div  class="douyin-home">
    <div class="topbar">
      <Topbar/>
    </div>
    <div class="rightbar">
      <Rightbar/>
    </div>
    <div class="videoList">
      <video-list/>
    </div>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Rightbar from './components/Rightbar'
import VideoList from './components/VideoList'
export default {
  components: { Topbar, Rightbar, VideoList }
}
</script>

<style lang="scss" scoped>
.douyin-home {
  position: relative;
  .topbar {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
  }
  .rightbar {
    position: absolute;
    right: 10px;
    bottom: 100px;
    z-index: 10;
  }
  .videoList {
    width: 100%;
    height: 100%;
  }
}
</style>
