<template>
  <div class="bookmark-view">
    <div>
      <div class="title">
        CATEGORY TREE
      </div>

      <div class="cate-tree">
        <treeView />
      </div>
    </div>

    <div class="seperator">

    </div>

    <div>
      <div 
      v-for="item in list"
      :key="item.id"
      >
      {{item.title}}
      </div>
    </div>

  </div>
</template>

<script>

import treeView from "./category/tree";
export default {
  components:{treeView},
  computed:{
    list(){
      return this.$store.state.cate.filteredList;
    }
  }
}
</script>

<style lang="scss" scoped>
.bookmark-view{
  display: flex;
  height:100vh;
}

.seperator{
  cursor: ew-resize;
  border:1px solid;
  width:5px;
  height:100%;
}

.title{
  width: 350px;
  font-size: 16px;
  padding:10px;
}

.cate-tree{
  width:350px;
}
</style>


