import * as API from '@/api/index';
import app from '@/main';

export default {
  namespaced: true,
  state: {
    todo: [],
    wip: [],
    done:[],
  },
  mutations: {
    addTodo(state, task) {
      state.todo.push(todo);
    },
    removeTodo(state, task) {
      state.todo = state.todo.filter(t => t !== task);
    }
  },
  actions: {

  }
}