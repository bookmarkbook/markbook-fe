<template>
  <div class="todo-category">
    <h2 class="title">{{title}}</h2>
    <font-awesome-icon icon="plus" class="add general-clickable-word"/>

    <Task
      v-for="(item, index) in items"
      :key="item.id"
      :id = "item.id"
      :index = "index"
      :title="item.title"
      :timeAll="item.timeAll"
      :timeUse="item.timeUse"
      :status="type"
      :animation="item.view"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @move="handleMove"
      @remove="handleRemove"
    />

  </div>
</template>

<script>
import { Motion } from "vue-motion";
import Task from "./todo-task.vue";

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

export default {
  props: {
    title: {
      default: "title"
    },
    type:{
      default: 'wip'
    },
    todoInfo: {
      default: () => []
    }
  },
  components: { Motion, Task },
  methods: {
    getIndex(pageY){
      const relativeY = pageY - this.leftTopY;
      return clamp(
          Math.round(relativeY / 50) - 1,
          0,
          this.needAddPersudoItem? this.items.length:this.items.length - 1
        );
    },
    handleMove(param) {
      this.$store.commit('todo/updateMovingInfo', param);
      if(this.checkInBoundingBox(param.x, param.y)){
        let itemIndex;
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === param.id) {
            itemIndex = i;
          }
        }
        const currentIndex = this.getIndex(param.y);
        this.$store.state.todo.isMovingTransefer = false;
        this.$emit("reorder", {
          from: itemIndex,
          to: currentIndex
        });
      } else {
        this.$store.state.todo.isMovingTransefer = true;
        this.updateView();
      }

    },
    handleMouseDown(param) {
      this.$store.commit('todo/startMoving', param);
      this.updateView();
    },
    handleMouseUp(param) {
      this.$store.state.todo.movingItemId = undefined;
      this.updateView();
    },
    setView(newviewPartial, olditem) {
      const newview = {
        ...olditem,
        view: {
          ...olditem.view,
          ...newviewPartial
        }
      };
      return newview;
    },
    updateOrder(array) {
      let yReduce = 0;
      array = array.map((item, index) => {
        if (this.$store.state.todo.movingItemId === item.id) {
          if(this.$store.state.todo.isMovingTransefer){
            yReduce += 55;
          }
          return item;
        } else {
          if(this.needAddPersudoItem && index === this.persudoItemIndex){
            yReduce -= 55;
          }
        }
        return this.setView(
          {
            x: 0,
            y: index * 55 - yReduce
          },
          item
        );
      });
      return array;
    },
    updateView() {
      const mid = this.$store.state.todo.movingItemId;
      const viewData = this.todoInfo.map(info => {
        return {
          ...info,
          view: {
            shadowSize: info.id === mid ? 16 : 1,
            scale: info.id === mid ? 1.1 : 1,
            x: info.id === mid ? this.$store.state.todo.movingX : 0,
            y: info.id === mid ? this.$store.state.todo.movingY : 0
          }
        };
      });
      this.items = this.updateOrder(viewData);
    },
    handleRemove(e) {
      this.$emit('remove', e.id)
    },
    updateBoundingBox(){
      const bbox = this.$el.getBoundingClientRect();
      this.leftTopX = bbox.left;
      this.leftTopY = bbox.top;
      this.rightBottomX = bbox.right;
      this.rightBottomY = bbox.bottom;
    },
    checkInBoundingBox(x,y){
      return x>=this.leftTopX 
      && x<=this.rightBottomX
      && y>=this.leftTopY
      && y<=this.rightBottomY
    }
  },
  computed: {
    hasMovingItem() {
      return this.$store.state.todo.movingItemId !== undefined;
    },
    hasMovingItemInlist(){
      let hasId = false;
      for (let i = 0; i < this.todoInfo.length; i++) {
        if(this.todoInfo[i].id === this.$store.state.todo.movingItemId){
          hasId = true;
          break;
        }
      }
      return hasId;
    },
    needAddPersudoItem(){
      return !this.hasMovingItemInlist && this.hasMovingItem && this.checkInBoundingBox(
        this.$store.state.todo.movingPageX,
        this.$store.state.todo.movingPageY,
      )
    },
    persudoItemIndex(){
      if(this.needAddPersudoItem){
        return this.getIndex(this.$store.state.todo.movingPageY);
      }else{
        return -1;
      }
    }
  },
  watch:{
    persudoItemIndex(newVal){
      // console.log(newVal);
      this.updateView();
    },
    todoInfo(newItems) {
      this.updateView();
    }
  },
  mounted() {
    this.updateBoundingBox();
    this.updateView();
    window.addEventListener('resize', this.updateBoundingBox);
  },
  beforeDestroy(){
    window.removeEventListener('resize', this.updateBoundingBox);
  },
  data() {
    return {
      leftTopX: 0,
      leftTopY: 0,
      rightBottomX:0,
      rightBottomY:0,
      items: [],
    };
  }
};
</script>

<style lang="scss" scoped>
.todo-category {
  width: 250px;
  height: 400px;
  background: #fbfbfb;
  position: relative;

  user-select: none;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09),
    0 -2px 0 0 rgba(255, 255, 255, 0.5), 0 8px 15px 0 rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}

.add {
  position: absolute;
  top:-23px;
  left:0px;
  cursor: pointer;
}

.title {
  font-size: 24px;
  color: #d7d7d7;
  position: absolute;
  top: -55px;
  right: 0px;
}
</style>

