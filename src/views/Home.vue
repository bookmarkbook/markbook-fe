<template>
  <div class="home">
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
