<template>
  <Motion tag="div" :values="animation" >
    <template slot-scope="ani">
      <div class="todo-item"
      @mousedown="handelMouseDown"
      :style="{
          'box-shadow': `0px ${ani.shadowSize}px ${2 * ani.shadowSize}px 0px rgba(0, 0, 0, 0.2) `,
          transform: isDragging?
          `translate3d(${x}px, ${y}px, 0) scale(${ani.scale})`
          :`translate3d(${ani.x}px, ${ani.y}px, 0) scale(${ani.scale})`
          }"
      >
        {{id}}{{title}}
      </div>
    </template >
  </Motion>
</template>

<script>
import { Motion } from "vue-motion";
export default {
  components: { Motion },
  methods: {
    handelMouseDown(e) {
      window.addEventListener("mouseup", this.handelMouseUp);
      window.addEventListener("mousemove", this.handleMouseMove);
      this.isDragging = true;
      this.initalIndex = this.index;
      this.startPositonX = e.pageX;
      this.startPositionY = e.pageY;
      this.updateActiveXY(e);
      this.$emit("mousedown", {
        id: this.id
      });
    },
    handelMouseUp() {
      window.removeEventListener("mouseup", this.handelMouseUp);
      window.removeEventListener("mousemove", this.handleMouseMove);
      this.isDragging = false;
      this.$emit("mouseup", {
        id: this.id
      });
    },
    updateActiveXY(e){
      this.y = this.initalIndex * 55 + (e.pageY-this.startPositionY);
      this.x = 0;
    },
    handleMouseMove(e) {
      this.updateActiveXY(e);
      this.$emit("move", {
        id: this.id,
        x: e.pageX,
        y: e.pageY
      });
    }
  },
  data(){
    return {
      startPositonX:0,
      startPositionY:0,
      initalIndex:0,
      isDragging: false,
      x:0,
      y:0,
    }
  },
  props: {
    editable: {
      default: false
    },
    id: {
      default: 0
    },
    index:{
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

  position: absolute;
  top: 0px;
  left: 0px;

  border: 1px solid #000;
  background: #f5f5f5;
  cursor: pointer;
}
</style>

