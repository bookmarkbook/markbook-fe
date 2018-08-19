import * as API from '@/api/index';
import app from '@/main';
import { todosMock, wipsMock, donwsMock } from './mock-data';

function reinsert(arr, from, to) {
  // const _arr = arr.slice(0);
  const val = arr[from];
  arr.splice(from, 1);
  arr.splice(to, 0, val);
  return arr.slice();
}


export default {
  namespaced: true,
  state: {
    todo: todosMock,
    wip: wipsMock,
    done: donwsMock,

    movingItemId: undefined,
    isMovingTransefer: false,
    movingX: 0,
    movingY: 0,
    movingPageX: 0,
    movingPageY: 0,
  },
  mutations: {
    updateMovingInfo(state, info) {
      state.movingX = info.translateX;
      state.movingY = info.translateY;
      state.movingPageX = info.x;
      state.movingPageY = info.y;
    },
    startMoving(state, info) {
      state.movingItemId = info.id;
      state.movingX = info.translateX;
      state.movingY = info.translateY;
    },
    stopMoving(state) {
      state.movingItemId = undefined;
    },
    addTodo(state, task) {
      state.todo.unshift(task);
    },
    moveTodo(state, info) {
      state.todo = reinsert(state.todo, info.from, info.to);
    },
    removeTodo(state, id) {
      state.todo = state.todo.filter(t => t.id !== id);
    },
    // addTodo(state, task) {
    //   state.todo.push(task);
    // },
    moveWip(state, info) {
      state.wip = reinsert(state.wip, info.from, info.to);
    },
    // removeTodo(state, task) {
    //   state.todo = state.todo.filter(t => t !== task);
    // },

  },
  actions: {

  }
}