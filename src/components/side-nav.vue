<template>
  <nav class="side-nav">
    <router-link to="/todo" tag="div" class="route general-clickable center-x-y">todo</router-link>
    <router-link to="/bookmark" tag="div" class="route general-clickable center-x-y">mark</router-link>
    <!-- <router-link to="/" tag="div" class="route general-clickable center-x-y"></router-link> -->
  </nav>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>

.side-nav{
  position: fixed;
  left:0px;
  height: 0px;
  width: $bm-side-nav-width + 1px;
  height:100vh;
  padding-top:20px;
  border-right:$bm-border-line;
}

.route{
  width: $bm-side-nav-width;
  height: $bm-side-nav-width;
  border:$bm-border-line;
  margin-bottom:10px;
}
</style>

