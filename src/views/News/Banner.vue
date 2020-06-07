<template>
  <el-carousel :interval="5000" arrow="never">
    <el-carousel-item v-for="item in bannerData" :key="item.id" @click.native="bannerSkip(item.id)">
      <img class="img" :src="item.image" alt="">
      <div class="info">
        <h3>{{item.title}}</h3>
        <span>{{item.hint}}</span>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ['bannerData', 'bannerSkip']
}
</script>

<style lang="scss" scoped>
.img {
  display: block;
  width: 100%;
  height: 100%;
}
.info {
  position: relative;
  h3 {
    position: absolute;
    left: 20px;
    bottom: 40px;
    color: #fff;
  }
  span {
    position: absolute;
    left: 20px;
    bottom: 20px;
    color: #fff;
  }
}

</style>
<style >
  .el-carousel__button {
    width: 20px;
  }
</style>
