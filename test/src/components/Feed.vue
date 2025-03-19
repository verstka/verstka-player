<script setup lang="ts">
import { onMounted } from 'vue'
import verstkaPlayer from 'verstka-player';
import posts from '../posts'
import { usePostTracking } from '../composables/usePostTracking';

/**
 * Use post tracking composable to manage URL changes
 * The URL changes when a post has the largest visible area in the viewport
 */
const { initTracking } = usePostTracking({
  posts
});

onMounted(() => {
  /**
   * Initialize post tracking for scroll-based visibility detection
   */
  initTracking();

  /**
   * Enable Verstka Player
   */
  verstkaPlayer.Article.enable();
});

</script>

<template>
  <div class="feed">
    <div
      class="feed-item"
      v-for="(post, index) in posts"
      :key="index"
      v-html="post"
    />
  </div>
</template>

<style scoped>
.feed {
  max-width: 600px;
  border-radius: 16px;
  margin: 20px auto;
  padding-bottom: 90vh;
}

.feed-item {
  border-radius: 16px;
  background-color: #fff;
  overflow: hidden;
  margin: 300px 0;
}

</style>
