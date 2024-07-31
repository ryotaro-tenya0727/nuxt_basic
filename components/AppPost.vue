<template>
  <div class="rounded overflow-hidden shadow-lg mt-8 pt-8 mr-8">
    <div class="font-bold text-xl mb-2">{{ post.title }}</div>
    <p class="text-grey-darker text-base">
      {{ post.body }}
    </p>
    <p class="text-grey-darker text-base">
      {{ post.body }}
    </p>
    <p class="text-grey-darker text-base" v-text="customBody"></p>
    <img :src="post.image" width="50" />
  </div>
</template>
<script setup lang="ts">
import { type Post } from './../repositories/post';

const props = defineProps<{
  post: Post;
}>();

const customBody = computed(() => {
  return `${props.post.body.repeat(5)}`;
});
</script>

<style scoped></style>
