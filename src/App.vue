<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  height: 100%;
}
a {
  text-decoration: none;
}
html {
  font-size: 100px;
}
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  overflow-y: auto;
}
*{
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}
</style>
