<template>
  <div class="sidebar-container" :class="classObj">
    <el-scrollbar wrap-class="scrollbar-wrapper" >
      <el-menu :default-active="title"
      background-color="#304156"
      text-color="#fffffc"
      :collapse="!this.$store.state.show"
      >
        <div v-for="(value, index) in sidebar" :key="index">
          <el-menu-item
            v-if="!value.children"
            :index="value.title"
            @click="open(value.path)">
            <i :class="value.icon"></i>
            <span :class="hide"  >{{value.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="value.title">
            <template slot="title">
              <i :class="value.icon"></i>
              <span :class="hide">{{value.title}}</span>
            </template>
            <div v-for="(item, len) in value.children" :key="len">
              <el-menu-item
              v-if="!item.children"
              :index="item.title"
              @click="open(item.path)">
                {{item.title}}
              </el-menu-item>
              <el-submenu v-else :index="item.title">
                <template slot="title">
                  <span >{{item.title}}</span>
                </template>
                <el-menu-item
                  v-for="(item2, len2) in item.children"
                  :key="len2"
                  :index="item2.title"
                  @click="open(item2.path)">
                    {{item2.title}}
                </el-menu-item>
              </el-submenu>
            </div>
          </el-submenu>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      sidebar: [
        { title: '首页', icon: 'el-icon-menu', path: '/' },
        {
          title: 'Element UI',
          icon: 'el-icon-s-data',
          children:
          [
            { title: 'From表单', icon: 'el-icon-s-order', path: '/Element/From' },
            { title: 'Icon图标', icon: 'el-icon-document', path: '/Element/Icon' },
            {
              title: '数据',
              icon: 'el-icon-s-data',
              children:
              [
                { title: 'Tree树形控件', icon: 'el-icon-error', path: '/Element/Data/Tree' },
                { title: 'Table表格', icon: 'el-icon-error', path: '/Element/Data/Table' }
              ]
            }
          ]
        },
        { title: '知乎日报', icon: 'el-icon-s-comment', path: '/News' },
        { title: '抖音', icon: 'el-icon-water-cup', path: '/Douyin' },
        { title: '钉钉日志', icon: 'el-icon-s-order', path: '/Journal' },
        { title: '错误页面', icon: 'el-icon-error', path: '/error/404' }
      ],
      title: null
    }
  },
  computed: {
    ...mapState(['show', 'ismobile']),
    hide () {
      return { hide: !this.ismobile && !this.show }
    },
    classObj () {
      return {
        hideSidebar: !this.show && this.ismobile,
        openSidebar: this.show && this.ismobile,
        mobile: this.ismobile
      }
    }
  },
  watch: {
    $route () {
      this.getTitle()
    }
  },
  created () {
    this.getTitle()
  },
  methods: {
    open (path) {
      if (this.$store.state.ismobile) {
        this.$store.commit('close')
      }
      this.$router.push({
        path,
        query: {
          t: +new Date()
        }
      })
    },
    getTitle () {
      this.title = this.$route.meta.title
    }
  }
}
</script>

<style >
  .el-scrollbar__wrap {
    overflow-x: hidden !important;
  }
</style>

<style lang="scss" scoped>
.hide {
  visibility: hidden;
  // z-index: -99;
  // display: none;
}
.mobile {
    position: fixed;
    z-index: 100;
    height: 100%;
  }
.hideSidebar {
  transition: width .3s;
  width: 0 !important;
}
.openSidebar {
  transition: width .3s;
  width: 200px !important;
}
.sidebar-container {
  height: 100%;
  background: #304156;
  .el-scrollbar {
    height: 100%;
    .el-menu:not(.el-menu--collapse) {
      width: 200px;
    }
    a {
      color:#fffffc;
    }
  }
  .el-menu {
    border: none;
  }
}
</style>
