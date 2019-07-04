<template>
  <div class="bookmark-view">
    <div class="category">
      <div class="title">
        CATEGORY TREE
      </div>

      <div class="cate-tree">
        <treeView />
      </div>
    </div>

    <div class="seperator">

    </div>

    <div class="bookmarks">
      <div class="bookmarks-panel">
        <h2>category title</h2>
        <button>new category</button>
      </div>
      <div class="bookmarks-list">
        <Item 
        v-for="item in list"
        :key="item.id"
        :link="item.href"
        :title="item.title"
        />
      </div>
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

.category{
  width: 350px;
  min-width: 350px;
  .title{
    font-size: 16px;
    padding:10px;
  }

  .cate-tree{
    height: calc(100vh - 60px);
  }
}

.seperator{
  cursor: ew-resize;
  border:1px solid #ddd;
  width:5px;
  min-width:5px;
  height:100%;
}

.bookmarks{
  flex-grow: 1;
  position: relative;
  >.bookmarks-panel{
    width: 100%;
    height: 100px;
    border-bottom:1px solid #ddd;
    position: absolute;
  }
  >.bookmarks-list{
    overflow-y: scroll;
    margin-top:100px;
    height: calc(100% - 100px);
  }
}
</style>


