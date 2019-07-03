<template>
  <div class="bookmark-item">
    <span>{{title}}</span> <br>
    <a :href="link" target="_blank" rel="noopener noreferrer">{{link}}</a>
  </div>
</template>

<script>
export default {
  props: ['link', 'title']
}
</script>

<style lang="scss" scoped>
.bookmark-item{
  border-bottom: 1px solid #ddd;
  padding: 3px;

  >a{
    font-size: 12px;
    color: #aaa;
  }
}
</style>
