<script setup lang="ts">
const route = useRoute();
const story = await useStoryblok(
  "home",
  {
    version: route.query._storyblok ? "draft" : "published",
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
