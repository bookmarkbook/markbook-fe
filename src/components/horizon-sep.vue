<template>
  <div class="horizon-sep">
    <div></div>
    <div class="seperator">
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.horizon-sep{
  height:100%;
}

.seperator{
  >div{
    cursor: ew-resize;
    border:1px solid;
    width:5px;
    height:100%;
  }
}

</style>
