<template>
  <div class="item" >
    <div class="item-self"
    @mousedown.self ="startDrag"
    @click.self ="select"
    :style="{
      'padding-left': depth * 20 + 'px',
      'color': checkActive?'green':''
    }">
      <font-awesome-icon 
      icon="folder" 
      class="folder-icon general-clickable-word"
      v-if="!data.open && data.children.length>0" 
      @click="expand"/>
      <font-awesome-icon 
      icon="folder-open" 
      class="folder-icon general-clickable-word"
      v-if="data.open && data.children.length>0" 
      @click="collapse"/>
      {{data.name}}
    </div>

    <div class="item-child" v-if="data.open">
      <treePart 
      v-for="child in data.children"
      :key="child.id"
      :depth="depth + 1"
      :data="child"/>
    </div>
  </div>
</template>

<script>
import {treeBus} from './tree-event-bus';

export default {
  name: 'treePart',
  mounted(){
  },
  props:{
    data:{
      require:true
    },
    depth:{
      require:true
    },
  },
  computed: {
    checkActive(){
      return this.$store.state.cate.active && this.data.id === this.$store.state.cate.active.id
    }
  },
  methods:{
    expand(){
      this.data.open = true;
    },
    collapse(){
      this.data.open = false;
    },
    select(){
      this.$store.state.cate.active = this.data;
    },
    stopMoving(e){
      treeBus.$data.movingTreeItem = undefined;
      treeBus.$data.isMovingTree = false;
      window.removeEventListener('mousemove', this.mouseMoving);
      window.removeEventListener('mouseup', this.stopMoving);
    },
    mouseMoving(e){
      treeBus.$data.movingCurrentX = e.pageX;
      treeBus.$data.movingCurrentY = e.pageY;
    },
    startDrag(e){

      treeBus.$data.movingTreeItem = this.data.id;
      treeBus.$data.movingCurrentX = e.pageX;
      treeBus.$data.movingCurrentY = e.pageY;
      treeBus.$data.movingStartX = e.pageX;
      treeBus.$data.movingStartY = e.pageY;
      treeBus.$data.isMovingTree = true;
      window.addEventListener('mousemove', this.mouseMoving);
      window.addEventListener('mouseup', this.stopMoving);
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  border-top:1px solid #eee;
}

.folder-icon{
  font-size: 12px;
}

.item-self{
  font-size:14px;
  height:25px;
  line-height: 25px;

  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;

  cursor: pointer;
  user-select: none;
  &:hover{
    background: #eee;
  }
}

.item-child{
}
</style>
