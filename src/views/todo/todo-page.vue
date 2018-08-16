<template>
  <div>
    <div class="title">
      <div class="time">
        <h1 >{{time}}</h1>
        <span>{{date}}</span>
      </div>

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

    <Model v-if="inCreateNew">
      <todoModel :isNew="true"/>
    </Model>

  </div>
</template>

<script>
import Category from './todo-category';
import Model from '../../components/model';
import todoModel from './todo-model';
export default {
  components:{Category, Model, todoModel},
  data(){
    return {
      newTodo: '',
      time: '12:24',
      date: '2018 8 16',
      inCreateNew: false,
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

.time{
  width:150px;
  text-align: center;
  padding-top:23px;
  >h1{
    font-size: 43px;
    line-height: 40px;
    margin:0px;
  }
  >span{
    color:rgb(132, 152, 172);
    font-size: 14px;
  }
}
</style>

