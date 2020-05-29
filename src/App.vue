<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
a {
  text-decoration: none;
}
html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
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
