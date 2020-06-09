<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <div v-if="ismobile && show" class="drawer-bg" @click="handleClickOutside" />
      <!-- <el-aside :class="classObj" > -->
        <Sidebar/>
      <!-- </el-aside> -->
      <el-container>
        <el-header style="padding: 0">
          <Navbar />
        </el-header>
        <el-main style=" padding: 0px">
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
export default {
  components: { Sidebar, Navbar, AppMain },
  beforeMount () {
    window.addEventListener('resize', this.resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.resizeHandler)
  },
  mounted () {
    const w = document.body.getBoundingClientRect().width
    if (w < 996) {
      this.isMobile()
      this.close()
    }
  },
  computed: {
    ...mapState(['show', 'ismobile']),
    classObj () {
      return {
        hideSidebar: !this.show && this.ismobile,
        openSidebar: this.show && this.ismobile,
        mobile: this.ismobile
      }
    }
  },
  methods: {
    ...mapMutations(['close', 'open', 'isMobile', 'removeMobile']),
    resizeHandler () {
      const w = document.body.getBoundingClientRect().width
      if (w > 996 && this.ismobile) {
        this.removeMobile()
        // this.open()
      }
      if (w < 996) {
        this.isMobile()
        this.close()
      }
    },
    handleClickOutside () {
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  position: relative;

  .el-aside {
  transition: width .5s;
  }

  .drawer-bg {
    background: #000;
    opacity: .3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 99;
  }
}

</style>
