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

function reinsert(arr, from, to) {
  // const _arr = arr.slice(0);
  const val = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, val);
  return arr.slice();
}

function clamp(n, min, max) {
  return Math.max(Math.min(n, max), min);
}

export default {
  props: {
    title: {
      default: "title"
    }
  },
  components: { Motion, Task },
  methods: {
    setOnesView(newviewPartial, id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return this.setView(newviewPartial, item);
        }
        return item;
      });
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
    handleMove(param) {
      let itemIndex;
      for (let i = 0; i < this.items.length; i++) {
        if(this.items[i].id === param.id){
          itemIndex = i
        }
      }
      const relativeY = param.y - this.leftTopY;
      const currentRow = clamp(Math.round(relativeY / 50) - 1, 0, this.items.length - 1);
      if(currentRow !== itemIndex){
        this.items = reinsert(this.items,itemIndex, currentRow);
        this.updateOrder(param.id);
      }
      this.setOnesView({
        x: param.translateX,
        y: param.translateY},param.id
      );
    },
    handleMouseDown(param) {
      this.setOnesView(
        {
          scale: 1.1,
          shadowSize: 16
        },
        param.id
      );
    },
    handleMouseUp(param) {
      this.setOnesView(
        {
          scale: 1,
          shadowSize: 1
        },
        param.id
      );
      this.updateOrder();
    },
    updateOrder(ignoreItemTranslateID){
      this.items = this.items.map((item, index) => {
        if(ignoreItemTranslateID === item.id){
          return item;
        }
        return this.setView({
          x:0,
          y:index * 55
        }, item);
      });
    }
  },
  computed: {
  },
  mounted() {
    this.leftTopX = this.$el.getBoundingClientRect().left;
    this.leftTopY = this.$el.getBoundingClientRect().top;
    this.updateOrder();
  },
  data() {
    return {
      leftTopX: 0,
      leftTopY: 0,
      items: [
        {
          id: 1,
          title: "sdfsdf sdfsdf",
          view: {
            shadowSize: 1,
            scale: 1,
            x:0,
            y:0,
          }
        },
        {
          id: 2,
          title: "sdfsdf sdfsdfsdf",
          view: {
            shadowSize: 1,
            scale: 1,
            x:0,
            y:0,
          }
        },
        {
          id: 3,
          title: "sdfsdf sdfsdfsdf",
          view: {
            shadowSize: 1,
            scale: 1,
            x:0,
            y:0,
          }
        }
      ]
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

