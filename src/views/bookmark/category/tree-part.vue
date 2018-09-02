<template>
  <div class="item">
    <div class="item-self"
    :style="{
      'padding-left': depth * 10 + 'px',
      'color': checkActive?'green':''
    }">
      <span v-if="data.open && data.children.length>0">></span> 
      <span v-if="!data.open && data.children.length>0">=</span> 
      {{data.name}}
    </div>

    <div class="item-child">
      <treePart 
      v-for="child in data.children"
      :key="child.id"
      :depth="depth + 1"
      :data="child"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'treePart',
  mounted(){
  },
  props:{
    data:{
      require:true
    },
    depth:{
      require:true
    },
  },
  computed: {
    checkActive(){
      return this.data.id === this.$store.state.cate.active
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  border-top:1px solid #eee;
  height:100%;
}

.item-self{
  font-size:14px;
  height:25px;
  cursor: pointer;
  &:hover{
    background: #eee;
  }
}

.item-child{
}
</style>
