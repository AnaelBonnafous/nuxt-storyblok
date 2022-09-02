<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>

<template>
  <div class="container">
    <h1 class="featured-projects-title">{{ blok.title }}</h1>
    <div class="featured-projects" v-editable="blok">
      <div v-for="project in blok.projects" :key="project.uuid" class="project">
        <NuxtLink :to="project.full_slug">
          <img
            :src="project.content?.image?.filename"
            :alt="project.content?.image?.alt"
          />
          <p>{{ project.content?.name }}</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
