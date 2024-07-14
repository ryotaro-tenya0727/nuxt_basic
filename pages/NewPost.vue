<template>
  <div class="flex items-center h-screen w-full bg-teal-lighter">
    <div class="w-full bg-white rounded shadow-lg p-8 m-4">
      <h1 class="block w-full text-center text-grey-darkest mb-6">New Post</h1>
      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-grey-darkest" for="title"
          >Title</label
        >
        <input
          v-model="postData.title"
          class="border py-2 px-3 text-grey-darkest"
          type="text"
          name="first_name"
          id="first_name"
        />
      </div>
      <div class="flex flex-col mb-4">
        <label class="mb-2 font-bold text-lg text-grey-darkest" for="body"
          >Body</label
        >
        <textarea
          v-model="postData.body"
          class="border py-2 px-3 text-grey-darkest"
          name="body"
          id="body"
        ></textarea>
      </div>
      <button
        @click="handleCreatePost()"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase text-lg mx-auto rounded"
        type="submit"
      >
        Create Post
      </button>
    </div>
  </div>
  <br />
  <NuxtLink to="/posts">Posts</NuxtLink>
</template>

<script setup lang="ts">
import { PostRepository } from '~/repositories/post';
type PostData = {
  title: string;
  body: string;
};
const postData = reactive<PostData>({
  title: '',
  body: '',
});

const handleCreatePost = async () => {
  await PostRepository.create(postData).then((res) => {
    console.log(res);
  });
};
</script>

<style scoped></style>
