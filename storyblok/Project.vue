<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>

<template>
  <div class="container project-page" v-editable="blok">
    <div class="project-title">
      <h1>{{ blok.name || "New project" }}</h1>
      <NuxtLink :to="{ name: 'index' }">Go back</NuxtLink>
    </div>
    <div class="project-description">
      <img :src="blok.image?.filename || 'https://picsum.photos/300/175'" :alt="blok.image?.alt">
      <p>{{ blok.description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione quis iste repellat, distinctio doloremque temporibus vel quos placeat qui! Facilis eveniet nulla nostrum debitis laboriosam excepturi quos amet eaque vel." }}</p>
    </div>
  </div>
</template>
