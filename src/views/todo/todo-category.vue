<template>
  <div class="todo-category">
    <h2 class="title">{{title}}</h2>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      default: 'title'
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-category{
  width: 200px;
  height: 400px;
  background: #fbfbfb;
  position:relative;

  box-shadow:
  0 2px 4px 0 rgba(0,0,0,0.09), 
  0 -2px 0 0 rgba(255,255,255,0.50), 
  0 8px 15px 0 rgba(0,0,0,0.04);
  border-radius: 5px;
}

.title{
  font-size: 24px;
  color:#d7d7d7;
  position: absolute;
  top:-55px;
  right:0px;
}
</style>

