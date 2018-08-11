<template>
  <Motion tag="div" :values="animation">
    <template slot-scope="ani">
      <div class="todo-item"
      @mousedown="handelMouseDown"
      @mouseup="handelMouseUp"
      :style="{
          boxShadow: `rgba(0, 0, 0, 0.2) 0px ${ani.shadow}px ${2 * ani.shadow}px 0px`,
          transform: `translate3d(${ani.x}px, ${ani.y}px, 0) scale(${ani.scale})`
          }"
      >
        {{title}}
      </div>
    </template >
  </Motion>
</template>

<script>
import { Motion } from "vue-motion";
export default {
  components: { Motion },
  methods: {
    handelMouseDown() {
      this.$emit("mousedown", {
        id: this.id
      });
    },
    handelMouseUp() {
      this.$emit("mouseup", {
        id: this.id
      });
    },
  },
  props: {
    editable: {
      default: false
    },
    id: {
      default: 0
    },
    title: {
      default: "a task"
    },
    description: {
      default: "a task description"
    },
    animation: {
      require: true
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-item {
  width: 100%;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
  background: #f5f5f5;
  cursor: pointer;
}
</style>

