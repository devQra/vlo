<script setup lang="ts">
import '@/assets/style/components/UserCard.scss'

defineProps(['userData'])
</script>

<template>
  <router-link
    class="card-contents-box"
    v-for="item in userData"
    :key="item.id"
    :to="{ name: 'postDetail', query: { id: item.id } }"
  >
    <div class="card-user-profile-img">
      <img src="../../assets/img/E64AD629-05F6-4E88-8A2C-5A37046CD571_1_105_c.jpeg" alt="" />
    </div>
    <div class="card-user-info">
      <div class="card-user-info-main">
        <div class="card-user-name">{{ item.name }}</div>
        <div class="card-user-intro">{{ item.intro }}</div>
      </div>
      <div class="card-user-info-sub">
        <div class="card-follow-count">팔로워 -명</div>
        <div class="card-separator">·</div>
        <div class="card-post-count">글 -개</div>
      </div>
    </div>
  </router-link>
</template>
