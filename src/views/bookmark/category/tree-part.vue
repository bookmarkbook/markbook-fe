<template>
  <div class="item">
    <div class="item-self"
    :style="{
      'padding-left': depth * 20 + 'px',
      'color': checkActive?'green':''
    }">
      <font-awesome-icon 
      icon="folder" 
      class="folder-icon general-clickable-word"
      v-if="!data.open && data.children.length>0" 
      @click="expand"/>
      <font-awesome-icon 
      icon="folder-open" 
      class="folder-icon general-clickable-word"
      v-if="data.open && data.children.length>0" 
      @click="collapse"/>
      {{data.name}}
    </div>

    <div class="item-child" v-if="data.open">
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
  },
  methods:{
    expand(){
      this.data.open = true;
    },
    collapse(){
      this.data.open = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.item{
  border-top:1px solid #eee;
  height:100%;
}

.folder-icon{
  font-size: 12px;
}

.item-self{
  font-size:14px;
  height:25px;
  line-height: 25px;
  cursor: pointer;
  &:hover{
    background: #eee;
  }
}

.item-child{
}
</style>
