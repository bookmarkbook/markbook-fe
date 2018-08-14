<template>
  <Motion tag="div" 
  :values="animation" 
  @motion-end="motionEnd"
  >
    <template slot-scope="ani">
      <div class="todo-item"
      @mousedown="handelMouseDown"
      :style="{
          'box-shadow': `0px ${ani.shadowSize}px ${2 * ani.shadowSize}px 0px rgba(0, 0, 0, 0.2) `,
          'transform': `translate3d(${ani.x}px, ${ani.y}px, 0) scale(${ani.scale})`,
          'z-index': Math.max(0,zindex)
          }"
      >
        {{id}}{{title}}
      </div>
    </template >
  </Motion>
</template>

<script>
import task from './todo-task.js';
export default task;
</script>

<style lang="scss" scoped>
.todo-item {
  z-index: 0;
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

