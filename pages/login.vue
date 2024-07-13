<template>
  <div>
    <div>
      <label for="email"> Email </label>
      <input v-model="email" id="Email" type="text" placeholder="Email" />
    </div>
    <div>
      <label for="password"> Password </label>
      <input
        v-model="password"
        id="password"
        type="password"
        placeholder="******************"
      />
    </div>
    <button @click="handleLogin()">Sign In</button>
    <br />
    <button @click="handleLogout()">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { UserRepository } from '~/repositories/user';

const email = ref<string>('');
const password = ref<string>('');

const handleLogin = async () => {
  try {
    await UserRepository.login(email.value, password.value)
      .then((res) => {
        if (res?.status === 200) {
          console.log(res);
        } else {
          alert('メールアドレスかパスワードが間違っています。');
        }
      })
      .catch(() => {
        alert('ログインに失敗しました。');
      });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

const handleLogout = async () => {
  try {
    await UserRepository.logout()
      .then((res) => {
        if (res?.status === 200) {
          console.log(res);
        } else {
          alert('ログアウトに失敗しました。');
        }
      })
      .catch(() => {
        alert('ログアウトに失敗しました。');
      });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
</script>
