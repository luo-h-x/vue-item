<template>
  <div class="journal-page">
    <div ref="calendar" class="calendar">
      <Calendar
      @changeMonth="changeMonth"
      @choseDay="choseDay"
      :markDate="mark"/>
    </div>
    <div class="record" ref="record">
      <div class="tip" v-if="list.length === 0">暂无数据</div>
      <div class="infoBox" v-else>
        <ul class="list">
          <li class="item" v-for="item in list" :key="item.id">
            <router-link :to="{path: '/Journal/Handle', query: {time: mark[0], id: item.id}}">
              <span>{{item.time}}</span>
              <div class="con">
                <h3>{{item.title}}</h3>
                <p>{{item.content}}</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-link :to="{path:'/Journal/Handle', query:{time: mark}}" class="addbtn"/>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component'
export default {
  components: { Calendar },
  data () {
    return {
      mark: [],
      list: []
    }
  },
  created () {
    this.mark = [this.formatDate(new Date())]
    let time = this.$route.query.time
    if (time) {
      this.mark = [decodeURIComponent(time)]
    }
    this.initData()
  },
  mounted () {
    this.$nextTick(() => {
      this.computeHeight()
      window.addEventListener('resize', this.computeHeight)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.computeHeight)
  },
  methods: {
    computeHeight () {
      let timer = setTimeout(() => {
        clearTimeout(timer)
        this.$refs.record.style.height =
        document.documentElement.clientHeight - 60 -
        this.$refs.calendar.offsetHeight + 'px'
      }, 13)
    },
    changeMonth () {
      this.computeHeight()
    },
    formatDate (time) {
      let y = time.getFullYear()
      let m = time.getMonth() + 1
      let d = time.getDate()
      m = m < 10 ? '0' + m : m
      d = d < 10 ? '0' + d : d
      return `${y}/${m}/${d}`
    },
    choseDay (time) {
      time = time.split('/').map(item => {
        if (item.length < 2) {
          return '0' + item
        } else {
          return item
        }
      }).join('/')
      this.mark = [time]
      this.initData()
    },
    getLocalInfo (time, id) {
      let data = JSON.parse(localStorage.getItem('record') || '{}')
      let key = Object.keys(data)
      if (!key.includes(time.toString())) return null
      data = data[time]
      if (typeof id !== 'undefined') {
        data = data.find(item => {
          return parseInt(item.id) === parseInt(id)
        })
      }
      return data
    },
    initData () {
      let time = this.mark[0]
      this.list = this.getLocalInfo(time) || []
    }
  }
}
</script>

<style>
.wh_content_all .wh_isMark {
  background: green!important;
}
</style>
<style lang="scss" scoped>
.journal-page {
  width: 375px;
  // height: 100%;
  height: 662px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .record {
    box-sizing: border-box;
    padding: .2rem;
    overflow: auto;
    background: #f9f9f9;
    .list {
      margin: 0;
      padding: 0;
      .item {
        margin-top: 0.1rem;
        list-style: none;
        border-bottom: 1px dashed #ccc;
        a {
          display: block;
          color: #555;
        }
        .con {
          h3 {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin: 0.2rem 0;
          }
          p {
            margin: 0.2rem 0;
          }
        }
      }
    }
  }
  .addbtn {
    position: absolute;
    right: .2rem;
    bottom: .5rem;
    z-index: 10;
    width: 1rem;
    height: 1rem;
    background: url(../.././assets/addbtn.svg) no-repeat;
    background-size: 100% 100%;
  }
}
@media screen and (max-width: 750px) {
  .journal-page {
    width: 100%;
    height: 100%;
  }
}
</style>
