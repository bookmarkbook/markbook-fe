import * as API from '@/api/index';
import app from '@/main';
import { todosMock, wipsMock, donwsMock } from './mock-data';

function reinsert(arrFrom,arrTo ,from, to) {
  const val = arrFrom[from];
  arrFrom.splice(from, 1);
  arrTo.splice(to, 0, val);
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
    addTodo(state, params) {
      state[params.list] = state[params.list].splice(params.place, 0, params.task);
    },
    moveTodo(state, info) {
      reinsert(state[info.fromList], state[ info.toList], info.from, info.to);
    },
    removeTodo(state, id) {
      state.todo = state.todo.filter(t => t.id !== id);
    },

  },
  actions: {

  }
}