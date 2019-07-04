import Vue from 'vue'
export const treeBus = new Vue(
  {
    data: {
      isMovingTree: false,
      movingTreeItem: undefined,
      movingStartX: 0,
      movingStartY: 0,
      movingCurrentX: 0,
      movingCurrentY: 0,
    }
  }
)