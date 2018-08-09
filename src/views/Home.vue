<template>
  <div class="home">
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  mounted(){
    console.log('m');
      this.$store.dispatch('user/login', {
        username: 'sdf',
        password: 'sdfsdf'
      });
  }
}
</script>
