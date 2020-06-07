<template>
  <div class="daily">
    <div class="dailyHeader" >
      <div class="dailyHeader-image">
        <img :src="detailData.image" v-if="detailData!=null" alt="头图">
        <div class="css-6iuo8x"></div>
      </div>
      <p class="dailyHeader-title" style="font-size: 22px;" v-if="detailData!=null">{{detailData.title}}</p>
    </div>
    <div class="dailyContent" v-if="detailData!=null" v-html="detailData.body">
    </div>
  </div>
</template>

<script>
import api from '../../api/news'
export default {
  data () {
    return {
      detailData: null
    }
  },
  async created () {
    const result = await api.detail(this.$route.params.id)
    this.detailData = result.data
    // console.log(this.detailData)
  }
}
</script>

<style lang="scss" scoped>
.daily {
  background-color: #f9f9f9;
  margin: 0 auto;
  width: 375px;
  height: 100%;
  .dailyHeader {
    background-color: #f9f9f9;
    margin: 0 auto;
    width: 100%;
    max-height: 640px;
    position: relative;
    .dailyHeader-image {
      width: 100%;
      top: 0;
      position: relative;
      height: 375px;
      max-height: 640px;
      img {
        -o-object-fit: cover;
        object-fit: cover;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
      }
      div {
        position: absolute;
        bottom: 0;
        height: 50%;
        width: 100%;
      }
      .css-6iuo8x {
        background-image: linear-gradient(0,rgb(80, 102, 85),rgba(110, 129, 122, 0.9),rgba(132, 148, 142, 0));
      }
    }
    .dailyHeader-title {
      position: absolute;
      left: 18px;
      right: 18px;
      bottom: 36px;
      color: #fff;
      line-height: 28px;
      font-weight: 600;
      font-synthesis: style;
    }
  }
}

@media screen and (max-width: 750px) {
  .daily {
    width: 100%;
    .dailyHeader-image {
      height: 100vw !important;
    }
  }
}
</style>

<style lang="scss">
  .dailyContent {
    .question-title {
      font-size: 20px;
      color: #1a1a1a;
      line-height: 1.5;
      // margin-bottom: 0;
      // padding-top: 40px;
      font-weight: 600;
      font-synthesis: style;
    }
    .meta {
      display: flex;
      align-items: center;
      img {
        height: 40px;
        width: 40px;
      }
      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #646464;
      }
    }
    .ZhihuDaily-AuthorLine {
      padding-top: 20px;
      font-size: 14px;
    }
    .content {
      color: #444;
      margin: 1.4em 0;
      img {
        max-width: 100%;
        border-radius: 2px;
        margin: .6em auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-filter: brightness(.95);
        filter: brightness(.95);
      }
    }
    .view-more a {
      width: 100%;
      height: 44px;
      border-radius: 22px;
      background: #03a9f4;
      font-size: 14px;
      line-height: 18px;
      color: #fff;
      text-align: center;
      line-height: 44px;
      display: block;
      font-weight: 600;
      font-synthesis: style;
    }
  }
</style>
