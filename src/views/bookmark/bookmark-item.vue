<template>
  <div class="bookmark-item">
    {{title}}
  </div>
</template>

<script>
export default {
  props: ['link', 'title']
}
</script>

<style lang="scss" scoped>
.bookmark-item{
  border: 1px solid #000;
}
</style>
