<template>
  <div class="todo-model">

    <input type="text" 
    class="input input-general"
    v-model="title"
    spellcheck="false"
    placeholder="place your task title here"
    >

    <textarea 
    class="description input-general" 
    spellcheck="false"
    v-model="description"
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
      title: "",
      description: ""
    };
  },
  computed: {
    selfId() {
      return this.$store.state.todo.todoEditId;
    }
  },
  mounted() {
    const find = todo => {
      if (todo.id === this.selfId) {
        this.title = todo.title;
        this.description = todo.description ? todo.description : "";
      }
    };
    this.$store.state.todo.todo.forEach(find);
    this.$store.state.todo.wip.forEach(find);
    this.$store.state.todo.done.forEach(find);
  },
  methods: {
    add() {},
    deleteItem() {
      console.log("f");
      this.$store.commit("todo/removeTodo", {
        id: this.selfId
      });
      this.$store.commit("todo/closeEdit");
    },
    update() {
      this.$store.commit("todo/updateTodo", {
        id: this.selfId,
        title: this.title,
        description: this.description
      });
    }
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

