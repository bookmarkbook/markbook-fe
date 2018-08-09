<template>
  <div>
    {{content}}
  </div>
</template>

<script>
export default {
  props:{
    editable:{
      default:false,
    },
    content:{
      default: 'a task'
    },
    description:{
      default: 'a task description'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

