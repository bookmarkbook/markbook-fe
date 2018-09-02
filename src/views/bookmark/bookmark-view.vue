<template>
  <div>
    <div class="title center-x-y">
      CATEGORY TREE
    </div>
    <div class="cate-tree">
      <treeView />
    </div>
  </div>
</template>

<script>

import treeView from "./category/tree";
export default {
  components:{treeView},

}
</script>

<style lang="scss" scoped>
.title{
  width: 350px;
  height:50px;
  font-size: 18px;
}

.cate-tree{
  width:350px;
  
}
</style>


