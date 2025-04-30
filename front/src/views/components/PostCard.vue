<script setup lang="ts">
import '@/assets/style/components/PostCard.scss'

defineProps(['postData'])
</script>

<template>
  <router-link
    class="card-contents-box"
    v-for="item in postData"
    :key="item.id"
    :to="{ name: 'postDetail', query: { id: item.id } }"
  >
    <div class="card-preview-img">
      <img src="../../assets/img/E64AD629-05F6-4E88-8A2C-5A37046CD571_1_105_c.jpeg" alt="" />
    </div>
    <div class="card-post-info">
      <div class="card-post-preview">
        <div class="card-post-title">{{ item.postTitle }}</div>
        <div class="card-post-contents">{{ item.postContents }}</div>
      </div>
      <div class="card-post-sub-info">
        <div class="card-post-date">2023.01.01</div>
        <div class="card-separator">·</div>
        <div class="card-post-comments">댓글 -개</div>
      </div>
    </div>
    <div class="card-writer-info">😀 by OOO</div>
  </router-link>
</template>
