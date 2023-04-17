<template>
    <form @submit.prevent="handleSubmit">
      <h1>Amdin page</h1>
      <div class="admin mt-96">
        <div class="screen-1">
          <div class="email">
            <label>
              Name:
              <input type="text" v-model="name" />
            </label>
            <div class="sec-2">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
          </div>
          <div class="password">
            <div class="sec-2">
              <ion-icon name="lock-closed-outline"></ion-icon>
              <label>
                Password:
                <input type="password" v-model="password" />
              </label>
              <ion-icon class="show-hide" name="eye-outline"></ion-icon>
            </div>
          </div>
          <template v-if="name === 'admin' && password === 'admin'">
            <router-link class="login" to="/welcomeAdmin">Go to Welcome</router-link>
          </template>
        </div>
      </div>
    </form>
  </template>
  
  <script>
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const router = useRouter()
  
      const form = reactive({
        name: '',
        password: ''
      })
  
      const handleSubmit = () => {
        if (form.name === 'admin' && form.password === 'admin') {
          router.push('/welcomeAdmin')
        }
      }
  
      return {
        name: form.name,
        password: form.password,
        handleSubmit
      }
    }
  }
  </script>
  
  <style scoped>
  .admin {
    display: flex;
    justify-content: center;
  }
  
  .screen-1 {
    width: 400px;
    background-color: #EAEAEA;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .email {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .sec-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 5px 0;
    align-items: center;
    padding: 0 10px;
  }
  
  .sec-2 ion-icon {
    font-size: 24px;
  }
  
  .password {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .show-hide {
    cursor: pointer;
  }
  
  .login {
    margin-top: 10px;
    background-color: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-decoration: none;
  }
  </style>
  