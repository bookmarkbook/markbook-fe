function getViewData(data) {
  function extract(node) {
    const ret = {};
    ret.name = node.categoryName;
    ret.id = Math.random().toString();
    ret.open = true;
    ret.bookmarks = node.bookmarks.map(bookmark => { return { id: Math.random().toString(), ...bookmark } });
    ret.children = [];
    if (node.children) {
      node.children.forEach(item => {
        ret.children.push(extract(item));
      });
    }
    return ret;
  }
  const root = extract(data)
  return root;
}

import {data as D} from './data'


export default {
  namespaced: true,
  mutations: {
    startDragTree(state, { e, id }) {
      state.movingTreeItem = id;
      state.movingCurrentX = e.pageX;
      state.movingCurrentY = e.pageY;
      state.movingStartX = e.pageX;
      state.movingStartY = e.pageY;
      state.isMovingTree = true;
    },
    updateDragPosition(state, e) {
      state.movingCurrentX = e.pageX;
      state.movingCurrentY = e.pageY;
    },
    endDragTree(state) {
      state.movingTreeItem = undefined;
      state.isMovingTree = false;
    }
  },
  state: {
    active: null,
    isMovingTree: false,
    movingTreeItem: undefined,
    movingStartX: 0,
    movingStartY: 0,
    movingCurrentX: 0,
    movingCurrentY: 0,
    tree: getViewData(D),
  }
}