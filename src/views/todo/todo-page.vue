<template>
  <div>
    <div class="title">
      <mytime/>
    </div>

    <div class="todo-categories">
      <Category title="todo" 
      :todoInfo="this.$store.state.todo.todo"
      type="todo"
      @reorder="todoReorder"/>
      <Category title="wip" 
      :todoInfo="this.$store.state.todo.wip"
      type="wip"
      @reorder="wipReorder"/>
      <Category title="done" 
      :todoInfo="this.$store.state.todo.done"
      type="done"
      @reorder="doneReorder"/>
    </div>

    <Model 
    v-if="inCreateNew"
    width="500px"
    height="380px"
    >
      <todoModel :isNew="false"/>
    </Model>

    <span class="foot">stay focus stay productive</span>
  </div>
</template>

<script>
import Category from './todo-category';
import Model from '../../components/model';
import todoModel from './todo-model';
import mytime from './time';
export default {
  components:{Category, Model, todoModel, mytime},
  data(){
    return {
      newTodo: '',
      inCreateNew: true,
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
  max-width: 1000px;
  min-width: 800px;
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

.foot{
  position: fixed;
  bottom:10px;
  text-align: center;
  width: calc(100vw - 50px);
  z-index: -1;
  font-size: 12px;
  color:rgb(223, 223, 223);
}
</style>

