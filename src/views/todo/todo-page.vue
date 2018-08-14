<template>
  <div>
    <div class="title">
    <input type="text" v-model="newTodo">
    <button @click="add"> add</button>

    </div>
    <div class="todo-categories">
      <Category title="todo" 
      :todoInfo="this.$store.state.todo.todo"
      @reorder="todoReorder"/>
      <Category title="wip" 
      :todoInfo="this.$store.state.todo.wip"/>
      <Category title="done" 
      :todoInfo="this.$store.state.todo.done"/>
    </div>

  </div>
</template>

<script>
import Category from './todo-category';
export default {
  components:{Category},
  data(){
    return {
      newTodo: ''
    }
  },
  methods:{
    add(){
      this.$store.commit('todo/addTodo',{
        id:Math.random(),
        title: this.newTodo
      })
    },
    todoReorder(parms){
      this.$store.commit('todo/moveTodo',parms)
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
}
</style>

