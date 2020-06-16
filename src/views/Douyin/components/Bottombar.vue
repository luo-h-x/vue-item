<template>
  <div class="bottom-content">
    <div @click="changeTab(0)" class="b-item">
      <router-link to="/Douyin" :class="tableIndex === 0 ? 'active' : ''">首页</router-link>
    </div>
    <div @click="changeTab(1)" class="b-item">
      <router-link to="/Douyin" :class="tableIndex === 1 ? 'active' : ''">朋友</router-link>
    </div>
    <div @click="changeTab(2)" class="b-item">
      <router-link to="/Douyin" :class="tableIndex === 2 ? 'active' : ''">拍摄</router-link>
    </div>
    <div @click="changeTab(3)" class="b-item">
      <router-link to="/Douyin" :class="tableIndex === 3 ? 'active' : ''">消息</router-link>
    </div>
    <div @click="changeTab(4)" class="b-item">
      <router-link to="/Douyin" :class="tableIndex === 4 ? 'active' : ''">我</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableIndex: 0
    }
  },
  methods: {
    changeTab (index) {
      this.tableIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.bottom-content {
  display: flex;
  .b-item {
    flex: 1;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: #fff;
    &>a {
      opacity: 0.7;
      color: #fff;
    }
    .active {
      opacity: 1;
    }
  }
}
</style>
