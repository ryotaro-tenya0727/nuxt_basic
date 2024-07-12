<template>
  <div>
    <section>
      <p>This page will be displayed at the /about route.</p>
    </section>
    <br />
    <NuxtLink to="/"> Home </NuxtLink>
  </div>
</template>
<script setup>
definePageMeta({
  title: 'About Page',
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
