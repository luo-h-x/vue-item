<template>
  <div style="height: 100%">
    <transition name="fade-transform" mode="out-in">
      <keep-alive include="news,dy,videoList">
        <router-view :key="key"  />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key () {
      return this.$route.path
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
