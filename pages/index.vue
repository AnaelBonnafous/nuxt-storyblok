<script setup lang="ts">
const story = await useStoryblok(
  "home",
  {
    version: "draft",
    resolve_relations: "featuredProjects.projects",
  },
  {
    resolveRelations: ["featuredProjects.projects"],
  }
);
useHead({
  title: "Home",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
