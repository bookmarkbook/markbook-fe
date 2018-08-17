<template>
<div class="model-wrap center-x-y" @click="close">
  <div class="model "
    :style="{
      width: width,
      height: height
      }"
  >
      <font-awesome-icon icon="times" class=" model-close"  @click="close"/>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
  props:{
    width:{
      default: '600px'
    },
    height: {
      default: '400px'
    }
  },
  methods:{
    close(){
      this.$emit('close');
    }
  }
}
</script>


<style lang="scss" scoped>
.model-wrap{
  background: rgba(0, 0, 0, 0.16);
  width:100vw;
  height:100vh;
  position: fixed;
  top:0px;
  left:0px;
  z-index: 9999;
}

.model{
  background: $bm-background-color;
  border-radius: 5px;
  position: relative;
}

.model-close{
  position: absolute;
  top:10px;
  right:10px;
}
</style>