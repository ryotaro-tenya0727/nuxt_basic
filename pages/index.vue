<template>
  <div class="container">
    <div>
      <h1 :class="{ isActive: isActive }">Zenn-app</h1>
      <h2 class="subtitle">
        {{ subTitle }}
      </h2>
      <NuxtLink to="/about"> About page </NuxtLink>
      <br />
      <NuxtLink to="/login"> Login page </NuxtLink>
      <br />
      <button @click="getSomething">タスク取得</button>
      <br />
      <button @click="handleError">Raise errors</button>

      <ul v-for="task in tasks" :key="task.id">
        <li style="text-align: left">{{ task.title }}</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss"></style>

<script setup lang="ts">
import { TaskRepository } from '../repositories/task';
definePageMeta({
  title: 'Index Page',
});
const handleError = () => {
  console.log('handleError');
  // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
};

type Task = {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
};
type TaskResponse = {
  data: {
    tasks: Task[];
  };
};

const subTitle = ref<string>('Zenn is good service!!');
const tasks = ref<Task[]>([]);
const isActive = ref<boolean>(true);

const taskarrays: Task[] = [];

const getSomething = async () => {
  try {
    const response = (await TaskRepository.get()) as TaskResponse;
    tasks.value = response.data.tasks;
    console.log(response);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
</script>
