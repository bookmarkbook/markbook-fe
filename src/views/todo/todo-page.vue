<template>
  <div>
    <div class="title">
      <mytime/>
    </div>

    <div class="todo-categories">
      <Category 
      title="todo" 
      todoListName="todo"
      type="todo"
      />
      <Category 
      title="wip" 
      todoListName="wip"
      type="wip"
      />
      <Category 
      title="done" 
      todoListName="done"
      type="done"
      />
    </div>

    <Model 
    v-if="inEditing"
    width="500px"
    height="380px"
    @close="closeEditing"
    >
      <todoModel :isNew="false"/>
    </Model>

    <span class="foot">stay focus stay productive</span>
  </div>
</template>

<script>
import Category from "./todo-category";
import Model from "../../components/model";
import todoModel from "./todo-model";
import mytime from "./time";
export default {
  components: { Category, Model, todoModel, mytime },
  data() {
    return {
    };
  },
  computed: {
    inEditing(){
      return this.$store.state.todo.showTodoEditor
    }
  },
  methods: {
    closeEditing(){
      this.$store.commit('todo/closeEdit');
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-categories {
  width: 100%;
  max-width: 1000px;
  min-width: 800px;
  margin: auto;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.title {
  height: 100px;
  border-bottom: 1px solid #eee;
}

.foot {
  position: fixed;
  bottom: 10px;
  text-align: center;
  width: calc(100vw - 50px);
  z-index: -1;
  font-size: 12px;
  color: rgb(223, 223, 223);
}
</style>

