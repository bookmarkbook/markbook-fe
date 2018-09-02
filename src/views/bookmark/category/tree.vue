<template>
  <div class="tree">
    <treePart 
    :depth="0"
    :data="this.$store.state.cate.tree"/>
  </div>
</template>

<script>
import treePart from './tree-part';
export default {
  components:{treePart},
  data(){
    return{
    }
  }
}
</script>

<style lang="scss" scoped>
.tree{
  padding:5px;
  overflow-y: scroll;
}
</style>

