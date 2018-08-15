<template>
  <Motion tag="div" 
  :values="animationProxy" 
  >
    <template slot-scope="ani">
      <div class="todo-item center-x-y"
      @mousedown.self="handelMouseDown"
      :style="{
          'box-shadow': `0px ${ani.shadowSize}px ${2 * ani.shadowSize}px 0px rgba(0, 0, 0, 0.2) `,
          'transform': `translate3d(${ani.x}px, ${ani.y}px, 0) scale(${ani.scale})`,
          'z-index': zindex
          }"
      >
        {{title}}

        <i class="fa fa-adjust close" @click="remove"></i>
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

  border-radius:5px;
  background: #fdfdfd;
  cursor: pointer;

  &:hover{
    background: #fff;
    & .close{
      opacity: 0.5;
    }
  }
}

.close{
  transition: 100ms;
  position: absolute;
  top:3px;
  right:3px;
  opacity: 0;
  &:hover{
    opacity: 1 !important;
  }
}
</style>

