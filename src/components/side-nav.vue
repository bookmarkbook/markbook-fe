<template>
  <nav class="side-nav">
    <router-link to="/todo" tag="div" 
    :active-class="'nav-active'"
    class="route general-clickable center-x-y">
      <font-awesome-icon icon="clipboard-check" />
    </router-link>
    <router-link to="/bookmark" tag="div" 
    :active-class="'nav-active'"
    class="route general-clickable center-x-y">
      <font-awesome-icon icon="bookmark" />
    </router-link>
    <!-- <router-link to="/" tag="div" class="route general-clickable center-x-y"></router-link> -->

    <div class="user">
      <router-link to="/user" tag="div" 
      :active-class="'nav-active'"
      class="route general-clickable center-x-y">
        <font-awesome-icon icon="user-circle" />
      </router-link>
    </div>
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

.user{
  position:absolute;
  bottom:20px;
}

.nav-active::after{
  position:absolute;
  content: ' ';
  top:0px;
  right:0px;
  width: 0;
  height: 0;
  border-style: solid ;
  border-width: 0 10px 10px 0;
  border-color: transparent #45515e transparent transparent;
}

.route{
  width: $bm-side-nav-width;
  height: $bm-side-nav-width;
  border:$bm-border-line;
  margin-bottom:10px;
  position: relative;
  >*{
    font-size: 20px;
  }
}
</style>

