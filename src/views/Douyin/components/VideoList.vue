<template>
  <div class="video-page">
    <swiper ref="mySwiper" :options="swiperOption">
      <!-- 幻灯内容 -->
      <swiper-slide v-for="(item, index) in videoList" :key="index">
        <!-- <video
        class="video-player"
        :src="item.video.play_addr.url_list[0]"
        preload="auto"
        autoplay="autoplay"
        type="video/mp4"
        width="100%"
        height="100%"
        webkit-playsinline="true"
        playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="portraint"
        onerror="window.VIDEO_FAILED=1">
        </video> -->
        <div  class="videosbar">
          <videos ref="videos" :videos="item" :index="index" @isplay="isplay" />
        </div>
        <div class="rightbar">
          <Rightbar :videoInfo="item" @rcomment="openComment"/>
        </div>
        <!-- <div  class="commentbar" v-if="open">
          <CommentList @ccomment="closeComment" />
        </div> -->
        <div  class="descbar">
          <p class="descbar-user">@{{item.author.nickname}}</p>
          <p class="descbar-desc">{{item.share_info.share_title}}</p>
          <div class="descbar-music">
            <div class="music-name">{{item.music.title}}</div>
            <div class="music-name">{{item.music.title}}</div>
            <div class="music-name">{{item.music.title}}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Rightbar from './Rightbar'
import api from '../../../api/douyin'
import Videos from './Videos'
// import CommentList from './CommentList'
export default {
  name: 'videoList',
  components: { Videos, Rightbar, Swiper, SwiperSlide },
  created () {
    const arr = []
    this.videoItems.forEach(async (item, index) => {
      const result = await api.info(item.item_ids, item.dytk)
      arr.push(result.data.item_list[0])
      this.videoList = arr
      // 解决__ob__: Observer问题
      const a = JSON.parse(JSON.stringify(this.videoList))
      this.videoList = a
    })
  },
  activated () {
    // 进入播放
    if (this.playing) {
      this.playAction(this.page - 1)
    }
  },
  deactivated () {
    // 退出暂停
    if (!this.playing) {
      this.playAction(this.page - 1)
    }
  },
  data () {
    return {
      swiperOption: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true, // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1,
        mousewheel: true,
        mousewheelControl: true,
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0,
        observeParents: true,
        lazyLoadingInPrevNext: true,
        on: {
          tap: () => {
            this.playAction(this.page - 1)
          },
          slideNextTransitionStart: () => {
            this.page += 1
            this.nextVideo(this.page - 1)
          },
          slidePrevTransitionStart: () => {
            if (this.page > 1) {
              this.page -= 1
              this.prevVideo(this.page - 1)
            }
          }
        }
      },
      page: 1,
      videoItems: [
        { item_ids: '6829318498288717068', dytk: '504643295e0d3ed5367048404bf8dcbff82a26ea2d6f99ca46b394d79349d5dc' },
        { item_ids: '6783252376078912783', dytk: 'c305fe9e5b3766b713594c02678d70b6b348c81674da209b9fae7a4812704662' },
        { item_ids: '6834704861838281987', dytk: '07fcaf99b85201a02e50312e62f308fdd2e276a99d86fc7e9f75617dd661a8f8' },
        { item_ids: '6830293933562531085', dytk: '938ecacfb2f189c9c4efb26d5ae90093738b45a32dc22be7c14f9a26b2081950' },
        { item_ids: '6834048170176040195', dytk: '67eb30d3ec5031e8c0045012d33d20aacee3c601700532caf173c6dacd4e8d45' }
      ],
      videoList: null,
      open: false,
      playing: false
    }
  },
  methods: {
    // 暂停 播放
    playAction (index) {
      // this.playing = !this.playing
      this.$refs.videos[index].onPlayerPlay()
    },
    // 下滑
    nextVideo (index) {
      this.$refs.videos[index - 1].pause()
      this.$refs.videos[index].play()
    },
    // 上滑
    prevVideo (index) {
      this.$refs.videos[index + 1].pause()
      this.$refs.videos[index].play()
    },
    // 关闭评论
    closeComment (play) {
      this.open = play
    },
    // 打开评论
    openComment (play) {
      this.open = play
    },
    isplay (play) {
      this.playing = play
    }
  }
}
</script>

<style lang="scss" scoped>
// .video-player {
//   display: block;
//   object-fit: fill;
// }
.video-page {
  background: #000;
  height: 100%;
}
.swiper-slide {
  position: relative;
  height: 100%;
  .videosbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
  }
  .rightbar {
    position: absolute;
    right: 10px;
    bottom: 60px;
    z-index: 20;
  }
  .commentbar {
    width: 100%;
    height:500px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 20;
    background: #fff;
    border-radius:3% 3% 0 0 ;
    // padding: 10px 10px;
    box-sizing: border-box;
  }
  .descbar {
    position: absolute;
    left: 10px;
    bottom: 60px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    .descbar-user {
      color: #fff;
      line-height: 30px;
      margin: 0;
    }
    .descbar-desc {
      color: #fff;
      line-height: 30px;
      margin: 0;
      max-width: 90%;
    }
    .descbar-music {
      color: #fff;
      line-height: 30px;
      margin: 0;
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      .music-name {
        display: inline-block;
        animation: 5s fontscroll linear infinite normal ;
      }
    }
  }
}
@keyframes fontscroll {
  from {
    transform: translate(0)
  }
  to {
    transform: translate(-100%);
  }
}
</style>
