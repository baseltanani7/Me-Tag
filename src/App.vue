<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HomeView from "@/views/HomeView.vue";
export default {
  name: "App",
  components: {
    // HomeView,
  },
};
</script>

<style scoped lang="scss">
#app {
  direction: rtl;
}
.bg {
  // direction: rtl;
  background: url(./assets/imgs/bacground-app.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: top;
}
.bacground-home {
  position: absolute;
  z-index: -10;
  margin-top: -50px;
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;
}
</style>
