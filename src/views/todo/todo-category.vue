<template>
  <div class="todo-category">
    <h2 class="title">{{title}}</h2>

    <Task
      v-for="item in items"
      :key="item.id"
      :id = "item.id"
      :title="item.title"
      :animation="item.view"
      @mousedown="handelMouseDown"
    />

  </div>
</template>

<script>
import { Motion } from "vue-motion";
import Task from "./todo-task.vue";

export default {
  props: {
    title: {
      default: "title"
    }
  },
  components: { Motion, Task },
  mounted() {
    // setTimeout(()=>{
    //   this.sizes;
    //   console.log('sdsfd');
    // }, 3000)
  },
  computed: {
    mixedView() {
      return this.items.map(item => item);
    }
  },
  methods: {
    setOnesView(newviewPartial, id) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          return this.setView({ scale: 2 }, item);
        }
        return item
      });
      console.log(this.items);
    },
    setView(newviewPartial, olditem) {
      return {
        ...olditem,
        view: {
          ...olditem.view,
          ...newviewPartial
        }
      };
    },
    handelMouseDown(param) {
      this.setOnesView({ scale: 2 }, param.id );
    },
    handleMouseUp(param) {}
  },
  data() {
    return {
      items: [
        {
          id: 1,
          title: "sdfsdf sdfsdf",
          view: {
            shadowSize: 10,
            x: 0,
            y: 0,
            scale: 1
          }
        },
        {
          id: 2,
          title: "sdfsdf sdfsdfsdf",
          view: {
            shadowSize: 10,
            x: 0,
            y: 0,
            scale: 1
          }
        },
        {
          id: 3,
          title: "sdfsdf sdfsdfsdf",
          view: {
            shadowSize: 10,
            x: 0,
            y: 0,
            scale: 1
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

