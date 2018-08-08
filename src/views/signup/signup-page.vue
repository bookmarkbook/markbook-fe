<template>
  <div>
    <input type="text" placeholder="username" v-model="username">
    <input type="text" placeholder="password" v-model="password">
    <button @click="signup">sign up</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods:{
    checkPasswordValidation(password){
      return true;
    },
    checkUserNameValidation(password){
      return true;
    },
    signup(){
      if(!this.checkPasswordValidation){
        
      }
      if(!this.checkUserNameValidation){

      }
      this.$store.dispatch('user/signup', {
        username: this.username,
        password: this.password,
      })
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


