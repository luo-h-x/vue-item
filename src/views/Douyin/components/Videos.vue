<template>
  <div class="videos">
    <video-player
    class="video-player vjs-custom-skin"
    ref="videoPlayer"
    :playsinline="true"
    :options="playerOptions">
    </video-player>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'
export default {
  props: ['videos', 'index'],
  components: { videoPlayer },
  data () {
    return {
      playerOptions: {
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: true,
        preload: 'auto',
        fluid: false, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。手机上有问题
        sources: [
          {
            src: this.videos.video.play_addr.url_list[0], // 路径
            type: 'video/mp4' // 类型
          }
        ],
        // poster: "../../static/images/test.jpg", //你的封面地址
        width: document.documentElement.clientWidth,
        controlBar: false
      },
      playing: false
    }
  },
  created () {
    this.aoutoPlay()
    this.switchPlay()
  },
  methods: {
    // 暂停、播放
    onPlayerPlay (play) {
      this.playBtn(this.index)
      if (this.playing) {
        this.$refs.videoPlayer.player.pause()
        this.playing = false
      } else {
        this.$refs.videoPlayer.player.play()
        this.playing = true
      }
    },
    // 播放
    play () {
      this.playBtn(this.index)
      this.$refs.videoPlayer.player.play()
      this.playing = true
    },
    // 暂停
    pause () {
      this.playBtn(this.index)
      this.$refs.videoPlayer.player.pause()
      this.playing = false
    },
    // 第一个自动播放
    aoutoPlay () {
      if (this.index === 0) {
        this.playerOptions.autoplay = true
      }
    },
    switchPlay () {
      this.$emit('isplay', this.playing)
    },
    // 播放按钮
    playBtn (index) {
      let playbtn = document.getElementsByClassName('vjs-big-play-button')
      if (!this.playing) {
        playbtn[index].style.display = 'none'
      } else {
        playbtn[index].style.display = 'block'
      }
      this.switchPlay()
    }
  }
}
</script>

<style lang="scss" >
.videos {
  height: 100%;
  position: relative;
  .video-player {
    height: 100%;
    width: 100%;
  }
  .video-js {
    width: 100%;
    height: 100%;
    .vjs-tech {
      display: block;
      object-fit: fill;
      height: 100%;
    }
    .vjs-big-play-button {
      // display: block;
      background: rgba(0,0,0,0.4);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: none;
    }
  }
}
</style>
