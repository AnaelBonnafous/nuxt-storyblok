<script setup lang="ts">
defineProps({
  blok: Object,
});
</script>

<template>
  <div>
    <StoryblokComponent
      v-for="b in blok.body"
      :key="b._uid"
      :blok="b"
      v-editable="b"
    />
  </div>
</template>
