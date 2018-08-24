import * as API from '@/api/index';
import app from '@/main';
import { todosMock, wipsMock, donwsMock } from './mock-data';

function reinsert(arrFrom, arrTo, from, to) {
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

    transferToList: undefined,
    transferToIndex: 0,

    showTodoEditor: false,
    todoEditId: -1,
  },
  mutations: {
    editTodo(state, info) {
      state.showTodoEditor = true;
      state.todoEditId = info.id;
    },
    closeEdit(state) {
      state.showTodoEditor = false;
      state.todoEditId = -1;
    },
    updateTodo(state, info) {
      const find = (todo) => {
        if (todo.id === info.id) {
          console.log('fff')
          return { ...info };
        } else {
          return todo;
        }
      }
      state.todo = state.todo.map(find);
      state.wip = state.wip.map(find);
      state.done = state.done.map(find);
    },
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
      state.movingPageX = info.x;
      state.movingPageY = info.y;
    },
    stopMoving(state) {
      state.movingItemId = undefined;
      state.movingX = 0;
      state.movingY = 0;
    },
    addTodo(state, params) {
      state[params.list].splice(params.place, 0, params.task);
    },
    moveTodo(state, info) {
      reinsert(state[info.fromList], state[info.toList], info.from, info.to);
    },
    removeTodo(state, params) {
      if (params.list === undefined) {
        state.todo = state.todo.filter(t => t.id !== params.id);
        state.wip = state.wip.filter(t => t.id !== params.id);
        state.done = state.done.filter(t => t.id !== params.id);
      } else {
        state[params.list] = state[params.list].filter(t => t.id !== params.id);
      }
    },

  },
  actions: {

  }
}