<!-- 登录表单 -->
<template>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit" @click="handleSubmit">Login</button>
  </form>
</template>

<script setup>
import {ref} from 'vue'
let username = ref('');
let password = ref('');

// 登录函数

const url = 'http://v-cznews2021.vm.cziic.cn:9090/login'

async function login(){
  let response = await fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':"application/json;charset=UTF-8"
    },
    body:JSON.stringify({username:username.value,password:password.value})
  })
  let result = await response.json();
  alert(result.msg);
}

const handleSubmit = (e) => {
  e.preventDefault();
  login()
}
</script>
