<template>
  <div class="container">
    <div>
      <h1 class="title">Zenn-app</h1>
      <h2 class="subtitle">
        {{ subTitle }}
      </h2>
      <button @click="getSomething">タスク取得</button>

      <ul v-for="task in tasks" :key="task.id">
        <li style="text-align: left">{{ task.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { TaskRepository } from '../repositories/task';
definePageMeta({
  title: 'Index Page',
});

const subTitle = ref('Zenn is good service!!');
const tasks = ref([]);

const getSomething = async () => {
  try {
    const response = await TaskRepository.get();
    tasks.value = response.data.tasks;
    console.log(response);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
</script>
