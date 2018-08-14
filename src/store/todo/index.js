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
  },
  mutations: {
    addTodo(state, task) {
      state.todo.push(task);
    },
    moveTodo(state, info) {
      if (info.from !== info.to) {
        state.todo = reinsert(state.todo, info.from, info.to);
      }
    },
    removeTodo(state, task) {
      state.todo = state.todo.filter(t => t !== task);
    }
  },
  actions: {

  }
}