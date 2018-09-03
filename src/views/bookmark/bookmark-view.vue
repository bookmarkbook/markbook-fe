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


