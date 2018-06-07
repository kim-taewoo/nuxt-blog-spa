<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <h3 style="text-align:center;">Sign Up or Sign In</h3>
      <form @submit.prevent="onSubmit">
        <AppControlInput type="email" v-model="email">E-Mail Address</AppControlInput>
        <AppControlInput @keyup.enter="$emit('submit',$event.target.value)" type="password" v-model="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
      <p>아무나 가입해도 괜찮아요</p>
    </div>
  </div>
</template>

<script>
// import AppControlInput from '@/components/UI/AppControlInput'
// import AppButton from '@/components/UI/AppButton'
import axios from 'axios';

export default {
  name: 'AdminAuthPage',
  // layout: 'admin',
  // components: {
  //   AppControlInput,
  //   AppButton
  // },
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin');
      })
    }
  }
}
</script>

<style scoped>
p {
  text-align: center;
  color: dimgray;
}

.admin-auth-page {
  padding: 20px;
  padding-top: 70px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
