<template>
  <div class="grid grid-cols-3 gap-1">
    <AppPost :post="post" v-for="(post, index) in posts" :key="index" />
  </div>
  <NuxtLink to="/newpost">New Post</NuxtLink>
  <br />
  <NuxtLink to="/">index</NuxtLink>
</template>
<script setup lang="ts">
import AppPost from './../components/AppPost.vue';
import { PostRepository } from '~/repositories/post';
import { type Post } from '~/repositories/post';
const posts = ref<Post[]>([]);
const onGetPosts = async () => {
  await PostRepository.get()
    .then((res) => {
      posts.value = res;
    })
    .catch((err: Error) => {
      console.error(err.message);
      alert(
        '原因不明のエラーが発生しました。リロードすることで解決することがあります。'
      );
    });
};
onMounted(() => {
  onGetPosts(); // <div>
});
</script>
