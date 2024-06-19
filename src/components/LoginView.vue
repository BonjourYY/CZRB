<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();


const handleSubmit = (e) => {
  e.preventDefault();
  if (username.value === 'admin' && password.value === 'admin') {
    // 添加 ck
    localStorage.setItem('token', 'admin');
    router.push({ path: '/' });
  } else {
    errorTip();
  }
};


// 密码错误提示
function errorTip() {
  alert('账号或密码错误');
}
</script>

<template>
  <div class="login-form">
    <h1>常州日报新媒体运营平台</h1>
    <div class="container">
      <div class="main">
        <div class="content">
          <h2>登录</h2>
          <form>
            <input v-model="username" type="name" name="name" id="name" placeholder="User Name" required autofocus />
            <input v-model="password" type="password" name="password" id="password" placeholder="User Password" required
              autofocus />
            <button class="btn" type="submit" @click="handleSubmit">
              登录
            </button>
            <p class="tip">账号：admin 密码：admin</p>
          </form>
        </div>
        <div class="form-img">
          <img src="@image/bg.png" alt="form-bg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #4e34b6;

  h1 {
    font-size: 2.5rem;
    letter-spacing: 2px;
    color: #fff;
  }

  .container {
    max-width: 800px;

    .main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 30px 0;

      .content {
        display: flex;
        padding: 3em;
        flex-direction: column;
        justify-content: center;
        background: #fff;
        box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;

        h2 {
          line-height: 40px;
          margin-bottom: 15px;
          font-size: 30px;
          color: #272346;
          text-align: center;
        }

        form {
          input {
            border-radius: 35px;
            outline: none;
            margin-bottom: 15px;
            font-stretch: 16px;
            color: #999;
            text-align: left;
            padding: 14px 20px;
            width: 100%;
            display: inline-block;
            box-sizing: border-box;
            border: none;
            background: #f7fafc;
            transition: 0.3s ease;
          }

          .btn {
            font-size: 18px;
            color: #fff;
            width: 100%;
            background: #4e34b6;
            border: none;
            padding: 14px 15px;
            font-weight: 600;
            transition: 0.3s ease;
            border-radius: 35px;
            cursor: pointer;

          }

          .tip {
            margin-top: 15px;
            color: #666;
            line-height: 25px;
            opacity: 0.6;
            text-align: center;
          }
        }
      }

      .form-img {
        background: #dfe5ea;
        background-size: cover;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        align-items: center;
        display: grid;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
