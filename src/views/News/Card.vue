<template>
  <div class="cartContent"  >
    <div  class="card-box" v-for="(item, index) in cardData" :key="index" @click="cardSkip(item.id)">
      <div  class="pic-box">
          <div  class="pic">
            <img :src="item.images[0]" >
          </div>
      </div>
      <div  class="info">
          <a
          :title="item.title"
          target="_blank"
          class="title">
            {{item.title}}
          </a>
          <div  class="desc">
            {{item.hint}}
          </div>
      </div>
    </div>
    <!-- <p id="loading">加载中...</p> -->
  </div>
</template>

<script>
export default {
  props: ['cardData', 'cardSkip']
}
</script>

<style lang="scss" scoped>
.cartContent {
  // overflow: auto;
  &>p {
    text-align: center;
    color: rgba(40, 40, 245, 0.5);
  }
}
.card-box {
    // display: -ms-flexbox;
    padding: 6px;
    display: flex;
    cursor: pointer;
    .pic-box{
      position: relative;
      width: 141px;
      height: 141px;
      .pic{
        overflow: hidden;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .info {
      margin-left: 10px;
      // -ms-flex: 1;
      flex: 1;
      font-size: 0;
      .title {
        cursor: pointer;
        height: 36px;
        line-height: 18px;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        // -webkit-line-clamp: 2;
        color: #222;
        &:hover {
          color: #00a1d6;
        }
      }
      .desc {
        display: inline-block;
        height: 16px;
        width: 100%;
        color: #999;
        font-size: 12px;
      }
    }
  }
</style>
