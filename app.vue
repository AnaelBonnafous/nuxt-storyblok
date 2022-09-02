<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - NuxtStoryblok` : "NuxtStoryblok",
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </div>
</template>
