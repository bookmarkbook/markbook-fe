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

button, textarea, input{
  outline: none;
}

#app {
  font-family: futura, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $bm-font-color;

  padding-left: $bm-side-nav-width;
}
</style>
