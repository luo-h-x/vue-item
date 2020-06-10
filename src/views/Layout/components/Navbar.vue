<template>
  <div class="navbar">
    <Hamburger/>
    <Breadcrumb/>
    <div class="right-menu">
      <el-dropdown  trigger="click">
        <div >
          <img src="../../../assets/cat.gif" alt="">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu >
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/luo-h-x/vue-admin-template">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout" >
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../../../components/Breadcrumb'
import Hamburger from '../../../components/Hamburger'
export default {
  components: { Breadcrumb, Hamburger },
  methods: {
    logout () {
      sessionStorage.removeItem('loginusername')
      this.$router.push('/Login')
    },
    handleLink (path) {
      this.$router.push(path.path).catch((e) => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 10px;

    .el-dropdown {
      margin-top: 10px;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        background-color: white;
        margin-right: 10px;
      }
    }
  }

  .hamburger {
    width: 40px;
    height: 100%;
    line-height: 60px;
    text-align: center;
    float: left;
    cursor: pointer;
    padding: 0 10px;
    transition: background .3s;

    .svg {
      width: 25px;
      height: 25px;
      vertical-align: middle
    }
    &:hover {
      background: rgba(0, 0, 0, .025)
    }

    .is-active {
      transform: rotate(180deg);
    }
  }

  .el-breadcrumb {
    display: inline-block;
    font-size: 16px;
    line-height: 60px;
    margin-left: 8px;

    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }

}
</style>
<style>
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateY(20px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
