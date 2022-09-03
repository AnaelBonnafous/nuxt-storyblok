<script setup lang="ts">
const route = useRoute();
const story = await useStoryblok(`projects/${route.params.slug}`, {
  version: route.query._storyblok ? "draft" : "published",
});
useHead({
  title: story.value.content.name,
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
