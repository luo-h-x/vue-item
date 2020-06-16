<template>
  <div class="page-news"  >
    <Banner :bannerData="bannerData" :bannerSkip="skip"/>
    <Card  :cardData="cardData" :cardSkip="skip"/>
    <p id="loading">加载中...</p>
  </div>
</template>

<script>
import api from '../../api/news'
import Banner from './Banner'
import Card from './Card'
export default {
  name: 'news',
  components: { Banner, Card },
  data () {
    return {
      cardData: null,
      lastTime: null,
      bannerData: null,
      loading: true
    }
  },
  // beforeMount () {
  //   window.addEventListener('scroll', this.loadMore, true)
  // },
  // beforeDestroy () {
  //   window.removeEventListener('scroll', this.loadMore, true)
  // },
  activated () {
    window.addEventListener('scroll', this.loadMore, true)
    this.setScrollTop()
  },
  deactivated () {
    window.removeEventListener('scroll', this.loadMore, true)
    this.getScrollTop()
  },
  async created () {
    const result = await api.last()
    this.cardData = result.data.stories
    this.lastTime = result.data.date
    this.bannerData = result.data.top_stories
  },
  methods: {
    load () {
      const timer = setTimeout(async () => {
        const result = await api.before(this.lastTime)
        this.cardData = this.cardData.concat(result.data.stories)
        this.lastTime = result.data.date
        this.loading = true
        clearTimeout(timer)
      }, 500)
    },
    skip (id) {
      this.$router.push(`/News/Detail/${id}`)
    },
    // 加载更多
    loadMore () {
      const top = document.getElementById('loading').getBoundingClientRect().top
      if (top < window.innerHeight && this.loading) {
        this.loading = false
        this.load()
      }
    },
    getScrollTop () {
      const main = document.getElementsByClassName('el-main')[0]
      if (main) {
        const top = main.scrollTop
        sessionStorage.setItem('scrolltop', top)
      }
    },
    setScrollTop () {
      const main = document.getElementsByClassName('el-main')[0]
      if (main) {
        main.scrollTop = sessionStorage.getItem('scrolltop', top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-news {
  background-color: #f9f9f9;
  // padding: 20px;
  margin: 0 auto;
  width: 375px;
  height: 100%;
  // overflow: auto;
  &>p {
    text-align: center;
    color: rgba(40, 40, 245, 0.5);
  }
  #loading {
    margin: 0;
  }
}
@media screen and (max-width: 750px) {
  .page-news {
    width: 100%;
  }
}
</style>
