<template>
  <div>
    <div class="title">

      <h1>{{time}}</h1>
      <input type="text" v-model="newTodo">
      <button @click="add"> add</button>

    </div>
    <div class="todo-categories">
      <Category title="todo" 
      :todoInfo="this.$store.state.todo.todo"
      @reorder="todoReorder"/>
      <Category title="wip" 
      :todoInfo="this.$store.state.todo.wip"
      @reorder="wipReorder"/>
      <Category title="done" 
      :todoInfo="this.$store.state.todo.done"
      @reorder="doneReorder"/>
    </div>

  </div>
</template>

<script>
import Category from './todo-category';
export default {
  components:{Category},
  data(){
    return {
      newTodo: '',
      time: '12:24'
    }
  },
  methods:{
    add(){
      this.$store.commit('todo/addTodo',{
        id:Math.random(),
        title: this.newTodo
      })
    },
    todoReorder(params){
      this.$store.commit('todo/moveTodo',params);
    },
    wipReorder(params){
      this.$store.commit('todo/moveWip',params);
    },
    doneReorder(params){

    }
  }
}
</script>

<style lang="scss" scoped>
.todo-categories{
  width:100%;
  max-width: 800px;
  margin:auto;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}

.title{
  height: 100px;
  border-bottom: 1px solid #eee;
}
</style>

