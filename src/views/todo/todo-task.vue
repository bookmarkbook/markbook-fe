<template>
  <Motion tag="div" 
  :values="animationProxy" 
  >
    <template slot-scope="ani">
      <div class="todo-item center-x-y"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      @mousedown.self="handelMouseDown"
      :style="{
          'box-shadow': `0px ${ani.shadowSize}px ${2 * ani.shadowSize}px 0px rgba(0, 0, 0, 0.2) `,
          'transform': `translate3d(${ani.x}px, ${ani.y}px, 0) scale(${ani.scale})`,
          'z-index': zindex
          }"
      >
        <div class="progress" 
        @mousedown.self="handelMouseDown"
        :style="{
          width: width + '%',
          background: background
        }"
        ></div>
        {{title}}
        <font-awesome-icon icon="times" 
        class="close" 
        :class="{'hover': hover || isDragging}" 
        @click="remove"/>
        <font-awesome-icon icon="adjust" 
        class="update" 
        :class="{'hover': hover || isDragging}" 
        @click="update"/>
      </div>
    </template >
  </Motion>
</template>

<script>
import task from "./todo-task.js";
export default task;
</script>

<style lang="scss" scoped>
.todo-item {
  z-index: 0;
  width: calc(100% + 10px);
  margin-left: -5px;
  height: 50px;

  position: absolute;
  top: 0px;
  left: 0px;

  border-radius: 5px;
  background: #fdfdfd;
  cursor: pointer;

  &:hover {
    background: #fff;
  }
}

.update {
  transition: 100ms;
  position: absolute;
  top: 3px;
  left: 3px;
  opacity: 0;
  &:hover {
    opacity: 1 !important;
  }
}

.close {
  transition: 100ms;
  position: absolute;
  top: 3px;
  right: 3px;
  opacity: 0;
  &:hover {
    opacity: 1 !important;
  }
}

.hover {
  opacity: 0.5;
}

.progress {
  height: 100%;
  position: absolute;
  left: 0px;
  transition: 200ms;
  border-radius: 3px;
  z-index: -1;
}
</style>

