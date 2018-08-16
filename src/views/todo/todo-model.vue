<template>
  <div class="todo-model">
    <div class="title">
      <input type="text" 
      class="input input-general"
      v-model="newTodo">
      <button 
      class="button-general"
      @click="add" 
      v-if="isNew"> add new todo</button>
      <button 
      class="button-general"
      @click="deleteItem" 
      v-if="!isNew"> delete</button>
      <button 
      class="button-general"
      @click="update" 
      v-if="!isNew"> update</button>
    </div>
    <div>
      <textarea 
      class="description input-general" 
      spellcheck="false"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isNew:{
      default:true
    }
  },
  data(){
    return {
      newTodo: ''
    }
  },
  methods:{
    add(){

    },
    deleteItem(){

    },
    update(){

    }
  }
}
</script>


<style lang="scss" scoped>
.todo-model{
  height: 300px;
  margin-top:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.button-general{
  border-radius:3px;
  border: 1px solid rgb(137, 137, 137);
}

.input-general{
  border-radius:3px;
  border: 1px solid rgb(184, 184, 184);
}

.input{
  width:200px;
  height:25px;
}

.description{
  width:400px;
  height:200px;
  resize: none;
}

.title{
  display: flex;
  width:350px;
  justify-content: space-between;
}
</style>

