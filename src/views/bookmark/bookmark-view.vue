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
      <Item 
      v-for="item in list"
      :key="item.id"
      :link="item.href"
      :title="item.title"
      />
    </div>

  </div>
</template>

<script>
import Item from './bookmark-item'
import treeView from "./category/tree";
export default {
  components:{treeView, Item},
  computed:{
    list(){
      if(this.$store.state.cate.active && this.$store.state.cate.active.bookmarks){
        return this.$store.state.cate.active.bookmarks;
      }
      return [];
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
  height: 100vh;
}
</style>


