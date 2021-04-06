<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
body,
html,
#app {
  height: 100%;
  background-color: #000;
  font-size: 1.6rem;
}
</style>
