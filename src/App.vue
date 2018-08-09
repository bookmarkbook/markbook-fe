<template>
  <div id="app">
    <sideNav/>
    
    <router-view/>
  </div>
</template>
<script>
import sideNav from "./components/side-nav";
export default {
  components: { sideNav },
  mounted(){
    this.$store.commit('user/userLanding');
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  height:100vh;
  overflow: hidden;
  background:$bm-background-color;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  padding-left: $bm-side-nav-width;
}
</style>
