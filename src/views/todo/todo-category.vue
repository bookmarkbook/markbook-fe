<template>
  <div class="todo-category">
    <h2 class="title">{{title}}</h2>

    <Task
      v-for="(item, index) in items"
      :key="item.id"
      :id = "item.id"
      :index = "index"
      :title="item.title"
      :animation="item.view"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @move="handleMove"
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
    todoInfo: {
      default: ()=>[]
    }
  },
  components: { Motion, Task },
  methods: {
    handleMove(param) {
      let itemIndex;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].id === param.id) {
          itemIndex = i;
        }
      }
      const relativeY = param.y - this.leftTopY;
      const currentIndex = clamp(
        Math.round(relativeY / 50) - 1,
        0,
        this.items.length - 1
      );
      this.$emit('reorder',{
        from:itemIndex, to: currentIndex
      })
      
      this.movingX = param.translateX;
      this.movingY = param.translateY;
    },
    handleMouseDown(param) {
      this.movingItemId = param.id;
      this.updateView();
    },
    handleMouseUp(param) {
      this.movingItemId = null;
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
      array = array.map((item, index) => {
        if (this.movingItemId === item.id) {
          return item;
        }
        return this.setView(
          {
            x: 0,
            y: index * 55
          },
          item
        );
      });
      return array;
    },
    updateView(){
      const viewData = this.todoInfo.map(info => {
      return {
        ...info,
        view: {
          shadowSize: info.id === this.movingItemId? 16 : 1,
          scale: info.id === this.movingItemId? 1.1 : 1,
          x: info.id === this.movingItemId? this.movingX : 0,
          y: info.id === this.movingItemId? this.movingY : 0,
        }
      };
    });
    this.items = this.updateOrder(viewData);
    }
  },
  mounted() {
    this.leftTopX = this.$el.getBoundingClientRect().left;
    this.leftTopY = this.$el.getBoundingClientRect().top;
    this.updateView();
  },
  watch: {
    todoInfo(newItems) {
      this.updateView();
    }
  },
  data() {
    return {
      leftTopX: 0,
      leftTopY: 0,
      items: [],
      movingItemId:null,
      movingX:0,
      movingY:0
    };
  }
};
</script>

<style lang="scss" scoped>
.todo-category {
  width: 200px;
  height: 400px;
  background: #fbfbfb;
  position: relative;

  user-select: none;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.09),
    0 -2px 0 0 rgba(255, 255, 255, 0.5), 0 8px 15px 0 rgba(0, 0, 0, 0.04);
  border-radius: 5px;
}

.title {
  font-size: 24px;
  color: #d7d7d7;
  position: absolute;
  top: -55px;
  right: 0px;
}
</style>
