<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  background-image: url("@/assets/fundo.jpg");
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  box-sizing: border-box;
}
</style>
