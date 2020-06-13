<template>
  <div class="icon-list">
    <ul>
      <li v-for="(v, i) in iconList" :key="i">
          <i :class="v"></i>
          <span class="icon-name">{{v}}</span>
      </li>
    </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        'el-icon-platform-eleme',
        'el-icon-delete-solid',
        'el-icon-delete',
        'el-icon-s-tools',
        'el-icon-user-solid',
        'el-icon-phone',
        'el-icon-more',
        'el-icon-star-on',
        'el-icon-s-goods',
        'el-icon-warning',
        'el-icon-question',
        'el-icon-remove',
        'el-icon-success',
        'el-icon-zoom-in',
        'el-icon-remove-outline',
        'el-icon-circle-check',
        'el-icon-box',
        'el-icon-money',
        'el-icon-guide',
        'el-icon-link',
        'el-icon-chat-round',
        'el-icon-message',
        'el-icon-position',
        'el-icon-microphone',
        'el-icon-time',
        'el-icon-full-screen',
        'el-icon-switch-button',
        'el-icon-trophy-1',
        'el-icon-location-outline',
        'el-icon-alarm-clock',
        'el-icon-mobile-phone',
        'el-icon-heavy-rain',
        'el-icon-baseball',
        'el-icon-bicycle',
        'el-icon-moon',
        'el-icon-grape',
        'el-icon-fork-spoon',
        'el-icon-sugar',
        'el-icon-tableware',
        'el-icon-watermelon',
        'el-icon-unlock',
        'el-icon-chat-dot-square',
        'el-icon-office-building'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-list {
  margin: 20px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  overflow: hidden;

  ul {
    margin: 10px 0;
    padding: 0 0 0 20px;
    font-size: 14px;
    color: #5e6d82;
    line-height: 2em;
    list-style: none;

    li {
      float: left;
      width: 16.66%;
      text-align: center;
      height: 120px;
      /* line-height: 120px; */
      color: #666;
      font-size: 13px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      margin-right: -1px;
      margin-bottom: -1px;
      list-style: none;
      overflow: hidden;

      i {
        display: block;
        font-size: 32px;
        margin: 15px 0 15px 0;
      }

      .icon-name {
        display: inline-block;
        padding: 0 3px;
        line-height: normal;
      }
    }
  }
}
</style>
