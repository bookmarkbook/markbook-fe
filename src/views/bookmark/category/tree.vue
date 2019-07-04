<template>
  <div class="tree">
    <treePart 
    :depth="0"
    :data="this.$store.state.cate.tree"/>

    <div class="fake-drag-tree"
    v-if="treeState.isMovingTree"
    :style="{
      left: treeState.movingCurrentX - 50 + 'px',
      top: treeState.movingCurrentY - 15 + 'px',
    }"
    >

    </div>
  </div>
</template>

<script>
import treePart from './tree-part';
import {treeBus} from './tree-event-bus';
export default {
  components:{treePart},
  data(){
    return{
      treeState: treeBus.$data
    }
  }
}
</script>

<style lang="scss" scoped>
.tree{
  padding:5px;
  overflow-y: scroll;
  height: 100%;
}

.fake-drag-tree{
  width:100px;
  height:30px;
  background: #000;
  position:fixed;
  pointer-events: none;
}
</style>

