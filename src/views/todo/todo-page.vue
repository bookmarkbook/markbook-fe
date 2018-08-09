<template>
  <div>
    <div class="title">

    </div>
    <div class="todo-categories">
      <Category title="todo"/>
      <Category title="wip"/>
      <Category title="done"/>
    </div>
  </div>
</template>

<script>
import Category from './todo-category';
export default {
  components:{Category}
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

