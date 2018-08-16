<template>
<div class="model-wrap center-x-y" @click="close">
  <div class="model ">
    <i class="fa fa-times model-close" @click="close"></i>
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {
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
  width:600px;
  height: 400px;
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