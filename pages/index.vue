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

<script>
import { TaskRepository } from '../repositories/task';
definePageMeta({
  title: 'Index Page',
});

export default {
  data() {
    return {
      subTitle: 'Zenn is good service!!',
      tasks: [],
    };
  },
  methods: {
    async getSomething() {
      const response = await TaskRepository.get();
      this.tasks = response.data.tasks;
      console.log(response);
    },
  },
};
</script>
