<template>
  <nav class="side-nav">
    <router-link to="/home" tag="div" class="route"></router-link>
    <router-link to="/bookmark" tag="div" class="route"></router-link>
    <router-link to="/" tag="div" class="route"></router-link>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

$nav-width: 50px;

.side-nav{
  position: fixed;
  left:0px;
  height: 0px;
  width: $nav-width + 1px;
  height:100vh;
  padding-top:20px;
  border-right:1px solid #eee;
}

.route{
  width: $nav-width;
  height: $nav-width;
  border:1px solid #eee;
  margin-bottom:10px;
}
</style>

