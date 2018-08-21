<template>
  <div class="todo-model">

    <input type="text" 
    class="input input-general"
    v-model="newTodo"
    spellcheck="false"
    placeholder="place your task title here"
    >

    <textarea 
    class="description input-general" 
    spellcheck="false"
    placeholder="make descriptions about your task"></textarea>

    <div class="btn-group">
      <button 
      class="button-general"
      @click="add" 
      v-if="isNew"> add new todo</button>
      <button 
      class="button-general"
      @click="update" 
      v-if="!isNew"> update</button>
      <button 
      class="button-general"
      @click="deleteItem" 
      v-if="!isNew"> delete</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    isNew: {
      default: true
    }
  },
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    add() {},
    deleteItem() {},
    update() {}
  }
};
</script>


<style lang="scss" scoped>
.todo-model {
  height: 300px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.button-general {
  border-radius: 3px;
  height: 35px;
  border: 1px solid rgb(137, 137, 137);
  margin: 5px;
}

.input-general {
  border-radius: 3px;
  border: 1px solid rgb(184, 184, 184);
}

.input {
  box-sizing: border-box;
  width: 300px;
  height: 35px;
  padding: 5px;
}

.description {
  box-sizing: border-box;
  width: 300px;
  height: 200px;
  resize: none;
  padding: 5px;
}

.btn-group {
  display: flex;
  flex-direction: row-reverse;
  width: 300px;
  margin-right: -10px;
}
</style>

